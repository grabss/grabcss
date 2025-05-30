<h3 align="center">grabcss</h3>

<p align="center">
  A minimal, utility-first CSS framework for rapid UI development.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/grabcss" target="_blank"><img src="https://img.shields.io/npm/v/grabcss.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/grabcss" target="_blank"><img src="https://img.shields.io/npm/l/grabcss.svg" alt="Package License" /></a>
</p>

---

## Installation

```console
npm i grabcss
```

## How to use

Using built CSS

```js
import "grabcss";

// Alternatively, you can import only the CSS file
// import "grabcss/grab.css";
```

Using SCSS

```scss
@use "grabcss/scss/mediaquery" as mediaquery;
@use "grabcss/scss/variables" as variables;
@use "grabcss/scss/utilities";
```

Using SCSS with customized variables

```scss
@use "grabcss/scss/mediaquery" as mediaquery;
@use "path/to/your-customized-variables" as variables;
@use "grabcss/scss/utilities";
```

```scss
// path/to/your-customized-variable.scss
@use "sass:map";
@use "grabcss/scss/variables" as variables with (
  // overrides
  $color-primary: #00a596
);

// additions
$color-light-border: #dce1e6;

$colors: map.merge(
  variables.$colors,
  (
    "light-border": $color-light-border,
  )
);

@forward "grabcss/scss/variables";
```
