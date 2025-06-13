// Theme configuration
export const THEMES = {
  light: {
    '--color-primary': '#00a596',
    '--color-secondary': '#000000',
    '--color-background': '#ffffff',
    '--color-border': '#dce1e6',
    '--color-heading': '#00a596',
    '--color-body': '#000000',
    '--color-muted': '#787878'
  },
  dark: {
    '--color-primary': '#4ade80',
    '--color-secondary': '#ffffff',
    '--color-background': '#1f2937',
    '--color-border': '#374151',
    '--color-heading': '#f3f4f6',
    '--color-body': '#e5e7eb',
    '--color-muted': '#9ca3af'
  }
} as const

export type ThemeKey = keyof typeof THEMES
