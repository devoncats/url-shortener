/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          1: 'hsla(var(--color-background-1) / <alpha-value>)',
          2: 'hsla(var(--color-background-2) / <alpha-value>)'
        },
        foreground: {
          1: 'hsla(var(--color-foreground-1) / <alpha-value>)'
        },
        border: {
          1: 'hsla(var(--color-border-1) / <alpha-value>)'
        },
        primary: {
          1: 'hsla(var(--color-primary-1) / <alpha-value>)',
          2: 'hsla(var(--color-primary-2) / <alpha-value>)'
        }
      }
    }
  },
  plugins: []
}
