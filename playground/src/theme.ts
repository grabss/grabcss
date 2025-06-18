import { THEMES, type ThemeKey } from './config'

export class ThemeManager {
  private currentTheme: ThemeKey = 'light'
  private dropdown: HTMLElement | null = null
  private trigger: HTMLElement | null = null
  private options: NodeListOf<HTMLElement> | null = null

  constructor() {
    this.initializeThemeSelector()
    this.applyTheme(this.currentTheme)
  }

  private initializeThemeSelector(): void {
    this.trigger = document.querySelector('.theme-selector-trigger')
    this.dropdown = document.querySelector('.theme-selector-dropdown')
    this.options = document.querySelectorAll('.theme-option')

    if (!this.trigger || !this.dropdown || !this.options) return

    // Click on trigger
    this.trigger.addEventListener('click', () => {
      this.toggleDropdown()
    })

    // Click on options
    this.options.forEach((option) => {
      option.addEventListener('click', () => {
        const theme = option.getAttribute('data-theme') as ThemeKey
        if (theme) {
          this.selectTheme(theme)
        }
      })
    })

    // Click outside to close
    document.addEventListener('click', (e) => {
      if (
        !this.trigger?.contains(e.target as Node) &&
        !this.dropdown?.contains(e.target as Node)
      ) {
        this.closeDropdown()
      }
    })

    // Keyboard navigation
    this.trigger.addEventListener('keydown', (e) => {
      this.handleKeydown(e as KeyboardEvent)
    })

    // Set initial selected state
    this.updateSelectedOption()
  }

  private toggleDropdown(): void {
    if (!this.dropdown || !this.trigger) return

    const isOpen = this.dropdown.classList.contains('show')
    if (isOpen) {
      this.closeDropdown()
    } else {
      this.openDropdown()
    }
  }

  private openDropdown(): void {
    if (!this.dropdown || !this.trigger) return
    this.dropdown.classList.add('show')
    this.trigger.setAttribute('aria-expanded', 'true')
  }

  private closeDropdown(): void {
    if (!this.dropdown || !this.trigger) return
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
    if (!this.trigger) return

    const theme = THEMES[this.currentTheme]
    const colorPreview = this.trigger.querySelector('.color-preview')
    const themeName = this.trigger.querySelector('.theme-name')

    if (colorPreview) {
      const dots = colorPreview.querySelectorAll('.color-dot')
      if (dots[0])
        (dots[0] as HTMLElement).style.backgroundColor =
          theme['--color-primary']
      if (dots[1])
        (dots[1] as HTMLElement).style.backgroundColor =
          theme['--color-secondary']
    }

    if (themeName) {
      themeName.textContent = theme.name
    }
  }

  private updateSelectedOption(): void {
    if (!this.options) return

    this.options.forEach((option) => {
      if (option.getAttribute('data-theme') === this.currentTheme) {
        option.classList.add('selected')
      } else {
        option.classList.remove('selected')
      }
    })
  }

  private handleKeydown(e: KeyboardEvent): void {
    const isOpen = this.dropdown?.classList.contains('show')

    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        this.toggleDropdown()
        break
      case 'Escape':
        if (isOpen) {
          e.preventDefault()
          this.closeDropdown()
        }
        break
      case 'ArrowDown':
        e.preventDefault()
        if (!isOpen) {
          this.openDropdown()
        } else {
          this.focusNextOption()
        }
        break
      case 'ArrowUp':
        e.preventDefault()
        if (isOpen) {
          this.focusPreviousOption()
        }
        break
    }
  }

  private focusNextOption(): void {
    const themes = Object.keys(THEMES) as ThemeKey[]
    const currentIndex = themes.indexOf(this.currentTheme)
    const nextIndex = (currentIndex + 1) % themes.length
    this.selectTheme(themes[nextIndex])
  }

  private focusPreviousOption(): void {
    const themes = Object.keys(THEMES) as ThemeKey[]
    const currentIndex = themes.indexOf(this.currentTheme)
    const prevIndex = currentIndex === 0 ? themes.length - 1 : currentIndex - 1
    this.selectTheme(themes[prevIndex])
  }

  private applyTheme(theme: ThemeKey): void {
    const root = document.documentElement
    const themeColors = THEMES[theme]

    Object.entries(themeColors).forEach(([property, value]) => {
      if (property !== 'name') {
        root.style.setProperty(property, value)
      }
    })

    document.body.style.backgroundColor = 'var(--color-background)'
  }
}
