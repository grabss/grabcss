<h1 align="center">grabcss</h1>

<p align="center">
  A minimal, utility-first CSS framework for rapid UI development with comprehensive CSS Grid and Flexbox utilities.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/grabcss" target="_blank"><img src="https://img.shields.io/npm/v/grabcss.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/grabcss" target="_blank"><img src="https://img.shields.io/npm/l/grabcss.svg" alt="Package License" /></a>
  <img src="https://img.shields.io/bundlephobia/minzip/grabcss" alt="Bundle Size" />
</p>

---

## Features

- 🎯 **Utility-First**: Pre-built utility classes for rapid development
- 📱 **Responsive**: Mobile-first responsive design with 5 breakpoints
- 🎨 **Modern CSS**: CSS Grid, Flexbox, and Custom Properties support
- 🪶 **Lightweight**: ~160KB uncompressed, ~12KB gzipped
- 🛠️ **Customizable**: SCSS variables and mixins for easy customization
- 🚀 **Zero Dependencies**: Pure CSS output, no JavaScript required

## Installation

```bash
npm install grabcss
```

## Quick Start

### Basic Layout with Flexbox

```html
<div
  class="d-flex justify-content-center align-items-center"
  style="height: 100vh;"
>
  <h1 class="fs-4xl fw-bold text-primary">Hello grabcss!</h1>
</div>
```

### CSS Grid Layout

```html
<div class="d-grid grid-template-cols-3 g-md">
  <div class="bg-primary text-white p-md">Item 1</div>
  <div class="bg-secondary text-white p-md">Item 2</div>
  <div class="bg-primary text-white p-md">Item 3</div>
</div>
```

### Responsive Design

```html
<div class="d-block md:d-flex lg:d-grid lg:grid-template-cols-4">
  <div class="p-md">Responsive layout</div>
</div>
```

## Usage

### Using built CSS

```js
import "grabcss";

// Alternatively, you can import only the CSS file
// import "grabcss/grab.css";
```

### Using SCSS

```scss
@use "grabcss/scss";
```

### Using SCSS with customization

```scss
@use "grabcss/scss" with (
  $color-primary: #your-brand-color
);
```

## Available Classes

### Layout & Display

- `.d-{display}` - Display properties
  - Basic: `none`, `block`, `inline`, `inline-block`
  - Modern: `flex`, `inline-flex`, `grid`, `inline-grid`
- `.ps-{position}` - Position (`static`, `relative`, `absolute`, `fixed`, `sticky`)
- `.v-{visibility}` - Visibility (`visible`, `hidden`)

### CSS Grid

- `.grid-template-cols-{n}` - Grid columns (`1`, `2`, `3`, `4`, `5`, `6`, `12`)
- `.grid-template-rows-{n}` - Grid rows (`1`, `2`, `3`, `4`, `6`)
- `.grid-col-span-{n}` - Column span (`1`, `2`, `3`, `4`, `5`, `6`, `full`)
- `.grid-row-span-{n}` - Row span (`1`, `2`, `3`, `4`, `6`, `full`)
- `.place-{type}-{position}` - Grid alignment
  - Types: `content`, `items`, `self`
  - Positions: `start`, `center`, `end`, `stretch`, `between`, `around`, `evenly`

### Flexbox

- `.flex-direction-{direction}` - Direction (`row`, `row-reverse`, `column`, `column-reverse`)
- `.flex-wrap-{wrap}` - Wrap (`nowrap`, `wrap`, `wrap-reverse`)
- `.justify-content-{position}` - Main axis alignment
- `.align-items-{position}` - Cross axis alignment
- `.flex-1` - Flex grow
- `.flex-shrink-0` - Prevent flex shrinking

### Colors

- `.text-{color}` - Text colors
- `.bg-{color}` - Background colors

Available colors: `primary`, `secondary`, `background`, `border`, `heading`, `body`, `link`, `muted`, `warning`, `danger`

### Typography

- `.fs-{size}` - Font sizes (`xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`)
- `.fw-{weight}` - Font weights (`normal`, `bold`)
- `.lh-{height}` - Line heights (`default`, `xs`, `sm`, `md`, `lg`)
- `.text-align-{direction}` - Text alignment (`left`, `center`, `right`)

### Spacing

- **Margin**: `.m-{size}`, `.mt-{size}`, `.mb-{size}`, `.ml-{size}`, `.mr-{size}`, `.mx-{size}`, `.my-{size}`
- **Padding**: `.p-{size}`, `.pt-{size}`, `.pb-{size}`, `.pl-{size}`, `.pr-{size}`, `.px-{size}`, `.py-{size}`
- **Gap**: `.g-{size}`, `.rg-{size}`, `.cg-{size}` - Gap properties for Grid and Flexbox

Available sizes: `auto`, `none`, `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`

### Sizing

- `.w-{size}` - Width (`auto`, `fit-content`, `none`, `50`, `100`)
- `.h-{size}` - Height (`auto`, `fit-content`, `none`, `50`, `100`)

### Text Properties

- `.ws-{space}` - White space (`normal`, `nowrap`, `pre`, `pre-wrap`, `pre-line`)
- `.wb-{break}` - Word break (`normal`, `break-all`, `keep-all`, `break-word`)

## Responsive Breakpoints

All utility classes support responsive prefixes for mobile-first design:

- `xs:` - Extra small devices (max-width: 575px)
- `sm:` - Small devices (min-width: 576px)
- `md:` - Medium devices (min-width: 768px)
- `lg:` - Large devices (min-width: 992px)
- `xl:` - Extra large devices (min-width: 1200px)

### Example: Responsive Grid

```html
<div
  class="d-grid grid-template-cols-1 md:grid-template-cols-2 lg:grid-template-cols-3 xl:grid-template-cols-4 g-md"
>
  <div class="bg-primary text-white p-md">Responsive Item</div>
  <!-- More items -->
</div>
```

## Customization

### SCSS Variables

You can customize grabcss by overriding SCSS variables:

```scss
@use "sass:map";
@use "grabcss/scss" with (
  // Override existing colors
  $color-primary: #ff6b6b,
  $color-secondary: #4ecdc4,

  // Redefine color palette
  $define-colors: (
      "primary": #ff6b6b,
      "secondary": #4ecdc4,
      "accent": #45b7d1,
      "success": #96ceb4,
      "warning": #feca57,
      "danger": #ff9ff3,
      "dark": #2f3542,
      "light": #f1f2f6
    ),

  // Custom spacing scale
  $space-xs: 0.5rem,
  $space-sm: 1rem,
  $space-md: 1.5rem,
  $space-lg: 2rem,
  $space-xl: 3rem
);
```

### CSS Custom Properties

grabcss uses CSS custom properties, allowing runtime customization:

```css
:root {
  --color-primary: #your-brand-color;
  --space-md: 2rem;
  --font-size-lg: 1.25rem;
}
```

### Key Variables

- `$color-*` - Color definitions
- `$font-size-*` - Font size scale (xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl)
- `$space-*` - Spacing scale (2xs, xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl)
- `$font-weight-*` - Font weight values
- `$line-height-*` - Line height scale

## Contributing

For development setup and contribution guidelines, see [dev/README.md](dev/README.md).

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.
