# Python Book

A Python learning book built with mdBook, interactive quizzes, Pyodide code examples, and PyScript editors.

**📖 View the book:** https://maximilianhertenstein.github.io/python_book/

## Setup

This project uses:
- **mdBook v0.5.4** - for building the book
- **mdbook-quiz v0.5.0** - for interactive quiz support
- **PyScript** - for interactive Python editors
- **Pyodide** - for optional Python code blocks marked with `py-execute`

### Installation

Install the required versions:

```bash
# Install mdBook v0.5.4
cargo install mdbook --version 0.5.4 --locked

# Install mdbook-quiz v0.5.0
cargo install mdbook-quiz --version 0.5.0 --locked
```

## Building

To build the book:

```bash
mdbook build
```

To serve the book locally with live reload:

```bash
mdbook serve
```

The built book will be in the `book/` directory.

## Interactive Code Execution

Python code blocks are highlighted by default. They only receive a play button when
the optional `py-execute` attribute is added to the fence:

````markdown
```python,py-execute
print("Hello, Python!")
```
````

The play button loads Pyodide lazily on its first click. Plain `python` blocks
remain examples without code execution. For shared, editable Python state, use
PyScript editors:

````markdown
<script type="py-editor" env="klasse">
print("Hello, Python!")
</script>
````

Editors can share state when they use the same `env` name.

## Project Structure

```
src/
├── chapter_1.md      # Chapter 1 with example quiz and runnable snippets
├── chapter_2.md      # Chapter 2
├── chapter_3.md      # PyScript editor examples
├── SUMMARY.md        # Table of contents
├── quizzes/
│   └── python-basics.toml  # Example quiz file
└── book_theme/       # Custom mdBook theme
    ├── additional.css    # Editor and play-button styling
    ├── head.hbs          # PyScript, Pyodide, and runner scripts
    ├── header.hbs        # Optional page header
    └── runner.js         # Optional py-execute runner
```

## Styling

The custom theme in `src/book_theme/additional.css` includes:
- PyScript editor styling for readability
- Play-button and output styling for `py-execute` blocks

## Quizzes

Quizzes are stored in `src/quizzes/` as TOML files and referenced in markdown using `{{#quiz filename.toml}}`. See the [mdbook-quiz documentation](https://github.com/cognitive-engineering-lab/mdbook-quiz) for quiz format and available question types.

## GitHub Actions / CI/CD Setup

A deployment workflow is configured in `.github/workflows/deploy.yml` to automatically build and deploy the book. It installs mdBook and mdbook-quiz, builds the book, and uploads the output for deployment.

