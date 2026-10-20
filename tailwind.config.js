/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6FDF4',
          100: '#C3F9E4',
          200: '#8DF2CD',
          300: '#4AE9B2',
          400: '#05F29B',
          500: '#03C098',
          600: '#038C5A',
          700: '#078279',
          800: '#055E56',
          900: '#043D39',
        },
        mint: {
          DEFAULT: '#00FFB8',
          bright: '#05F29B',
        },
        navy: {
          900: '#071F38',
          800: '#0B2E4F',
          700: '#0E3659',
          600: '#124469',
          500: '#164A78',
        },
        dark: {
          900: '#071F38',
          800: '#0B2E4F',
          700: '#0E3659',
          600: '#124469',
        },
        cloud: {
          DEFAULT: '#F4F8FB',
          muted: '#9FBED6',
          tertiary: '#6E93B4',
        },
        warning: {
          DEFAULT: '#FFC857',
          light: '#FFD97A',
        },
        critical: {
          DEFAULT: '#FF6B6B',
          light: '#FF8A8A',
        },
        high: '#FF8A5C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-mint': '0 4px 18px rgba(3, 192, 152, 0.35)',
        'glow-mint-lg': '0 6px 26px rgba(3, 192, 152, 0.5)',
        card: '0 10px 36px rgba(3, 20, 38, 0.45)',
        navbar: '0 4px 30px rgba(3, 20, 38, 0.45)',
      },
      borderColor: {
        brand: 'rgba(0, 255, 184, 0.10)',
        'brand-hover': 'rgba(0, 255, 184, 0.18)',
      },
    },
  },
  plugins: [],
}
