import { THEMES, type ThemeKey } from './config'

export class ThemeManager {
  private currentTheme: ThemeKey = 'light'
  private trigger = document.querySelector(
    '.theme-selector-trigger'
  ) as HTMLElement
  private dropdown = document.querySelector(
    '.theme-selector-dropdown'
  ) as HTMLElement
  private options = document.querySelectorAll(
    '.theme-option'
  ) as NodeListOf<HTMLElement>

  constructor() {
    if (!this.trigger || !this.dropdown || !this.options.length) {
      console.warn('Theme selector elements not found')
      return
    }

    this.initializeEventListeners()
    this.applyTheme(this.currentTheme)
  }

  private initializeEventListeners(): void {
    // Toggle dropdown on trigger click
    this.trigger.addEventListener('click', () => this.toggleDropdown())

    // Handle theme selection
    this.options.forEach((option) => {
      option.addEventListener('click', () => {
        const theme = option.getAttribute('data-theme') as ThemeKey
        if (theme) this.selectTheme(theme)
      })
    })

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (
        !this.trigger.contains(e.target as Node) &&
        !this.dropdown.contains(e.target as Node)
      ) {
        this.closeDropdown()
      }
    })

    // Basic keyboard support
    this.trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        this.toggleDropdown()
      } else if (e.key === 'Escape') {
        this.closeDropdown()
      }
    })

    this.updateSelectedOption()
  }

  private toggleDropdown(): void {
    const isOpen = this.dropdown.classList.contains('show')
    if (isOpen) {
      this.closeDropdown()
    } else {
      this.openDropdown()
    }
  }

  private openDropdown(): void {
    this.dropdown.classList.add('show')
    this.trigger.setAttribute('aria-expanded', 'true')
  }

  private closeDropdown(): void {
    this.dropdown.classList.remove('show')
    this.trigger.setAttribute('aria-expanded', 'false')
  }

  private selectTheme(theme: ThemeKey): void {
    this.currentTheme = theme
    this.applyTheme(theme)
    this.updateTriggerDisplay()
    this.updateSelectedOption()
    this.closeDropdown()
  }

  private updateTriggerDisplay(): void {
    const theme = THEMES[this.currentTheme]
    const colorDots = this.trigger.querySelectorAll('.color-dot')
    const themeName = this.trigger.querySelector('.theme-name')

    // Update color dots
    const [primaryDot, secondaryDot] = Array.from(colorDots)
    if (primaryDot) {
      ;(primaryDot as HTMLElement).style.backgroundColor =
        theme['--color-primary']
    }
    if (secondaryDot) {
      ;(secondaryDot as HTMLElement).style.backgroundColor =
        theme['--color-secondary']
    }

    // Update theme name
    if (themeName) {
      themeName.textContent = theme.name
    }
  }

  private updateSelectedOption(): void {
    this.options.forEach((option) => {
      option.classList.toggle(
        'selected',
        option.getAttribute('data-theme') === this.currentTheme
      )
    })
  }

  private applyTheme(theme: ThemeKey): void {
    const root = document.documentElement
    const themeColors = THEMES[theme]

    // Batch DOM updates
    Object.entries(themeColors).forEach(([property, value]) => {
      if (property !== 'name') {
        root.style.setProperty(property, value)
      }
    })

    // Set body background
    document.body.style.backgroundColor = 'var(--color-background)'
  }
}
