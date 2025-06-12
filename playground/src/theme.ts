import { THEMES, type ThemeKey } from './config'

export class ThemeManager {
  private isDark = false

  constructor() {
    this.initializeThemeToggle()
  }

  private initializeThemeToggle(): void {
    const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement
    if (!themeToggle) return

    themeToggle.addEventListener('change', () => {
      this.isDark = themeToggle.checked
      this.applyTheme(this.isDark ? 'dark' : 'light')
      this.updateToggleAppearance()
    })
  }

  private applyTheme(theme: ThemeKey): void {
    const root = document.documentElement
    const themeColors = THEMES[theme]

    Object.entries(themeColors).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })

    document.body.style.backgroundColor = 'var(--color-background)'
  }

  private updateToggleAppearance(): void {
    const themeToggle = document.getElementById('theme-toggle') as HTMLInputElement
    if (!themeToggle) return

    const slider = themeToggle.nextElementSibling?.querySelector('.theme-toggle__slider') as HTMLElement
    const label = themeToggle.nextElementSibling as HTMLElement

    if (this.isDark) {
      if (slider) slider.style.transform = 'translateX(20px)'
      if (label) label.style.backgroundColor = '#4ade80'
    } else {
      if (slider) slider.style.transform = 'translateX(0px)'
      if (label) label.style.backgroundColor = 'var(--color-border)'
    }
  }
}