(() => {
  const activateEl = document.querySelector('.thebe-activate');

  const setStatus = (label, state) => {
    if (!activateEl) return;
    activateEl.textContent = label;
    activateEl.classList.remove('is-loading', 'is-ready', 'is-error');
    if (state) activateEl.classList.add(state);
  };

  const markPythonBlocks = () => {
    document.querySelectorAll('pre code.language-python').forEach(code => {
      const pre = code.parentElement;
      if (!pre) return;
      if (!pre.hasAttribute('data-executable')) pre.setAttribute('data-executable', 'true');
      if (!pre.hasAttribute('data-language')) pre.setAttribute('data-language', 'python');
    });
  };

  const positionRunButtons = () => {
    document.querySelectorAll('.thebe-cell').forEach(cell => {
      const controls = cell.querySelector('.thebe-controls');
      const cm = cell.querySelector('.CodeMirror');
      if (!controls || !cm) return;
      const cellRect = cell.getBoundingClientRect();
      const lineEl = cm.querySelector('.CodeMirror-code > pre') || cm.querySelector('.CodeMirror-line');
      const lineRect = lineEl ? lineEl.getBoundingClientRect() : cm.getBoundingClientRect();
      const lineHeight = lineRect.height || 24;
      const topLocalToCell = (lineRect.top - cellRect.top);
      const controlsRect = controls.getBoundingClientRect();
      const controlsHeight = controlsRect.height || lineHeight;
      const centeredTop = topLocalToCell + Math.max(0, (lineHeight - controlsHeight) / 2) - 1; // fine-tune offset
      controls.style.top = `${centeredTop}px`;
      controls.style.right = '0.4em';
    });
  };

  const waitForThebe = (timeoutMs = 5000) => new Promise((resolve, reject) => {
    const start = Date.now();
    const timer = setInterval(() => {
      const ready = window.thebe && window.thebe.bootstrap;
      if (ready) {
        clearInterval(timer);
        resolve(window.thebe);
      } else if (Date.now() - start > timeoutMs) {
        clearInterval(timer);
        reject(new Error('thebe not ready'));
      }
    }, 50);
  });

  let bootstrapping = false;
  const activate = async () => {
    if (bootstrapping) return;
    bootstrapping = true;
    setStatus('Starting…', 'is-loading');
    try {
      const thebe = await waitForThebe();
      await thebe.bootstrap({
        useBinder: false,
        useJupyterLite: true,
        requestKernel: true,
        selector: 'pre[data-executable]'
      });
      setStatus('Python ready', 'is-ready');
      // Prevent re-activating once ready
      activateEl.removeEventListener('click', activate);
      // Center run buttons on the first code line per cell
      setTimeout(positionRunButtons, 0);
      window.addEventListener('resize', positionRunButtons);
    } catch (err) {
      console.error('Thebe bootstrap failed:', err);
      setStatus('Error starting Python', 'is-error');
      bootstrapping = false;
    }
  };

  window.addEventListener('DOMContentLoaded', () => {
    markPythonBlocks();
    setStatus('Activate Python');
    if (activateEl) {
      activateEl.addEventListener('click', activate);
    }
  });
})();