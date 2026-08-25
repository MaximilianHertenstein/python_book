// Leichtgewichtiger "Ausführen"-Button fuer einfache ```python-Codebloecke.
// Ergaenzt PyScript (<script type="py-editor">), das fuer die interaktiven
// Editoren in Kapitel 3 verwendet wird. Hier wird ein eigener, schlanker
// Pyodide-Interpreter genutzt, der erst beim ersten Klick geladen wird.
(() => {
    const el = (tag, props) => Object.assign(document.createElement(tag), props);

    let pyodideReadyPromise = null;
    const getPyodide = () => pyodideReadyPromise ??= loadPyodide().catch((error) => {
        pyodideReadyPromise = null;
        throw error;
    });

    function rehighlight(block) {
        const hljs = window.hljs;
        if (!hljs) return;
        delete block.dataset.highlighted; // hljs highlightet pro Element sonst nur einmal
        (hljs.highlightElement ?? hljs.highlightBlock)?.call(hljs, block);
    }

    async function runCode(block, runBtn, output) {
        if (runBtn.dataset.running === 'true') return;

        runBtn.dataset.running = 'true';
        runBtn.disabled = true;
        output.style.display = 'block';
        output.classList.remove('py-output-error');
        output.textContent = 'Lädt Python-Umgebung …';

        try {
            const pyodide = await getPyodide();
            const lines = [];
            const capture = { batched: (text) => lines.push(text) };
            pyodide.setStdout(capture);
            pyodide.setStderr(capture);

            output.textContent = 'Berechne …';
            // Pyodide gibt den Wert des letzten Ausdrucks automatisch zurueck (REPL-Verhalten von eval_code).
            const result = await pyodide.runPythonAsync(block.textContent || '');
            if (result != null) lines.push(result);

            output.textContent = lines.join('\n');
        } catch (error) {
            output.classList.add('py-output-error');
            output.textContent = String(error);
        } finally {
            runBtn.dataset.running = 'false';
            runBtn.disabled = false;
        }
    }

    function createRunner(block) {
        const pre = block.parentElement;

        block.setAttribute('contenteditable', 'true');
        block.setAttribute('spellcheck', 'false');
        block.setAttribute('autocorrect', 'off');
        block.setAttribute('autocapitalize', 'off');
        block.addEventListener('blur', () => rehighlight(block));

        let buttons = pre.querySelector('.buttons');
        if (!buttons) pre.prepend(buttons = el('div', { className: 'buttons' }));

        const runBtn = el('button', {
            type: 'button',
            className: 'py-play-btn',
            title: 'Ausführen',
            innerHTML: document.getElementById('fa-play')?.innerHTML ?? '▶',
        });
        runBtn.setAttribute('aria-label', 'Ausführen');
        buttons.prepend(runBtn);

        const output = el('div', { className: 'py-output' });
        pre.after(output);

        runBtn.addEventListener('click', () => runCode(block, runBtn, output));
    }

    const start = () => document.querySelectorAll('code.language-python.py-execute').forEach(createRunner);
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
})();