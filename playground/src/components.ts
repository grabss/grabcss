import { THEMES } from './config'
import { ICONS } from './icons'

declare const __GRABCSS_VERSION__: string

// Component builders for better code organization
export function createThemeToggle(): string {
  const defaultTheme = THEMES.light
  const colorPreview = (primary: string, secondary: string) => `
    <span class="color-preview">
      <span class="color-dot" style="background-color: ${primary}"></span>
      <span class="color-dot" style="background-color: ${secondary}"></span>
    </span>
  `

  const options = Object.entries(THEMES)
    .map(
      ([key, theme]) => `
      <div class="theme-option" data-theme="${key}">
        ${colorPreview(theme['--color-primary'], theme['--color-secondary'])}
        <span class="theme-name">${theme.name}</span>
      </div>
    `
    )
    .join('')

  return `
    <div class="theme-selector">
      <div class="theme-selector-trigger" tabindex="0" role="button" aria-haspopup="listbox" aria-expanded="false">
        ${colorPreview(defaultTheme['--color-primary'], defaultTheme['--color-secondary'])}
        <span class="theme-name">${defaultTheme.name}</span>
        <svg class="theme-selector-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 5L6 8L9 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="theme-selector-dropdown" role="listbox">
        ${options}
      </div>
    </div>
  `
}

export function createHeaderLinks(): string {
  return `
    <a href="https://github.com/grabss/grabcss" target="_blank" rel="noopener noreferrer" title="GitHub">
      ${ICONS.github}
    </a>
    <a href="https://www.npmjs.com/package/grabcss" target="_blank" rel="noopener noreferrer" title="NPM">
      ${ICONS.npm}
    </a>
  `
}

export function createHeader(): string {
  return `
    <header class="header">
      <div class="d-flex justify-space-between items-center h-100">
        <div class="d-flex items-center g-xs sm:g-sm">
          <h1 class="fs-md sm:fs-lg fw-bold text-primary">grabcss</h1>
          <span class="version-badge fs-2xs sm:fs-xs">v${__GRABCSS_VERSION__}</span>
        </div>
        <div class="d-flex items-center g-xs sm:g-sm">
          ${createThemeToggle()}
          <div class="d-flex items-center g-xs sm:g-sm">
            ${createHeaderLinks()}
          </div>
        </div>
      </div>
    </header>
  `
}

export function createSectionHeader(id: string, title: string): string {
  return `
    <h2 id="${id}" class="fs-2xl fw-bold text-heading pt-sm">
      <a href="#${id}" class="text-heading section-link"># ${title}</a>
    </h2>
  `
}

export function createPageTitle(): string {
  return `
    <div class="m-lg lg:m-xl">
      <h1 class="fs-2xl sm:fs-3xl lg:fs-4xl fw-bold text-primary">grabcss Playground</h1>
      <p class="fs-md sm:fs-lg text-muted m-sm">Utility-first CSS framework demonstration</p>
    </div>
  `
}

export function createFooter(): string {
  return `
    <footer class="p-lg lg:p-xl text-muted">
      <div class="d-flex flex-column md:flex-row md:justify-space-between md:items-end g-sm">
        <div>
          <p>Built with <strong>grabcss v${__GRABCSS_VERSION__}</strong></p>
          <p class="fs-sm mt-xs">A minimal, utility-first CSS framework for rapid UI development</p>
        </div>
        <div class="md:text-right">
          <p class="fs-xs">Copyright © ${new Date().getFullYear()} grabss Inc.</p>
        </div>
      </div>
    </footer>
  `
}
