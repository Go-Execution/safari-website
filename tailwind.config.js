/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        natgeo: {
          yellow: '#FFCC00',
          yellowHover: '#E6B800',
          black: '#000000',
          dark: '#121212',
          darkGray: '#1F1F1F',
          muted: '#767676',
          border: '#E2E2E2',
          lightBg: '#F8F9FA',
        },
        espresso: {
          DEFAULT: '#000000',
          light: '#1F1F1F',
          dark: '#0A0A0A',
          50: '#F8F9FA',
          100: '#F1F3F5',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#1F1F1F',
          900: '#000000',
        },
        terracotta: {
          DEFAULT: '#FFCC00',
          light: '#FFD633',
          dark: '#E6B800',
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#FFCC00',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        amber: {
          DEFAULT: '#FFCC00',
          light: '#FFD633',
          dark: '#E6B800',
        },
        sand: {
          DEFAULT: '#FFFFFF',
          light: '#FFFFFF',
          dark: '#F5F5F5',
        },
        cream: '#FFFFFF',
        ink: '#121212',
        inkSoft: '#4A4A4A',
      },
      fontFamily: {
        natgeo: ['"Barlow Condensed"', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.25rem', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h3': ['1.625rem', { lineHeight: '1.25' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
      },
      maxWidth: {
        'content': '1320px',
        'prose-narrow': '720px',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slow-zoom': 'slowZoom 25s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
};
