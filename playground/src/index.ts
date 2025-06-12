import 'grabcss/scss/main.scss'
import 'the-new-css-reset/css/reset.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="p-lg">
    <!-- Header -->
    <header class="m-md">
      <h1 class="fs-4xl fw-bold text-primary text-center">grabcss Playground</h1>
      <p class="fs-lg text-center text-muted m-sm">Utility-first CSS framework demonstration</p>
    </header>

    <!-- Typography Section -->
    <section class="m-xl">
      <h2 class="fs-2xl fw-bold text-heading m-md">Typography</h2>
      <div class="d-grid grid-template-cols-2 g-md">
        <div>
          <h3 class="fs-lg fw-bold m-sm">Font Sizes</h3>
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
          <h3 class="fs-lg fw-bold m-sm">Colors & Weights</h3>
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

    <!-- Layout Section -->
    <section class="m-xl">
      <h2 class="fs-2xl fw-bold text-heading m-md">Layout & Display</h2>

      <!-- Flexbox Demo -->
      <div class="m-lg">
        <h3 class="fs-lg fw-bold m-sm">Flexbox</h3>
        <div class="d-flex justify-content-space-between align-items-center bg-background p-md" style="border: 1px solid var(--color-border);">
          <div class="bg-primary text-background p-sm">Item 1</div>
          <div class="bg-secondary text-background p-sm">Item 2</div>
          <div class="bg-warning p-sm">Item 3</div>
        </div>

        <div class="d-flex flex-direction-column g-sm m-md">
          <div class="bg-link text-background p-sm">Column Item 1</div>
          <div class="bg-muted text-background p-sm">Column Item 2</div>
        </div>
      </div>

      <!-- Grid Demo -->
      <div class="m-lg">
        <h3 class="fs-lg fw-bold m-sm">CSS Grid</h3>
        <div class="d-grid grid-template-cols-3 g-sm">
          <div class="bg-primary text-background p-md text-center">Grid 1</div>
          <div class="bg-secondary text-background p-md text-center">Grid 2</div>
          <div class="bg-warning p-md text-center">Grid 3</div>
          <div class="grid-col-span-2 bg-danger text-background p-md text-center">Span 2 columns</div>
          <div class="bg-muted text-background p-md text-center">Grid 6</div>
        </div>
      </div>
    </section>

    <!-- Spacing Section -->
    <section class="m-xl">
      <h2 class="fs-2xl fw-bold text-heading m-md">Spacing</h2>
      <div class="d-grid grid-template-cols-2 g-lg">
        <div>
          <h3 class="fs-lg fw-bold m-sm">Margins</h3>
          <div class="bg-border p-sm">
            <div class="bg-primary text-background p-sm m-2xs">m-2xs (5px)</div>
            <div class="bg-primary text-background p-sm m-xs">m-xs (10px)</div>
            <div class="bg-primary text-background p-sm m-sm">m-sm (15px)</div>
            <div class="bg-primary text-background p-sm m-md">m-md (20px)</div>
          </div>
        </div>
        <div>
          <h3 class="fs-lg fw-bold m-sm">Paddings</h3>
          <div class="bg-primary text-background p-2xs m-sm">p-2xs (5px)</div>
          <div class="bg-secondary text-background p-xs m-sm">p-xs (10px)</div>
          <div class="bg-warning p-sm m-sm">p-sm (15px)</div>
          <div class="bg-danger text-background p-md m-sm">p-md (20px)</div>
        </div>
      </div>
    </section>

    <!-- Position & Size Section -->
    <section class="m-xl">
      <h2 class="fs-2xl fw-bold text-heading m-md">Positioning & Sizing</h2>
      <div class="ps-relative h-100" style="height: 200px; border: 1px solid var(--color-border);">
        <div class="ps-absolute bg-primary text-background p-sm" style="top: 10px; left: 10px;">Absolute Top-Left</div>
        <div class="ps-absolute bg-secondary text-background p-sm" style="bottom: 10px; right: 10px;">Absolute Bottom-Right</div>
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="bg-warning p-md">Centered Content</div>
        </div>
      </div>
    </section>

    <!-- Responsive Utilities Preview -->
    <section class="m-xl">
      <h2 class="fs-2xl fw-bold text-heading m-md">Responsive Design</h2>
      <p class="text-muted m-sm">Resize your browser to see responsive behavior</p>
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

    <!-- Text Utilities -->
    <section class="m-xl">
      <h2 class="fs-2xl fw-bold text-heading m-md">Text Utilities</h2>
      <div class="d-grid grid-template-cols-3 g-md">
        <div>
          <div class="text-align-left p-sm" style="border: 1px solid var(--color-border);">Left aligned</div>
          <div class="text-align-center p-sm" style="border: 1px solid var(--color-border);">Center aligned</div>
          <div class="text-align-right p-sm" style="border: 1px solid var(--color-border);">Right aligned</div>
        </div>
        <div>
          <div class="ws-nowrap p-sm" style="border: 1px solid var(--color-border); width: 100px;">No wrap text overflow example</div>
          <div class="wb-break-all p-sm" style="border: 1px solid var(--color-border); width: 100px;">BreakAllTextExample</div>
        </div>
        <div>
          <div class="lh-xs p-sm" style="border: 1px solid var(--color-border);">Line height extra small (1.2)</div>
          <div class="lh-md p-sm" style="border: 1px solid var(--color-border);">Line height medium (1.6)</div>
        </div>
      </div>
    </section>

    <!-- CSS Variables & Theme Demo -->
    <section class="m-xl">
      <h2 class="fs-2xl fw-bold text-heading m-md">CSS Variables & Theming</h2>
      <div class="m-md">
        <button id="themeToggle" class="bg-primary text-background p-md">Toggle Dark Theme</button>
        <p class="text-muted m-sm">Click to see CSS custom properties in action</p>
      </div>
      <div class="d-grid grid-template-cols-2 g-md m-md">
        <div class="p-md" style="border: 1px solid var(--color-border); background: var(--color-background);">
          <h3 class="text-heading">Dynamic Colors</h3>
          <p class="text-body">This content uses CSS variables that change with the theme.</p>
          <div class="bg-primary text-background p-sm m-sm">Primary background</div>
          <div class="bg-secondary text-background p-sm m-sm">Secondary background</div>
        </div>
        <div class="p-md" style="border: 1px solid var(--color-border);">
          <h3 class="fs-lg fw-bold">Variable Values</h3>
          <div class="fs-sm">
            <div>--color-primary: <span style="color: var(--color-primary);">●</span></div>
            <div>--color-secondary: <span style="color: var(--color-secondary);">●</span></div>
            <div>--color-background: <span style="background: var(--color-background); border: 1px solid var(--color-border);">&nbsp;&nbsp;&nbsp;</span></div>
            <div>--color-border: <span style="color: var(--color-border);">●</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="text-center text-muted p-xl">
      <p>Built with grabcss - A minimal utility-first CSS framework</p>
    </footer>
  </div>
`

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle') as HTMLButtonElement
let isDark = false

themeToggle?.addEventListener('click', () => {
  isDark = !isDark
  const root = document.documentElement

  if (isDark) {
    // Dark theme
    root.style.setProperty('--color-primary', '#4ade80')
    root.style.setProperty('--color-secondary', '#ffffff')
    root.style.setProperty('--color-background', '#1f2937')
    root.style.setProperty('--color-border', '#374151')
    root.style.setProperty('--color-heading', '#f3f4f6')
    root.style.setProperty('--color-body', '#e5e7eb')
    root.style.setProperty('--color-muted', '#9ca3af')
    themeToggle.textContent = 'Toggle Light Theme'
    document.body.style.backgroundColor = 'var(--color-background)'
  } else {
    // Light theme (reset to defaults)
    root.style.setProperty('--color-primary', '#00a596')
    root.style.setProperty('--color-secondary', '#000000')
    root.style.setProperty('--color-background', '#ffffff')
    root.style.setProperty('--color-border', '#dce1e6')
    root.style.setProperty('--color-heading', '#00a596')
    root.style.setProperty('--color-body', '#000000')
    root.style.setProperty('--color-muted', '#787878')
    themeToggle.textContent = 'Toggle Dark Theme'
    document.body.style.backgroundColor = 'var(--color-background)'
  }
})
