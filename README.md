# <h1 align="center">SYNTAXIFY 💫</h1>

Syntaxify is a simple and elegant code terminal library that features a copy-to-clipboard button and uses Prism.js for syntax highlighting. 

## Features

- Beautiful terminal-like interface
- Syntax highlighting powered by Prism.js
- Copy-to-clipboard functionality for code snippets
- Customizable and easy to integrate

## Installation

### Using npm

To install Syntaxify using npm, run:

```sh
npm install syntaxify
```

### Using CDN

To use syntaxify via CDN, include the following links into ypur HTML:

```html
<!-- Include Syntaxify CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SamuelDevp/Syntaxify@main/src/code-terminal.css">

<!-- Include Syntaxify JS -->
<script src="https://cdn.jsdelivr.net/gh/SamuelDevp/Syntaxify@main/src/code-terminal.js"></script>
```

## Usage

To add a new code block, simply add a new `<pre><code>` block with the appropriate language class. For example:

```html
<pre class="terminal-code">
  <code class="language-python">print('Hello, world!')</code>
</pre>
```

### Example Setup

Here's an example setup to include Syntaxify in your project:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Syntaxify Example</title>
  <!-- Include Syntaxify CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/SamuelDevp/Syntaxify@main/src/code-terminal.css">
  <!-- Include Prism.js CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism-okaidia.min.css">
</head>
<body>
  <div class="terminal">
    <!-- Header -->
    <div class="terminal-header">
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
    </div>

    <!-- Code Block -->
    <pre class="terminal-code">
      <code class="language-javascript">console.log('Hello, world!');</code>
    </pre>

    <!-- Copy Button -->
    <button class="copy-btn">Copy</button>
  </div>

  <!-- Include Prism.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/clipboard/prism-clipboard.min.js"></script>

  <!-- Include Syntaxify JS -->
  <script src="https://cdn.jsdelivr.net/gh/SamuelDevp/Syntaxify@main/src/code-terminal.js"></script>
</body>
</html>
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues, fork the repository, and send pull requests. Contributions are always welcome!

---

Enjoy using Syntaxify! 🎉 If you have any questions or need further assistance, feel free to ask.

