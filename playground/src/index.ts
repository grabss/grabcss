import 'grabcss/scss/main.scss'
import 'the-new-css-reset/css/reset.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <!-- Fixed Header -->
    <header class="ps-fixed w-100" style="top: 0; left: 0; height: 60px; border-bottom: 1px solid var(--color-border); background: var(--color-background); z-index: 100; padding: 0 20px;">
      <div class="d-flex justify-content-space-between align-items-center h-100">
        <div class="d-flex align-items-center g-sm">
          <h1 class="fs-lg fw-bold text-primary">grabcss</h1>
          <span class="bg-primary text-background fs-xs" style="border-radius: 12px; padding: 2px 6px; font-size: 10px;">v${__GRABCSS_VERSION__}</span>
        </div>
        <div class="d-flex align-items-center g-sm">
          <div style="position: relative; display: inline-block;">
            <input type="checkbox" id="theme-toggle" style="opacity: 0; width: 0; height: 0;">
            <label for="theme-toggle" style="position: relative; display: inline-block; width: 40px; height: 20px; background-color: var(--color-border); border-radius: 20px; cursor: pointer; transition: background-color 0.3s;">
              <span style="position: absolute; content: ''; height: 16px; width: 16px; left: 2px; bottom: 2px; background-color: var(--color-background); border-radius: 50%; transition: transform 0.3s; box-shadow: 0 1px 3px rgba(0,0,0,0.3);"></span>
            </label>
          </div>
          <a href="https://github.com/grabss/grabcss" target="_blank" rel="noopener noreferrer" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-body)">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.npmjs.com/package/grabcss" target="_blank" rel="noopener noreferrer" title="NPM">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--color-body)">
              <path d="M0 7v10h6.67v1.34H12V17h12V7H0zm6.67 8.67H2V8.33h4.67v7.34zM12 15.67H8.67V8.33H12V15.67zm9.33 0H13.33V8.33h8v7.34z"/>
              <rect x="3.33" y="9.67" width="1.34" height="4.67"/>
              <rect x="9.33" y="9.67" width="1.34" height="4.67"/>
              <rect x="14.67" y="9.67" width="1.34" height="4.67"/>
              <rect x="16.33" y="9.67" width="1.34" height="4.67"/>
              <rect x="18" y="9.67" width="1.34" height="4.67"/>
            </svg>
          </a>
        </div>
      </div>
    </header>

    <!-- Content with top margin for fixed header -->
    <div class="p-lg" style="margin-top: 60px;">
      <!-- Page Title -->
      <div class="text-center m-xl">
        <h1 class="fs-4xl fw-bold text-primary">grabcss Playground</h1>
        <p class="fs-lg text-muted m-sm">Utility-first CSS framework demonstration</p>
      </div>

    <!-- Typography Section -->
    <section class="m-xl">
      <h2 id="typography" class="fs-2xl fw-bold text-heading"><a href="#typography" class="text-heading" style="text-decoration: none;"># Typography</a></h2>
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

    <!-- Layout Section -->
    <section class="m-xl">
      <h2 id="layout-display" class="fs-2xl fw-bold text-heading"><a href="#layout-display" class="text-heading" style="text-decoration: none;"># Layout & Display</a></h2>

      <!-- Flexbox Demo -->
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

      <!-- Grid Demo -->
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

    <!-- Spacing Section -->
    <section class="m-xl">
      <h2 id="spacing" class="fs-2xl fw-bold text-heading"><a href="#spacing" class="text-heading" style="text-decoration: none;"># Spacing</a></h2>
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

    <!-- Position & Size Section -->
    <section class="m-xl">
      <h2 id="positioning-sizing" class="fs-2xl fw-bold text-heading"><a href="#positioning-sizing" class="text-heading" style="text-decoration: none;"># Positioning & Sizing</a></h2>
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
      <h2 id="responsive-design" class="fs-2xl fw-bold text-heading"><a href="#responsive-design" class="text-heading" style="text-decoration: none;"># Responsive Design</a></h2>
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

    <!-- Text Utilities -->
    <section class="m-xl">
      <h2 id="text-utilities" class="fs-2xl fw-bold text-heading"><a href="#text-utilities" class="text-heading" style="text-decoration: none;"># Text Utilities</a></h2>
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

    <!-- CSS Variables & Theme Demo -->
    <section class="m-xl">
      <h2 id="css-variables-theming" class="fs-2xl fw-bold text-heading"><a href="#css-variables-theming" class="text-heading" style="text-decoration: none;"># CSS Variables & Theming</a></h2>
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

    <!-- Footer -->
    <footer class="text-align-right text-muted p-xl">
      <p>Built with <strong>grabcss v${__GRABCSS_VERSION__}</strong></p>
      <p class="fs-sm">A minimal, utility-first CSS framework for rapid UI development</p>
    </footer>
  </div>
`

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement
let isDark = false

themeToggle?.addEventListener('change', () => {
  isDark = themeToggle.checked
  const root = document.documentElement
  const slider = themeToggle.nextElementSibling?.querySelector(
    'span'
  ) as HTMLElement
  const label = themeToggle.nextElementSibling as HTMLElement

  if (isDark) {
    // Dark theme
    root.style.setProperty('--color-primary', '#4ade80')
    root.style.setProperty('--color-secondary', '#ffffff')
    root.style.setProperty('--color-background', '#1f2937')
    root.style.setProperty('--color-border', '#374151')
    root.style.setProperty('--color-heading', '#f3f4f6')
    root.style.setProperty('--color-body', '#e5e7eb')
    root.style.setProperty('--color-muted', '#9ca3af')
    document.body.style.backgroundColor = 'var(--color-background)'
    // Update toggle appearance
    if (slider) slider.style.transform = 'translateX(20px)'
    if (label) label.style.backgroundColor = '#4ade80'
  } else {
    // Light theme (reset to defaults)
    root.style.setProperty('--color-primary', '#00a596')
    root.style.setProperty('--color-secondary', '#000000')
    root.style.setProperty('--color-background', '#ffffff')
    root.style.setProperty('--color-border', '#dce1e6')
    root.style.setProperty('--color-heading', '#00a596')
    root.style.setProperty('--color-body', '#000000')
    root.style.setProperty('--color-muted', '#787878')
    document.body.style.backgroundColor = 'var(--color-background)'
    // Update toggle appearance
    if (slider) slider.style.transform = 'translateX(0px)'
    if (label) label.style.backgroundColor = 'var(--color-border)'
  }
})
