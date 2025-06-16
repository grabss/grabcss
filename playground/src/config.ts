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
    '--color-primary': '#4ade80',
    '--color-secondary': '#ffffff',
    '--color-background': '#1f2937',
    '--color-border': '#374151',
    '--color-heading': '#f3f4f6',
    '--color-body': '#e5e7eb',
    '--color-muted': '#9ca3af'
  },
  ocean: {
    name: 'Ocean',
    '--color-primary': '#3b82f6',
    '--color-secondary': '#1e40af',
    '--color-background': '#f0f9ff',
    '--color-border': '#bfdbfe',
    '--color-heading': '#1e40af',
    '--color-body': '#1e293b',
    '--color-muted': '#64748b'
  },
  forest: {
    name: 'Forest',
    '--color-primary': '#10b981',
    '--color-secondary': '#047857',
    '--color-background': '#f0fdf4',
    '--color-border': '#bbf7d0',
    '--color-heading': '#047857',
    '--color-body': '#14532d',
    '--color-muted': '#4b5563'
  },
  sunset: {
    name: 'Sunset',
    '--color-primary': '#f97316',
    '--color-secondary': '#c2410c',
    '--color-background': '#fff7ed',
    '--color-border': '#fed7aa',
    '--color-heading': '#c2410c',
    '--color-body': '#431407',
    '--color-muted': '#78716c'
  },
  midnight: {
    name: 'Midnight',
    '--color-primary': '#a78bfa',
    '--color-secondary': '#c084fc',
    '--color-background': '#0f172a',
    '--color-border': '#334155',
    '--color-heading': '#e2e8f0',
    '--color-body': '#cbd5e1',
    '--color-muted': '#64748b'
  }
} as const

export type ThemeKey = keyof typeof THEMES
