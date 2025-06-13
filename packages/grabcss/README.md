<div align="center">

# grabcss

*A minimal, utility-first CSS framework for rapid UI development*

[![NPM Version](https://img.shields.io/npm/v/grabcss.svg)](https://www.npmjs.com/package/grabcss)
[![License](https://img.shields.io/npm/l/grabcss.svg)](https://www.npmjs.com/package/grabcss)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/grabcss)](https://bundlephobia.com/package/grabcss)

**[View Playground »](https://grabss.github.io/grabcss/)**

</div>

## Features

- **Lightweight**: Minimal footprint with only essential utilities
- **Customizable**: Easy theming with CSS custom properties and SCSS variables
- **Responsive**: Mobile-first breakpoint system (xs, sm, md, lg, xl)
- **Utility-First**: Compose designs directly in your markup
- **Modern**: Built with modern CSS features and SCSS
- **Focused**: Core utilities without unnecessary bloat

## Installation

```bash
npm install grabcss
```

## Quick Start

### Import Pre-built CSS

```js
import "grabcss/grab.css";
```

### Use with SCSS

```scss
@use "grabcss/scss/main";
```

### Custom Configuration

```scss
// your-theme.scss
@use "sass:map";
@use "grabcss/scss/variables" with (
  $color-primary: #00a596,
  $color-secondary: #2563eb,
  $define-colors: (
    "primary": #00a596,
    "secondary": #2563eb,
    "success": #10b981,
    "warning": #f59e0b,
    "danger": #ef4444,
    "info": #3b82f6
  )
);

@use "grabcss/scss/main";
```

## Utility Classes

### Colors
```html
<div class="text-primary bg-secondary">Primary text on secondary background</div>
<div class="text-danger">Danger text</div>
```

### Typography
```html
<h1 class="fs-4xl fw-bold">Large bold heading</h1>
<p class="fs-md lh-md text-muted">Regular paragraph with medium line height</p>
```

### Layout & Flexbox
```html
<div class="d-flex justify-content-center align-items-center">
  <div class="flex-1">Flexible item</div>
</div>

<div class="d-grid grid-template-cols-3 g-md">
  <div>Grid item 1</div>
  <div>Grid item 2</div>
  <div>Grid item 3</div>
</div>
```

### Spacing
```html
<div class="m-lg p-md">Margin large, padding medium</div>
<div class="mx-auto">Centered horizontally</div>
<div class="py-sm">Vertical padding small</div>
```

### Responsive Design
```html
<div class="d-block sm:d-flex lg:d-grid">
  <!-- Block on mobile, flex on small+, grid on large+ -->
</div>

<div class="fs-sm md:fs-lg">
  <!-- Small text on mobile, large on medium+ screens -->
</div>
```

## Breakpoints

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `xs` | - (max 575px) | Mobile |
| `sm` | 576px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 992px | Desktops |
| `xl` | 1200px | Large desktops |

## Design Tokens

### Colors
- Primary: `#00a596`
- Secondary: `#000000`
- Background: `#ffffff`
- Border: `#dce1e6`
- Text: `#000000`
- Muted: `#787878`
- Link: `#0064e6`
- Warning: `#ffc107`
- Danger: `#dc3545`

### Font Sizes
- `xs`: 12px
- `sm`: 14px
- `md`: 16px (base)
- `lg`: 18px
- `xl`: 20px
- `2xl`: 22px
- `3xl`: 24px
- `4xl`: 36px
- `5xl`: 40px

### Spacing Scale
- `2xs`: 5px
- `xs`: 10px
- `sm`: 15px
- `md`: 20px
- `lg`: 25px
- `xl`: 30px
- `2xl`: 35px
- `3xl`: 40px
- `4xl`: 45px
- `5xl`: 50px

## Available Utilities

### Display
`.d-{value}` - none, block, inline, inline-block, flex, inline-flex, grid, inline-grid, table-cell, contents

### Position
`.ps-{value}` - static, relative, absolute, fixed, sticky

### Flexbox
- `.flex-direction-{value}` - row, row-reverse, column, column-reverse
- `.flex-wrap-{value}` - nowrap, wrap, wrap-reverse
- `.justify-content-{value}` - start, center, end, flex-start, flex-end, space-between, space-around
- `.align-items-{value}` - start, center, end, flex-start, flex-end
- `.flex-1`, `.flex-shrink-0`

### Grid
- `.grid-template-cols-{value}` - 1, 2, 3, 4, 5, 6, 12, none
- `.grid-template-rows-{value}` - 1, 2, 3, 4, 6, none
- `.grid-col-{value}` - auto, span-1 to span-6, span-full
- `.grid-row-{value}` - auto, span-1 to span-6, span-full
- `.place-content-{value}`, `.place-items-{value}`, `.place-self-{value}`

### Spacing
- Margin: `.m-{size}`, `.mx-{size}`, `.my-{size}`, `.mt-{size}`, `.mr-{size}`, `.mb-{size}`, `.ml-{size}`
- Padding: `.p-{size}`, `.px-{size}`, `.py-{size}`, `.pt-{size}`, `.pr-{size}`, `.pb-{size}`, `.pl-{size}`
- Gap: `.g-{size}`, `.rg-{size}`, `.cg-{size}`

### Sizing
`.w-{value}`, `.h-{value}` - auto, fit-content, none, 50, 100

### Text
- `.text-{color}` - primary, secondary, muted, etc.
- `.text-align-{value}` - left, center, right
- `.fs-{size}` - xs, sm, md, lg, xl, 2xl, 3xl, 4xl, 5xl
- `.fw-{weight}` - normal, bold
- `.lh-{value}` - default, xs, sm, md, lg
- `.ws-{value}` - normal, nowrap, pre, pre-wrap, pre-line
- `.wb-{value}` - normal, break-all, keep-all, break-word

### Background
`.bg-{color}` - primary, secondary, background, etc.

### Visibility
`.v-{value}` - visible, hidden

## Examples

### Card Component
```html
<div class="bg-background p-lg">
  <h2 class="fs-xl fw-bold text-heading mb-sm">Card Title</h2>
  <p class="text-body lh-md mb-md">Card description with proper line height.</p>
  <button class="bg-primary text-background px-md py-sm">Action Button</button>
</div>
```

### Responsive Layout
```html
<div class="d-flex flex-direction-column md:flex-direction-row g-md">
  <div class="flex-1 bg-primary text-background p-md">
    <h3 class="fs-lg mb-sm">Main Content</h3>
    <p class="fs-sm">This adapts from vertical stack on mobile to horizontal on tablets and up.</p>
  </div>
  <div class="w-100 md:w-auto bg-secondary text-background p-md">
    <h4 class="fs-md mb-xs">Sidebar</h4>
    <p class="fs-sm">Fixed width on larger screens.</p>
  </div>
</div>
```

## License

MIT License - see [LICENSE](./LICENSE) file for details.

## Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.
