import 'grabcss/scss/main.scss'
import 'the-new-css-reset/css/reset.css'

import { createFooter, createHeader, createPageTitle } from './components'
import {
  createBorderSection,
  createCSSVariablesSection,
  createLayoutSection,
  createOpacitySection,
  createPositioningSizingSection,
  createResponsiveSection,
  createSpacingSection,
  createTextUtilitiesSection,
  createTypographySection
} from './sections'
import { PLAYGROUND_STYLES } from './styles'
import { ThemeManager } from './theme'

// Main application initialization
function initializeApp(): void {
  const appElement = document.querySelector<HTMLDivElement>('#app')
  if (!appElement) return

  // Inject styles and HTML structure
  appElement.innerHTML = `
    ${PLAYGROUND_STYLES}
    <div class="h-100 d-flex flex-direction-column" style="overflow: hidden;">
      ${createHeader()}
      <main class="main-content">
        ${createPageTitle()}

        ${createTypographySection()}

        ${createLayoutSection()}

        ${createSpacingSection()}

        ${createOpacitySection()}

        ${createBorderSection()}

        ${createPositioningSizingSection()}

        ${createResponsiveSection()}

        ${createTextUtilitiesSection()}

        ${createCSSVariablesSection()}

        ${createFooter()}
      </main>
    </div>
  `

  // Initialize theme management
  new ThemeManager()
}

// Initialize the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp)
} else {
  initializeApp()
}
