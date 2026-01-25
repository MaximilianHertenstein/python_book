(() => {
  const btn = document.querySelector('.thebe-activate');

  const setStatus = (text, cls) => {
    if (!btn) return;
    btn.textContent = text;
    btn.className = 'thebe-activate' + (cls ? ' ' + cls : '');
  };

  const activate = async () => {
    if (!window.thebe?.bootstrap) return;
    btn.removeEventListener('click', activate);
    setStatus('Starting…', 'is-loading');
    try {
      await window.thebe.bootstrap({
        useBinder: false,
        useJupyterLite: true,
        requestKernel: true,
        selector: 'pre[data-executable]'
      });
      setStatus('Python ready', 'is-ready');
    } catch (err) {
      console.error(err);
      setStatus('Error', 'is-error');
    }
  };

  addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code.language-python').forEach(c => 
      c.parentElement?.setAttribute('data-executable', 'true')
    );
    setStatus('Activate Python');
    btn?.addEventListener('click', activate);
  });
})();