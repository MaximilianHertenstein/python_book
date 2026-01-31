# Python Book

A Python learning book built with mdBook and interactive quizzes.

## Setup

This project uses:
- **mdBook v0.4.45** - for building the book
- **mdbook-quiz v0.4.0** - for interactive quiz support

## Important: Version Compatibility

**mdbook-quiz v0.4.0 requires mdBook v0.4.45**, not the latest v0.5.x. This is a known incompatibility - see [mdbook-quiz issue #61](https://github.com/cognitive-engineering-lab/mdbook-quiz/issues/61).

### Installation

Install the required versions:

```bash
# Install mdBook v0.4.45
cargo install mdbook --version 0.4.45 --locked

# Install mdbook-quiz
cargo install mdbook-quiz --locked
```

## Building

To build the book, use either:

```bash
# Using npm
npm run build

# Or directly with mdbook
mdbook build
```

To serve the book locally with live reload:

```bash
# Using npm
npm run serve

# Or directly with mdbook
mdbook serve
```

The built book will be in the `book/` directory.

## Project Structure

```
src/
├── chapter_1.md      # Chapter 1 with example quiz
├── chapter_2.md      # Chapter 2
├── SUMMARY.md        # Table of contents
└── quizzes/
    └── python-basics.toml  # Example quiz file
```

## Quizzes

Quizzes are stored in `src/quizzes/` as TOML files and referenced in markdown using:

```markdown
{{#quiz python-basics.toml}}
```

### Quiz Format

Quizzes support multiple question types:

#### Short Answer
```toml
[[questions]]
type = "ShortAnswer"
prompt.prompt = "What is the output of 1 + 1 in Python?"
answer.answer = "2"
context = "Basic arithmetic in Python"
```

#### Multiple Choice
```toml
[[questions]]
type = "MultipleChoice"
prompt.prompt = "What keyword declares a variable?"
prompt.distractors = ["var", "def", "class"]
answer.answer = "let"
context = "In Python, variables are assigned directly without keywords"
```

For more quiz formats, see the [mdbook-quiz documentation](https://github.com/cognitive-engineering-lab/mdbook-quiz#quiz-schema).

## Troubleshooting

### "Unable to parse the input" error

This typically means you're using mdBook v0.5.x with mdbook-quiz v0.4.0. **Downgrade to mdBook v0.4.45**:

```bash
cargo install mdbook --version 0.4.45 --locked
```

### Quiz not rendering

- Ensure the quiz file path is relative to the markdown file: `{{#quiz ../quizzes/quiz-name.toml}}`
- Check that the TOML file is valid (no syntax errors)
- Verify the quiz file exists in `src/quizzes/`
