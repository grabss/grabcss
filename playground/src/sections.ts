import { createSectionHeader } from './components'

export function createTypographySection(): string {
  return `
    <section class="m-xl">
      ${createSectionHeader('typography', 'Typography')}
      <div class="d-grid grid-template-cols-2 g-md">
        <div>
          <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Font Sizes</h3>
          <div class="fs-xs">fs-xs: Extra Small Text (12px)</div>
          <div class="fs-sm">fs-sm: Small Text (14px)</div>
          <div class="fs-md">fs-md: Medium Text (16px)</div>
          <div class="fs-lg">fs-lg: Large Text (18px)</div>
          <div class="fs-xl">fs-xl: Extra Large (20px)</div>
          <div class="fs-2xl">fs-2xl: 2X Large (22px)</div>
          <div class="fs-3xl">fs-3xl: 3X Large (24px)</div>
          <div class="fs-4xl">fs-4xl: 4X Large (36px)</div>
          <div class="fs-5xl">fs-5xl: 5X Large (40px)</div>
        </div>
        <div>
          <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Colors & Weights</h3>
          <div class="text-primary fw-normal">Primary Color (Normal)</div>
          <div class="text-secondary fw-bold">Secondary Color (Bold)</div>
          <div class="text-heading">Heading Color</div>
          <div class="text-body">Body Color</div>
          <div class="text-link">Link Color</div>
          <div class="text-muted">Muted Color</div>
          <div class="text-warning">Warning Color</div>
          <div class="text-danger">Danger Color</div>
        </div>
      </div>
    </section>
  `
}

export function createLayoutSection(): string {
  return `
    <section class="m-xl">
      ${createSectionHeader('layout-display', 'Layout & Display')}

      <div>
        <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Flexbox</h3>
        <div class="d-flex justify-content-space-between align-items-center bg-background p-md" style="border: 1px solid var(--color-border);">
          <div class="bg-primary text-background p-sm">Item 1</div>
          <div class="bg-secondary text-background p-sm">Item 2</div>
          <div class="bg-warning p-sm">Item 3</div>
        </div>

        <div class="d-flex flex-direction-column g-sm my-md">
          <div class="bg-link text-background p-sm">Column Item 1</div>
          <div class="bg-muted text-background p-sm">Column Item 2</div>
        </div>
      </div>

      <div class="mt-lg">
        <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">CSS Grid</h3>
        <div class="d-grid grid-template-cols-3 g-sm">
          <div class="bg-primary text-background p-md text-center">Grid 1</div>
          <div class="bg-secondary text-background p-md text-center">Grid 2</div>
          <div class="bg-warning p-md text-center">Grid 3</div>
          <div class="grid-col-span-2 bg-danger text-background p-md text-center">Span 2 columns</div>
          <div class="bg-muted text-background p-md text-center">Grid 6</div>
        </div>
      </div>
    </section>
  `
}

export function createSpacingSection(): string {
  return `
    <section class="m-xl">
      ${createSectionHeader('spacing', 'Spacing')}
      <div class="d-grid grid-template-cols-2 g-lg">
        <div>
          <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Margins</h3>
          <div class="bg-border p-sm">
            <div class="bg-primary text-background p-sm m-2xs">m-2xs (5px)</div>
            <div class="bg-primary text-background p-sm m-xs">m-xs (10px)</div>
            <div class="bg-primary text-background p-sm m-sm">m-sm (15px)</div>
            <div class="bg-primary text-background p-sm m-md">m-md (20px)</div>
          </div>
        </div>
        <div>
          <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Paddings</h3>
          <div class="bg-primary text-background p-2xs my-sm">p-2xs (5px)</div>
          <div class="bg-secondary text-background p-xs my-sm">p-xs (10px)</div>
          <div class="bg-warning p-sm my-sm">p-sm (15px)</div>
          <div class="bg-danger text-background p-md my-sm">p-md (20px)</div>
        </div>
      </div>
    </section>
  `
}

export function createPositioningSizingSection(): string {
  return `
    <section class="m-xl">
      ${createSectionHeader('positioning-sizing', 'Positioning & Sizing')}
      <div class="ps-relative h-100" style="height: 200px; border: 1px solid var(--color-border);">
        <div class="ps-absolute bg-primary text-background p-sm" style="top: 10px; left: 10px;">Absolute Top-Left</div>
        <div class="ps-absolute bg-secondary text-background p-sm" style="bottom: 10px; right: 10px;">Absolute Bottom-Right</div>
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="bg-warning p-md">Centered Content</div>
        </div>
      </div>
    </section>
  `
}

export function createResponsiveSection(): string {
  return `
    <section class="m-xl">
      ${createSectionHeader('responsive-design', 'Responsive Design')}
      <p class="text-muted my-sm">Resize your browser to see responsive behavior</p>
      <div class="d-flex flex-direction-column sm:flex-direction-row g-md">
        <div class="bg-primary text-background p-md flex-1">
          <p>Mobile: Column layout</p>
          <p>Desktop (sm+): Row layout</p>
        </div>
        <div class="bg-secondary text-background p-md flex-1">
          <p class="fs-sm md:fs-lg">Responsive text size</p>
          <p>Small on mobile, large on tablet+</p>
        </div>
      </div>
    </section>
  `
}

export function createTextUtilitiesSection(): string {
  return `
    <section class="m-xl">
      ${createSectionHeader('text-utilities', 'Text Utilities')}
      <div class="d-grid grid-template-cols-3 g-md">
        <div>
          <div class="text-align-left p-sm" style="border: 1px solid var(--color-border);">Left aligned</div>
          <div class="text-align-center p-sm" style="border: 1px solid var(--color-border);">Center aligned</div>
          <div class="text-align-right p-sm" style="border: 1px solid var(--color-border);">Right aligned</div>
        </div>
        <div>
          <div class="ws-nowrap p-sm" style="border: 1px solid var(--color-border); overflow: hidden; text-overflow: ellipsis;" title="This is a very long sentence that demonstrates the nowrap utility class behavior with ellipsis overflow handling">This is a very long sentence that demonstrates the nowrap utility class behavior with ellipsis overflow handling</div>
          <div class="wb-break-all p-sm" style="border: 1px solid var(--color-border);">This is a demonstration of the word-break all utility class that allows text to break at any character position when the content exceeds the container width</div>
        </div>
        <div>
          <div class="lh-xs p-sm" style="border: 1px solid var(--color-border);">Line height extra small (1.2)</div>
          <div class="lh-md p-sm" style="border: 1px solid var(--color-border);">Line height medium (1.6)</div>
        </div>
      </div>
    </section>
  `
}

export function createCSSVariablesSection(): string {
  return `
    <section class="m-xl">
      ${createSectionHeader('css-variables-theming', 'CSS Variables & Theming')}
      <div class="my-md">
        <p class="text-muted m-sm">Use the theme toggle in the header to see CSS custom properties in action</p>
      </div>
      <div class="d-grid grid-template-cols-2 g-md">
        <div class="p-md" style="border: 1px solid var(--color-border); background: var(--color-background);">
          <h3 class="text-heading mt-sm mb-sm">Dynamic Colors</h3>
          <p class="text-body mb-sm">All color utilities use CSS variables that adapt to theme changes.</p>

          <h4 class="fs-md fw-bold text-heading mb-xs">Text Colors</h4>
          <div class="mb-sm">
            <div class="text-primary">Primary text color</div>
            <div class="text-secondary">Secondary text color</div>
            <div class="text-heading">Heading text color</div>
            <div class="text-body">Body text color</div>
            <div class="text-link">Link text color</div>
            <div class="text-muted">Muted text color</div>
            <div class="text-warning">Warning text color</div>
            <div class="text-danger">Danger text color</div>
          </div>

          <h4 class="fs-md fw-bold text-heading mb-xs">Background Colors</h4>
          <div class="d-grid grid-template-cols-2 g-xs">
            <div class="bg-primary text-background p-xs text-center">Primary</div>
            <div class="bg-secondary text-background p-xs text-center">Secondary</div>
            <div class="bg-background text-body p-xs text-center" style="border: 1px solid var(--color-border);">Background</div>
            <div class="bg-link text-background p-xs text-center">Link</div>
            <div class="bg-muted text-background p-xs text-center">Muted</div>
            <div class="bg-warning p-xs text-center">Warning</div>
            <div class="bg-danger text-background p-xs text-center">Danger</div>
            <div class="bg-border p-xs text-center">Border</div>
          </div>
        </div>

        <div class="p-md" style="border: 1px solid var(--color-border);">
          <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">CSS Variable Values</h3>

          <h4 class="fs-md fw-bold text-heading mb-xs">Color Variables</h4>
          <div class="fs-sm mb-md">
            <div class="mb-xs">--color-primary: <span style="color: var(--color-primary); font-weight: bold;">●</span> <code style="background: var(--color-border); padding: 2px 4px; border-radius: 3px;">var(--color-primary)</code></div>
            <div class="mb-xs">--color-secondary: <span style="color: var(--color-secondary); font-weight: bold;">●</span> <code style="background: var(--color-border); padding: 2px 4px; border-radius: 3px;">var(--color-secondary)</code></div>
            <div class="mb-xs">--color-background: <span style="background: var(--color-background); border: 1px solid var(--color-border); display: inline-block; width: 16px; height: 16px; vertical-align: middle;"></span> <code style="background: var(--color-border); padding: 2px 4px; border-radius: 3px;">var(--color-background)</code></div>
            <div class="mb-xs">--color-border: <span style="color: var(--color-border); font-weight: bold;">●</span> <code style="background: var(--color-border); padding: 2px 4px; border-radius: 3px;">var(--color-border)</code></div>
            <div class="mb-xs">--color-heading: <span style="color: var(--color-heading); font-weight: bold;">●</span> <code style="background: var(--color-border); padding: 2px 4px; border-radius: 3px;">var(--color-heading)</code></div>
            <div class="mb-xs">--color-body: <span style="color: var(--color-body); font-weight: bold;">●</span> <code style="background: var(--color-border); padding: 2px 4px; border-radius: 3px;">var(--color-body)</code></div>
            <div class="mb-xs">--color-link: <span style="color: var(--color-link); font-weight: bold;">●</span> <code style="background: var(--color-border); padding: 2px 4px; border-radius: 3px;">var(--color-link)</code></div>
            <div class="mb-xs">--color-muted: <span style="color: var(--color-muted); font-weight: bold;">●</span> <code style="background: var(--color-border); padding: 2px 4px; border-radius: 3px;">var(--color-muted)</code></div>
            <div class="mb-xs">--color-warning: <span style="color: var(--color-warning); font-weight: bold;">●</span> <code style="background: var(--color-border); padding: 2px 4px; border-radius: 3px;">var(--color-warning)</code></div>
            <div class="mb-xs">--color-danger: <span style="color: var(--color-danger); font-weight: bold;">●</span> <code style="background: var(--color-border); padding: 2px 4px; border-radius: 3px;">var(--color-danger)</code></div>
          </div>

          <h4 class="fs-md fw-bold text-heading mb-xs">Usage Examples</h4>
          <div class="fs-xs">
            <div class="mb-xs"><code style="background: var(--color-border); padding: 2px 4px; border-radius: 3px;">color: var(--color-primary)</code></div>
            <div class="mb-xs"><code style="background: var(--color-border); padding: 2px 4px; border-radius: 3px;">background: var(--color-background)</code></div>
            <div class="mb-xs"><code style="background: var(--color-border); padding: 2px 4px; border-radius: 3px;">border: 1px solid var(--color-border)</code></div>
          </div>
        </div>
      </div>
    </section>
  `
}