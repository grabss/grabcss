# grabcss Development

This directory contains the development playground and tools for grabcss.

## Project Structure

```
grabcss/
├── src/           # Library source code
│   └── styles/    # SCSS files
├── dev/           # Development playground (this directory)
│   ├── demo.ts    # Demo application
│   └── index.html # Playground HTML
├── dist/          # Built CSS output
└── package.json   # Main package configuration
```

## Requirements

- Node.js 18+
- pnpm

## Setup

```bash
git clone https://github.com/grabss/grabcss.git
cd grabcss

# Install root dependencies
pnpm install

# Install playground dependencies
cd dev
pnpm install
cd ..
```

## Development Commands

### Build the Library

```bash
# From root directory
pnpm run build
```

This compiles the SCSS source files and generates:

- `dist/grab.css` - Main CSS file
- `dist/grab.scss` - Source SCSS file
- `dist/scss/` - Individual SCSS modules

### Development Playground

```bash
# Navigate to playground and install dependencies
cd dev
pnpm install

# Start the development server
pnpm run dev
```

This starts a local development server at `http://localhost:3000` where you can:

- Test utility classes
- Preview changes in real-time
- Experiment with new features

### Code Quality

```bash
# From root directory
pnpm run lint    # Check code style and errors
pnpm run format  # Auto-fix formatting issues
```

## Development Workflow

### Adding New Utilities

1. **Define variables** in `src/styles/variables.scss`
2. **Add utility configuration** in `src/styles/utilities.scss`
3. **Test in playground** by updating `dev/demo.ts`
4. **Build and verify** output in `dist/grab.css`

### Example: Adding New Color

```scss
// src/styles/variables.scss
$define-colors: (
  // existing colors...
  'new-color': #your-color
);
```

The utility classes will be automatically generated:

- `.text-new-color`
- `.bg-new-color`
- `.xs:text-new-color`, `.sm:text-new-color`, etc.

### Testing Changes

The playground (`dev/demo.ts`) demonstrates various utility classes. Update it to test your changes:

```typescript
// dev/demo.ts
app.innerHTML = `
  <div class="bg-new-color text-white p-md">
    Testing new color utility
  </div>
`
```

## Build Process

The build process uses Vite and processes:

1. **SCSS Compilation**: `src/styles/index.scss` → `dist/grab.css`
2. **Source Copying**: Individual SCSS files → `dist/scss/`
3. **Asset Processing**: Minification and optimization

## Debugging

### Common Issues

- **Build errors**: Check SCSS syntax in `src/styles/`
- **Missing classes**: Verify utility configuration in `utilities.scss`
- **Style conflicts**: Check CSS specificity and cascade

### Useful Commands

```bash
# Verbose build output
pnpm run build --verbose

# Watch mode for development
pnpm run dev

# Check generated CSS
cat dist/grab.css | grep "your-class"
```

## Contributing

When contributing to grabcss:

1. **Make changes** in `src/styles/`
2. **Test thoroughly** using the playground
3. **Run quality checks** with `pnpm run lint`
4. **Update documentation** if adding new features
5. **Build and verify** final output

See the main [Contributing Guide](../CONTRIBUTING.md) for more details.
