<p align="center">
  <a href="https://www.grabss.co.jp/">
    <img src="https://www.grabss.co.jp/wp-content/themes/grabss-theme02/dist/images/logomark-grabss.svg" alt="grabss Inc." width="200" height="165">
  </a>
</p>

<h3 align="center">grabcss</h3>

<p align="center">
  A minimal, utility-first CSS framework for rapid UI development, provided and utilized by grabss Inc.
</p>

---

## Getting started

### Installation

```console
npm i grabcss
```

### How to use

Using built CSS

```js
import "grabcss/dist/grab.css";
```

Using SCSS

```scss
@use "grabcss/dist/scss/mediaquery.scss" as mediaquery;
@use "grabcss/dist/scss/variables.scss" as variables;
@use "grabcss/dist/scss/utilities.scss";
```

## Customizing variables

```scss
@use "path/to/custom-variables.scss" as variables;
```

```scss
// path/to/custom-variables.scss

// overrides
@use "grabcss/dist/scss/variables.scss" as variables with (
  $color-primary: #00a596
);

// additions
$color-light-border: #dce1e6;

$colors: map-merge(
  variables.$colors,
  (
    "light-border": $color-light-border,
  )
);

@forward "grabcss/dist/scss/variables.scss";
```
