import { createSectionHeader } from './components'

export function createTypographySection(): string {
  return `
    <section class="m-2xs lg:m-xl">
      ${createSectionHeader('typography', 'Typography')}
      <div class="d-grid grid-cols-1 lg:grid-cols-2 g-md">
        <div>
          <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Font Sizes</h3>
          <div class="lh-sm">
            <div class="fs-xs">.fs-xs: Extra Small Text (0.75rem)</div>
            <div class="fs-sm">.fs-sm: Small Text (0.875rem)</div>
            <div class="fs-md">.fs-md: Medium Text (1rem)</div>
            <div class="fs-lg">.fs-lg: Large Text (1.125rem)</div>
            <div class="fs-xl">.fs-xl: Extra Large (1.25rem)</div>
            <div class="fs-2xl">.fs-2xl: 2X Large (1.375rem)</div>
            <div class="fs-3xl">.fs-3xl: 3X Large (1.5rem)</div>
            <div class="fs-4xl">.fs-4xl: 4X Large (2.25rem)</div>
            <div class="fs-5xl">.fs-5xl: 5X Large (2.5rem)</div>
          </div>
        </div>
        <div>
          <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Text Colors</h3>
          <div class="lh-sm">
            <div class="text-primary">.text-primary: Primary Color</div>
            <div class="text-secondary">.text-secondary: Secondary Color</div>
            <div class="text-heading">.text-heading: Heading Color</div>
            <div class="text-body">.text-body: Body Color</div>
            <div class="text-link">.text-link: Link Color</div>
            <div class="text-muted">.text-muted: Muted Color</div>
            <div class="text-warning">.text-warning: Warning Color</div>
            <div class="text-danger">.text-danger: Danger Color</div>
          </div>
        </div>
      </div>

      <div class="d-grid grid-cols-1 lg:grid-cols-2 g-md mt-md">
        <div>
          <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Font Weights</h3>
          <div class="lh-sm">
            <div class="fw-normal">.fw-normal: Normal Weight</div>
            <div class="fw-bold">.fw-bold: Bold Weight</div>
          </div>
        </div>
        <div>
          <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Line Heights</h3>
          <div class="lh-sm">
            <div class="lh-none">.lh-none: None (1)</div>
            <div class="lh-xs">.lh-xs: Extra Small (1.2)</div>
            <div class="lh-sm">.lh-sm: Small (1.4)</div>
            <div class="lh-md">.lh-md: Medium (1.6)</div>
            <div class="lh-lg">.lh-lg: Large (1.8)</div>
            <div class="lh-xl">.lh-xl: Extra Large (2)</div>
            <div class="lh-2xl">.lh-2xl: 2X Large (2.2)</div>
          </div>
        </div>
      </div>
    </section>
  `
}

export function createLayoutSection(): string {
  return `
    <section class="m-2xs lg:m-xl">
      ${createSectionHeader('layout-display', 'Layout & Display')}

      <div>
        <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Flexbox</h3>

        <div class="bg-background p-md mb-md" style="border: 1px solid var(--color-border);">
          <h4 class="fs-md fw-bold mb-sm">Flex Direction & Justify</h4>
          <div class="d-flex justify-space-between items-center g-sm mb-sm">
            <div class="flex-1 bg-primary text-background p-sm text-center">Item 1</div>
            <div class="flex-1 bg-primary text-background p-sm text-center">Item 2</div>
            <div class="flex-1 bg-primary text-background p-sm text-center">Item 3</div>
          </div>
          <p class="text-muted fs-sm mt-2xs mb-0">.d-flex .justify-space-between .items-center .flex-1</p>
        </div>

        <div class="bg-background p-md mb-md" style="border: 1px solid var(--color-border);">
          <h4 class="fs-md fw-bold mb-sm">Justify Variations</h4>
          <div class="mb-sm">
            <div class="d-flex justify-center items-center g-sm">
              <div class="bg-secondary text-background p-sm">Item 1</div>
              <div class="bg-secondary text-background p-sm">Item 2</div>
              <div class="bg-secondary text-background p-sm">Item 3</div>
            </div>
            <p class="text-muted fs-sm mt-2xs mb-0 text-center">.d-flex .justify-center .items-center</p>
          </div>
          <div class="mb-sm">
            <div class="d-flex justify-start items-center g-sm">
              <div class="bg-secondary text-background p-sm">Item 1</div>
              <div class="bg-secondary text-background p-sm">Item 2</div>
              <div class="bg-secondary text-background p-sm">Item 3</div>
            </div>
            <p class="text-muted fs-sm mt-2xs mb-0 text-left">.d-flex .justify-start .items-center</p>
          </div>
          <div>
            <div class="d-flex justify-end items-center g-sm">
              <div class="bg-secondary text-background p-sm">Item 1</div>
              <div class="bg-secondary text-background p-sm">Item 2</div>
            </div>
            <p class="text-muted fs-sm mt-2xs mb-0 text-right">.d-flex .justify-end .items-center</p>
          </div>
        </div>

        <div class="bg-background p-md mb-md" style="border: 1px solid var(--color-border);">
          <h4 class="fs-md fw-bold mb-sm">Flex Direction</h4>
          <div class="mb-sm">
            <div class="d-flex flex-column g-sm">
              <div class="bg-primary text-background p-sm">Item 1</div>
              <div class="bg-primary text-background p-sm">Item 2</div>
              <div class="bg-primary text-background p-sm">Item 3</div>
            </div>
            <p class="text-muted fs-sm mt-2xs mb-0">.d-flex .flex-column .g-sm</p>
          </div>
          <div>
            <div class="d-flex flex-row-reverse g-sm">
              <div class="bg-secondary text-background p-sm">Item 1</div>
              <div class="bg-secondary text-background p-sm">Item 2</div>
              <div class="bg-secondary text-background p-sm">Item 3</div>
            </div>
            <p class="text-muted fs-sm mt-2xs mb-0 text-right">.d-flex .flex-row-reverse .g-sm</p>
          </div>
        </div>

        <div class="bg-background p-md" style="border: 1px solid var(--color-border);">
          <h4 class="fs-md fw-bold mb-sm">Flex Wrap</h4>
          <div class="d-flex flex-wrap g-sm" style="width: 200px;">
            <div class="bg-primary text-background p-sm">Item 1</div>
            <div class="bg-primary text-background p-sm">Item 2</div>
            <div class="bg-primary text-background p-sm">Item 3</div>
            <div class="bg-primary text-background p-sm">Item 4</div>
          </div>
          <p class="text-muted fs-sm mt-2xs mb-0">.d-flex .flex-wrap .g-sm (in 200px container)</p>
        </div>
      </div>

      <div class="mt-lg">
        <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">CSS Grid</h3>

        <div class="bg-background p-md mb-md" style="border: 1px solid var(--color-border);">
          <h4 class="fs-md fw-bold mb-sm">Grid Columns</h4>
          <div class="d-grid grid-cols-2 g-sm">
            <div class="bg-primary text-background p-sm text-center">Item 1</div>
            <div class="bg-primary text-background p-sm text-center">Item 2</div>
          </div>
          <p class="text-muted fs-sm mt-2xs mb-md">.d-grid .grid-cols-2 .g-sm</p>
          <div class="d-grid grid-cols-4 g-sm">
            <div class="bg-secondary text-background p-sm text-center">1</div>
            <div class="bg-secondary text-background p-sm text-center">2</div>
            <div class="bg-secondary text-background p-sm text-center">3</div>
            <div class="bg-secondary text-background p-sm text-center">4</div>
          </div>
          <p class="text-muted fs-sm mt-2xs mb-md">.d-grid .grid-cols-4 .g-sm</p>
          <div class="d-grid grid-cols-6 g-sm">
            <div class="bg-primary text-background p-xs text-center">1</div>
            <div class="bg-primary text-background p-xs text-center">2</div>
            <div class="bg-primary text-background p-xs text-center">3</div>
            <div class="bg-primary text-background p-xs text-center">4</div>
            <div class="bg-primary text-background p-xs text-center">5</div>
            <div class="bg-primary text-background p-xs text-center">6</div>
          </div>
          <p class="text-muted fs-sm mt-2xs mb-0">.d-grid .grid-cols-6 .g-sm</p>
        </div>

        <div class="bg-background p-md mb-md" style="border: 1px solid var(--color-border);">
          <h4 class="fs-md fw-bold mb-sm">Column Spans</h4>
          <div class="d-grid grid-cols-5 g-sm">
            <div class="col-span-2 bg-secondary text-background p-sm text-center">.col-span-2</div>
            <div class="col-span-3 bg-primary text-background p-sm text-center">.col-span-3</div>
            <div class="bg-secondary text-background p-sm text-center">Regular</div>
            <div class="col-span-4 bg-primary text-background p-sm text-center">.col-span-4</div>
            <div class="col-span-5 bg-secondary text-background p-sm text-center">.col-span-5 (full width)</div>
          </div>
          <p class="text-muted fs-sm mt-2xs mb-0">.d-grid .grid-cols-5 with various column spans</p>
        </div>

        <div class="bg-background p-md" style="border: 1px solid var(--color-border);">
          <h4 class="fs-md fw-bold mb-sm">Grid Rows</h4>
          <div class="d-grid grid-cols-3 grid-rows-3 g-sm" style="height: 200px;">
            <div class="bg-primary text-background p-sm text-center d-flex items-center justify-center">1</div>
            <div class="row-span-2 bg-secondary text-background p-sm text-center d-flex items-center justify-center">.row-span-2</div>
            <div class="bg-primary text-background p-sm text-center d-flex items-center justify-center">3</div>
            <div class="bg-primary text-background p-sm text-center d-flex items-center justify-center">4</div>
            <div class="bg-primary text-background p-sm text-center d-flex items-center justify-center">5</div>
            <div class="row-span-2 bg-secondary text-background p-sm text-center d-flex items-center justify-center">.row-span-2</div>
          </div>
          <p class="text-muted fs-sm mt-2xs mb-0">.d-grid .grid-cols-3 .grid-rows-3 with row spans</p>
        </div>
      </div>
    </section>
  `
}

export function createSpacingSection(): string {
  return `
    <section class="m-2xs lg:m-xl">
      ${createSectionHeader('spacing', 'Spacing')}
      <div class="d-grid grid-cols-1 md:grid-cols-2 g-lg">
        <div>
          <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Margins</h3>
          <div class="bg-border p-sm">
            <div class="bg-secondary text-background p-sm m-2xs">.m-2xs (5px)</div>
            <div class="bg-secondary text-background p-sm m-xs">.m-xs (10px)</div>
            <div class="bg-secondary text-background p-sm m-sm">.m-sm (15px)</div>
            <div class="bg-secondary text-background p-sm m-md">.m-md (20px)</div>
          </div>
        </div>
        <div>
          <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Paddings</h3>
          <div class="bg-primary text-background p-2xs my-sm">.p-2xs (5px)</div>
          <div class="bg-primary text-background p-xs my-sm">.p-xs (10px)</div>
          <div class="bg-primary text-background p-sm my-sm">.p-sm (15px)</div>
          <div class="bg-primary text-background p-md my-sm">.p-md (20px)</div>
        </div>
      </div>
    </section>
  `
}

export function createOpacitySection(): string {
  return `
    <section class="m-2xs lg:m-xl">
      ${createSectionHeader('opacity', 'Opacity')}
      <div>
        <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Opacity Classes</h3>
        <div class="d-flex flex-wrap sm:flex-nowrap g-sm sm:g-md items-end">
          <div class="bg-primary text-background p-sm sm:p-md text-center op-100" style="min-width: 80px; flex: 1;">
            .op-100<br/><span class="fs-xs">100%</span>
          </div>
          <div class="bg-primary text-background p-sm sm:p-md text-center op-75" style="min-width: 80px; flex: 1;">
            .op-75<br/><span class="fs-xs">75%</span>
          </div>
          <div class="bg-primary text-background p-sm sm:p-md text-center op-50" style="min-width: 80px; flex: 1;">
            .op-50<br/><span class="fs-xs">50%</span>
          </div>
          <div class="bg-primary text-background p-sm sm:p-md text-center op-25" style="min-width: 80px; flex: 1;">
            .op-25<br/><span class="fs-xs">25%</span>
          </div>
          <div class="bg-primary text-background p-sm sm:p-md text-center op-0" style="min-width: 80px; flex: 1;">
            .op-0<br/><span class="fs-xs">0%</span>
          </div>
        </div>
      </div>
    </section>
  `
}

export function createPositioningSizingSection(): string {
  return `
    <section class="m-2xs lg:m-xl">
      ${createSectionHeader('positioning-sizing', 'Positioning & Sizing')}
      <div class="ps-relative h-100 mt-sm" style="height: 200px; border: 1px solid var(--color-border);">
        <div class="ps-absolute bg-primary text-background p-sm" style="top: 10px; left: 10px;">.ps-absolute: Absolute Top-Left</div>
        <div class="ps-absolute bg-secondary text-background p-sm" style="bottom: 10px; right: 10px;">.ps-absolute: Absolute Bottom-Right</div>
        <div class="d-flex justify-center items-center h-100">
          <div class="bg-background border p-md">Centered Content</div>
        </div>
      </div>
    </section>
  `
}

export function createResponsiveSection(): string {
  return `
    <section class="m-2xs lg:m-xl">
      ${createSectionHeader('responsive-design', 'Responsive Design')}
      <p class="text-muted m-sm">Resize your browser to see responsive behavior</p>
      <div class="d-flex flex-column sm:flex-row g-md">
        <div class="bg-primary text-background p-md flex-1">
          <p>.d-flex .flex-column .sm:flex-row</p>
          <p>Mobile: Column layout<br/>Desktop (sm+): Row layout</p>
        </div>
        <div class="bg-secondary text-background p-md flex-1">
          <p class="fs-sm md:fs-lg">.fs-sm .md:fs-lg: Responsive text size</p>
          <p>Small on mobile, large on tablet+</p>
        </div>
      </div>
    </section>
  `
}

export function createTextUtilitiesSection(): string {
  return `
    <section class="m-2xs lg:m-xl">
      ${createSectionHeader('text-utilities', 'Text Utilities')}
      <div class="mt-sm d-grid grid-cols-1 lg:grid-cols-2 g-md">
        <div class="d-flex flex-column g-sm">
          <div class="text-left p-sm" style="border: 1px solid var(--color-border);">.text-left: Left aligned</div>
          <div class="text-center p-sm" style="border: 1px solid var(--color-border);">.text-center: Center aligned</div>
          <div class="text-right p-sm" style="border: 1px solid var(--color-border);">.text-right: Right aligned</div>
        </div>
        <div class="d-flex flex-column g-sm">
          <div class="ws-nowrap p-sm" style="border: 1px solid var(--color-border); overflow: hidden; text-overflow: ellipsis;" title="This is a very long sentence that demonstrates the nowrap utility class behavior with ellipsis overflow handling">.ws-nowrap: This is a very long sentence that demonstrates the nowrap utility class behavior with ellipsis overflow handling</div>
          <div class="wb-break-all p-sm" style="border: 1px solid var(--color-border);">.wb-break-all: This is a demonstration of the word-break all utility class that allows text to break at any character position when the content exceeds the container width</div>
        </div>
      </div>
    </section>
  `
}

export function createBorderSection(): string {
  return `
    <section class="m-2xs lg:m-xl">
      ${createSectionHeader('border-utilities', 'Border Utilities')}
      <div class="d-grid grid-cols-1 lg:grid-cols-2 g-lg">
        <div>
          <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Border Widths</h3>
          <div class="d-flex flex-column g-md">
            <div class="border bg-background p-md">
              <code class="bg-border p-xs rounded-sm">.border</code>
              <span class="text-muted ml-sm">Default border (1px)</span>
            </div>
            <div class="border-lg bg-background p-md">
              <code class="bg-border p-xs rounded-sm">.border-lg</code>
              <span class="text-muted ml-sm">Large border (2px)</span>
            </div>
            <div class="border-xl bg-background p-md">
              <code class="bg-border p-xs rounded-sm">.border-xl</code>
              <span class="text-muted ml-sm">Extra Large border (4px)</span>
            </div>
            <div class="border-2xl bg-background p-md">
              <code class="bg-border p-xs rounded-sm">.border-2xl</code>
              <span class="text-muted ml-sm">2X Large border (8px)</span>
            </div>
          </div>
        </div>

        <div>
          <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Border Radius</h3>
          <div class="d-flex flex-column g-md">
            <div class="border bg-primary text-background p-md rounded-sm">
              <code class="bg-background text-body p-xs rounded-sm">.rounded-sm</code>
              <span class="ml-sm">Small radius (4px)</span>
            </div>
            <div class="border bg-primary text-background p-md rounded-md">
              <code class="bg-background text-body p-xs rounded-md">.rounded-md</code>
              <span class="ml-sm">Medium radius (6px)</span>
            </div>
            <div class="border bg-primary text-background p-md rounded-lg">
              <code class="bg-background text-body p-xs rounded-lg">.rounded-lg</code>
              <span class="ml-sm">Large radius (8px)</span>
            </div>
            <div class="border bg-primary text-background p-md rounded-xl">
              <code class="bg-background text-body p-xs rounded-xl">.rounded-xl</code>
              <span class="ml-sm">Extra large (12px)</span>
            </div>
            <div class="border bg-primary text-background p-md rounded-2xl">
              <code class="bg-background text-body p-xs rounded-2xl">.rounded-2xl</code>
              <span class="ml-sm">2X large (16px)</span>
            </div>
            <div class="border bg-primary text-background p-md rounded-3xl">
              <code class="bg-background text-body p-xs rounded-3xl">.rounded-3xl</code>
              <span class="ml-sm">3X large (24px)</span>
            </div>
            <div class="border bg-primary text-background p-md rounded-full">
              <code class="bg-background text-body p-xs rounded-full">.rounded-full</code>
              <span class="ml-sm">Full radius (9999px)</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-lg">
        <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">Combined Examples</h3>
        <div class="d-flex flex-wrap g-md">
          <div class="border rounded-sm bg-background p-md">
            Card with border + rounded corners
          </div>
          <div class="border-lg rounded-lg bg-warning p-md">
            Warning box with thick border
          </div>
          <div class="border rounded-full bg-primary text-background p-md">
            Pill button
          </div>
        </div>
      </div>
    </section>
  `
}

export function createCSSVariablesSection(): string {
  return `
    <section class="m-2xs lg:m-xl">
      ${createSectionHeader('css-variables-theming', 'CSS Variables & Theming')}
      <div class="my-md">
        <p class="text-muted m-sm">Use the theme toggle in the header to see CSS custom properties in action</p>
      </div>
      <div class="d-grid grid-cols-1 lg:grid-cols-2 g-md">
        <div class="p-md rounded-md" style="border: 1px solid var(--color-border); background: var(--color-background);">
          <h3 class="text-heading mt-sm mb-sm">Dynamic Colors</h3>
          <p class="text-body mb-sm">All color utilities use CSS variables that adapt to theme changes.</p>

          <h4 class="fs-md fw-bold text-heading mb-xs">Text Colors</h4>
          <div class="mb-sm lh-sm">
            <div class="text-primary">.text-primary: Primary text color</div>
            <div class="text-secondary">.text-secondary: Secondary text color</div>
            <div class="text-heading">.text-heading: Heading text color</div>
            <div class="text-body">.text-body: Body text color</div>
            <div class="text-link">.text-link: Link text color</div>
            <div class="text-muted">.text-muted: Muted text color</div>
            <div class="text-warning">.text-warning: Warning text color</div>
            <div class="text-danger">.text-danger: Danger text color</div>
          </div>

          <h4 class="fs-md fw-bold text-heading mb-xs">Background Colors</h4>
          <div class="d-grid grid-cols-2 g-xs">
            <div class="bg-primary text-background p-xs text-center rounded-sm">.bg-primary</div>
            <div class="bg-secondary text-background p-xs text-center rounded-sm">.bg-secondary</div>
            <div class="bg-background text-body p-xs text-center rounded-sm border">.bg-background</div>
            <div class="bg-link text-background p-xs text-center rounded-sm">.bg-link</div>
            <div class="bg-muted text-background p-xs text-center rounded-sm">.bg-muted</div>
            <div class="bg-warning p-xs text-center rounded-sm">.bg-warning</div>
            <div class="bg-danger text-background p-xs text-center rounded-sm">.bg-danger</div>
            <div class="bg-border p-xs text-center rounded-sm">.bg-border</div>
          </div>
        </div>

        <div class="p-md rounded-md" style="border: 1px solid var(--color-border);">
          <h3 class="fs-lg fw-bold text-heading mt-sm mb-sm">CSS Variable Values</h3>

          <h4 class="fs-md fw-bold text-heading mb-xs">Color Variables</h4>
          <div class="fs-sm mb-md">
            <div class="d-flex sm:items-center flex-column sm:flex-row mb-xs"><div>--color-primary: <span style="color: var(--color-primary); font-weight: bold;">●</span></div> <code class="bg-border p-2xs rounded-sm sm:ml-xs">var(--color-primary)</code></div>
            <div class="d-flex sm:items-center flex-column sm:flex-row mb-xs"><div>--color-secondary: <span style="color: var(--color-secondary); font-weight: bold;">●</span></div> <code class="bg-border p-2xs rounded-sm sm:ml-xs">var(--color-secondary)</code></div>
            <div class="d-flex sm:items-center flex-column sm:flex-row mb-xs"><div>--color-background: <span style="background: var(--color-background); border: 1px solid var(--color-border); display: inline-block; width: 16px; height: 16px; vertical-align: middle;" class="rounded-sm"></span></div> <code class="bg-border p-2xs rounded-sm sm:ml-xs">var(--color-background)</code></div>
            <div class="d-flex sm:items-center flex-column sm:flex-row mb-xs"><div>--color-border: <span style="color: var(--color-border); font-weight: bold;">●</span></div> <code class="bg-border p-2xs rounded-sm sm:ml-xs">var(--color-border)</code></div>
            <div class="d-flex sm:items-center flex-column sm:flex-row mb-xs"><div>--color-heading: <span style="color: var(--color-heading); font-weight: bold;">●</span></div> <code class="bg-border p-2xs rounded-sm sm:ml-xs">var(--color-heading)</code></div>
            <div class="d-flex sm:items-center flex-column sm:flex-row mb-xs"><div>--color-body: <span style="color: var(--color-body); font-weight: bold;">●</span></div> <code class="bg-border p-2xs rounded-sm sm:ml-xs">var(--color-body)</code></div>
            <div class="d-flex sm:items-center flex-column sm:flex-row mb-xs"><div>--color-link: <span style="color: var(--color-link); font-weight: bold;">●</span></div> <code class="bg-border p-2xs rounded-sm sm:ml-xs">var(--color-link)</code></div>
            <div class="d-flex sm:items-center flex-column sm:flex-row mb-xs"><div>--color-muted: <span style="color: var(--color-muted); font-weight: bold;">●</span></div> <code class="bg-border p-2xs rounded-sm sm:ml-xs">var(--color-muted)</code></div>
            <div class="d-flex sm:items-center flex-column sm:flex-row mb-xs"><div>--color-warning: <span style="color: var(--color-warning); font-weight: bold;">●</span></div> <code class="bg-border p-2xs rounded-sm sm:ml-xs">var(--color-warning)</code></div>
            <div class="d-flex sm:items-center flex-column sm:flex-row mb-xs"><div>--color-danger: <span style="color: var(--color-danger); font-weight: bold;">●</span></div> <code class="bg-border p-2xs rounded-sm sm:ml-xs">var(--color-danger)</code></div>
          </div>

          <h4 class="fs-md fw-bold text-heading mb-xs">Usage Examples</h4>
          <div class="fs-xs">
            <div class="d-flex items-center mb-xs"><code class="bg-border p-2xs rounded-sm">color: var(--color-primary)</code></div>
            <div class="d-flex items-center mb-xs"><code class="bg-border p-2xs rounded-sm">background: var(--color-background)</code></div>
            <div class="d-flex items-center mb-xs"><code class="bg-border p-2xs rounded-sm">border: 1px solid var(--color-border)</code></div>
          </div>
        </div>
      </div>
    </section>
  `
}
