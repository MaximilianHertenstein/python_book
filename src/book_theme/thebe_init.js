(() => {
  addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code.language-python').forEach(c => 
      c.parentElement?.setAttribute('data-executable', 'true')
    );
  });
})();