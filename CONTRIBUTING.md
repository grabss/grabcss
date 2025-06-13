# Contributing to grabcss

## Development Setup

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/grabcss.git
cd grabcss
pnpm install

# Start development
pnpm dev        # Start playground
pnpm build      # Build CSS framework
```

## Project Structure

- `packages/grabcss/` - Main package (SCSS source, build config)
- `playground/` - Development environment
- Root - Shared tooling (ESLint, Prettier)

## Making Changes

### SCSS Utilities
Edit files in `packages/grabcss/src/`:
- `variables.scss` - Colors, spacing, breakpoints
- `utilities.scss` - Utility class generation
- `mixins.scss` - Reusable SCSS mixins

### Testing Changes
```bash
pnpm dev        # Test in playground
pnpm build      # Build for production
```

## Code Standards

- Follow existing SCSS patterns
- Use existing design tokens
- Test in playground before submitting
- Run `pnpm lint` before committing

## Submitting Changes

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Issues

Report bugs or request features in [GitHub Issues](https://github.com/grabss/grabcss/issues).
