// Leichtgewichtiger "Ausführen"-Button fuer einfache ```python-Codebloecke.
// Ergaenzt PyScript (<script type="py-editor">), das fuer die interaktiven
// Editoren in Kapitel 3 verwendet wird. Hier wird ein eigener, schlanker
// Pyodide-Interpreter genutzt, der erst beim ersten Klick geladen wird.
(() => {
    let pyodideReadyPromise = null;

    function getPyodide() {
        if (!pyodideReadyPromise) {
            pyodideReadyPromise = loadPyodide().catch((error) => {
                pyodideReadyPromise = null;
                throw error;
            });
        }
        return pyodideReadyPromise;
    }

    function createRunner(block) {
        const pre = block.parentElement;

        block.setAttribute('contenteditable', 'true');
        block.setAttribute('spellcheck', 'false');
        block.setAttribute('autocorrect', 'off');
        block.setAttribute('autocapitalize', 'off');
        block.addEventListener('blur', () => {
            if (window.hljs && typeof window.hljs.highlightBlock === 'function') {
                window.hljs.highlightBlock(block);
            }
        });

        let buttons = pre.querySelector('.buttons');
        if (!buttons) {
            buttons = document.createElement('div');
            buttons.className = 'buttons';
            pre.insertBefore(buttons, pre.firstChild);
        }

        const runBtn = document.createElement('button');
        runBtn.type = 'button';
        runBtn.className = 'py-play-btn';
        runBtn.title = 'Ausführen';
        runBtn.setAttribute('aria-label', runBtn.title);

        const faPlay = document.getElementById('fa-play');
        runBtn.innerHTML = faPlay ? faPlay.innerHTML : '▶';
        buttons.insertBefore(runBtn, buttons.firstChild);

        const output = document.createElement('div');
        output.className = 'py-output';
        pre.after(output);

        runBtn.addEventListener('click', async () => {
            if (runBtn.dataset.running === 'true') {
                return;
            }

            runBtn.dataset.running = 'true';
            runBtn.disabled = true;
            output.style.display = 'block';
            output.classList.remove('py-output-error');
            output.textContent = 'Lädt Python-Umgebung …';

            try {
                const pyodide = await getPyodide();
                let printed = '';

                pyodide.setStdout({ batched: (text) => { printed += text + '\n'; } });
                pyodide.setStderr({ batched: (text) => { printed += text + '\n'; } });

                output.textContent = 'Berechne …';
                const code = block.textContent || '';
                const result = await pyodide.runPythonAsync(`
import ast as __runner_ast

__runner_tree = __runner_ast.parse(${JSON.stringify(code)})
__runner_body = __runner_tree.body
if __runner_body and isinstance(__runner_body[-1], __runner_ast.Expr):
    __runner_setup = compile(
        __runner_ast.Module(body=__runner_body[:-1], type_ignores=[]),
        '<py-execute>',
        'exec'
    )
    exec(__runner_setup, globals())
    __runner_result = eval(
        compile(__runner_ast.Expression(__runner_body[-1].value), '<py-execute>', 'eval'),
        globals()
    )
else:
    exec(compile(__runner_tree, '<py-execute>', 'exec'), globals())
    __runner_result = None

__runner_result
`);

                let text = printed;
                if (result !== undefined && result !== null) {
                    text += (text ? '\n' : '') + result;
                }
                output.textContent = text || '';
            } catch (error) {
                output.classList.add('py-output-error');
                output.textContent = String(error);
            } finally {
                runBtn.dataset.running = 'false';
                runBtn.disabled = false;
            }
        });
    }

    function init() {
        document.querySelectorAll('code.language-python.py-execute').forEach(createRunner);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();