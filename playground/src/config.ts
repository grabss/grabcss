// Theme configuration
export const THEMES = {
  light: {
    name: 'Light',
    '--color-primary': '#00a596',
    '--color-secondary': '#000000',
    '--color-background': '#ffffff',
    '--color-border': '#dce1e6',
    '--color-heading': '#00a596',
    '--color-body': '#000000',
    '--color-muted': '#787878'
  },
  dark: {
    name: 'Dark',
    '--color-primary': '#00a596',
    '--color-secondary': '#ffffff',
    '--color-background': '#1f2937',
    '--color-border': '#374151',
    '--color-heading': '#f3f4f6',
    '--color-body': '#e5e7eb',
    '--color-muted': '#9ca3af'
  },
  cyber: {
    name: 'Cyber',
    '--color-primary': '#ff0080',
    '--color-secondary': '#00ffff',
    '--color-background': '#0a0a0a',
    '--color-border': '#2a2a2a',
    '--color-heading': '#ff0080',
    '--color-body': '#e0e0e0',
    '--color-muted': '#808080'
  },
  royal: {
    name: 'Royal',
    '--color-primary': '#1E3A8A',
    '--color-secondary': '#DAA520',
    '--color-background': '#FFFFFF',
    '--color-border': '#E5E5E5',
    '--color-heading': '#1E3A8A',
    '--color-body': '#1F2937',
    '--color-muted': '#6B7280'
  },
  mono: {
    name: 'Mono',
    '--color-primary': '#000000',
    '--color-secondary': '#ffffff',
    '--color-background': '#f8f8f8',
    '--color-border': '#d0d0d0',
    '--color-heading': '#000000',
    '--color-body': '#333333',
    '--color-muted': '#666666'
  }
} as const

export type ThemeKey = keyof typeof THEMES
