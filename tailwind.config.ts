import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#faf7f2',
          100: '#f5f0e8',
          200: '#ebe3d5',
          300: '#d4c4b0',
          400: '#b8a084',
          500: '#a0845c',
          600: '#8b6f52',
          700: '#6f5844',
          800: '#5a473a',
          900: '#3d2f23',
        }
      },
    },
  },
  plugins: [],
} satisfies Config
