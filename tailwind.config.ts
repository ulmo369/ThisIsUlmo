import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        theme: {
          dark: {
            base: '#0f0f1a',
            surface: '#1a1a2e',
            elevated: '#25254a',
            overlay: '#232b3d',
            border: '#2d2d5e',
            'border-accent': '#3d3d7a',
            'text-primary': '#e2e8f0',
            'text-body': '#cbd5e1',
            'text-secondary': '#94a3b8',
            'text-muted': '#64748b',
          },
          light: {
            base: '#eeeceb',
            surface: '#e0dedc',
            elevated: '#d1cfcd',
            border: '#d1cfcd',
            'border-accent': '#a8a29e',
            'text-primary': '#1c1917',
            'text-secondary': '#57534e',
            'text-muted': '#a8a29e',
          },
        },
        'accent-green': {
          DEFAULT: '#4a5d23',
          light: '#6b7f3a',
          dark: '#3a4a1b',
        },
        'accent-red': {
          DEFAULT: '#722f37',
          light: '#8b3a44',
          dark: '#5a252c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
