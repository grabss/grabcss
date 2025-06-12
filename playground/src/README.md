# Playground Code Architecture

This document outlines the refactored structure of the grabcss playground application.

## File Structure

```
playground/src/
├── index.ts          # Main entry point and application initialization
├── components.ts     # Reusable HTML component builders
├── sections.ts       # Individual section content generators
├── theme.ts          # Theme management and CSS variable handling
├── config.ts         # Configuration constants and type definitions
├── icons.ts          # SVG icon definitions
├── styles.ts         # CSS styles for component styling
└── README.md         # This documentation file
```

## Architecture Benefits

### 1. **Separation of Concerns**
- **Components**: Reusable UI building blocks
- **Sections**: Content-specific section generators
- **Theme**: Theme switching logic and CSS variable management
- **Config**: Centralized configuration and constants
- **Icons**: SVG icon library
- **Styles**: Component-specific CSS styles

### 2. **Type Safety**
- Full TypeScript support with proper type definitions
- Theme configuration with `as const` for literal types
- Type-safe icon and theme key references

### 3. **Maintainability**
- Small, focused modules that are easy to understand and modify
- Clear naming conventions and function signatures
- Consistent code organization

### 4. **Reusability**
- Component builders can be reused and composed
- Theme system is configurable and extensible
- Icon library is easily expandable

### 5. **Performance**
- Modular imports reduce bundle size
- Clean separation allows for better tree-shaking
- Efficient theme switching without DOM re-rendering

## Key Improvements

### Before Refactoring
- Single 300+ line file with embedded HTML
- Inline styles mixed with utility classes
- Hardcoded theme values in JavaScript
- Repetitive HTML structures
- Poor separation of concerns

### After Refactoring
- Modular architecture with 7 focused files
- CSS classes instead of inline styles where appropriate
- Configurable theme system with type safety
- Reusable component builders
- Clear separation of content, styling, and logic

## Usage Examples

### Adding a New Section
```typescript
// In sections.ts
export function createNewSection(): string {
  return `
    <section class="m-xl">
      ${createSectionHeader('new-section', 'New Section')}
      <p>Your content here</p>
    </section>
  `
}

// In index.ts
import { createNewSection } from './sections'
// Add ${createNewSection()} to the main content
```

### Adding a New Theme
```typescript
// In config.ts
export const THEMES = {
  light: { /* existing theme */ },
  dark: { /* existing theme */ },
  blue: {
    '--color-primary': '#3b82f6',
    '--color-secondary': '#1e40af',
    // ... other variables
  }
} as const
```

### Adding a New Icon
```typescript
// In icons.ts
export const ICONS = {
  github: '/* existing icon */',
  npm: '/* existing icon */',
  discord: `<svg>/* new icon SVG */</svg>`
}
```

## Best Practices

1. **Keep components small and focused**
2. **Use TypeScript types for better development experience**
3. **Maintain consistent naming conventions**
4. **Add new functionality through the existing module structure**
5. **Test changes with the development server**

This refactored architecture provides a solid foundation for future enhancements while maintaining code quality and developer experience.