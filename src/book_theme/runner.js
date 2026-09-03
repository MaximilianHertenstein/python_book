// "Ausführen"-Button für ```python-Blöcke mit .py-execute.
// Lädt Pyodide erst beim ersten Klick (lazy), ergänzt die PyScript-Editoren.
(() => {
  const BASE = 'https://cdn.jsdelivr.net/pyodide/v0.26.0/full/';
  let pyodideP = null;
  let scriptP = null;

  const el = (tag, props) => Object.assign(document.createElement(tag), props);

  const loadPyodide = async () => {
    if (!window.loadPyodide) {
      scriptP ??= new Promise((resolve, reject) => {
        const s = el('script', { src: `${BASE}pyodide.js` });
        s.onload = resolve;
        s.onerror = () => {
          scriptP = null;
          reject(new Error('Pyodide konnte nicht geladen werden.'));
        };
        document.head.append(s);
      });
      await scriptP;
    }
    return (pyodideP ??= window.loadPyodide({ indexURL: BASE }).catch((e) => {
      pyodideP = null;
      throw e;
    }));
  };

  const rehighlight = (block) => {
    const hljs = window.hljs;
    if (!hljs) return;
    delete block.dataset.highlighted;
    (hljs.highlightElement ?? hljs.highlightBlock)?.call(hljs, block);
  };

  // Nur Nutzer-Code ab File "<exec>" zeigen, internen Pyodide-Trace abschneiden.
  const cleanError = (err) => {
    const msg = String(err);
    const i = msg.indexOf('File "<exec>"');
    return (i < 0 ? msg : msg.slice(i)).trim();
  };

  // Python-Strings mit repr() darstellen (Anführungszeichen), Rest direkt.
  const toDisplay = (pyodide, value) => {
    if (typeof value !== 'string') return value;
    const repr = pyodide.pyimport('builtins.repr');
    try {
      return repr(value);
    } finally {
      repr.destroy();
    }
  };

  async function run(block, btn, out) {
    if (btn.disabled) return;
    btn.disabled = true;
    out.hidden = false;
    out.classList.remove('py-output-error');
    out.textContent = 'Lädt Python-Umgebung …';
    try {
      const pyodide = await loadPyodide();
      const lines = [];
      const io = { batched: (t) => lines.push(t) };
      pyodide.setStdout(io);
      pyodide.setStderr(io);
      pyodide.setStdin({ stdin: () => prompt('Eingabe für input:') ?? '' });

      out.textContent = 'Berechne …';
      const result = await pyodide.runPythonAsync(block.textContent || '');
      if (result != null) lines.push(toDisplay(pyodide, result));
      out.textContent = lines.join('\n');
    } catch (e) {
      out.classList.add('py-output-error');
      out.textContent = cleanError(e);
    } finally {
      btn.disabled = false;
    }
  }

  function enhance(block) {
    const pre = block.parentElement;
    block.contentEditable = 'true';
    block.spellcheck = false;
    block.setAttribute('autocorrect', 'off');
    block.setAttribute('autocapitalize', 'off');
    block.addEventListener('blur', () => rehighlight(block));

    let bar = pre.querySelector('.buttons');
    if (!bar) {
      bar = el('div', { className: 'buttons' });
      pre.prepend(bar);
    }

    const btn = el('button', {
      type: 'button',
      className: 'py-play-btn',
      title: 'Ausführen',
      innerHTML: document.getElementById('fa-play')?.innerHTML ?? '▶',
    });
    btn.setAttribute('aria-label', 'Ausführen');
    bar.prepend(btn);

    const out = el('div', { className: 'py-output', hidden: true });
    pre.after(out);

    btn.addEventListener('click', () => run(block, btn, out));
  }

  const start = () => document.querySelectorAll('code.language-python.py-execute').forEach(enhance);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
