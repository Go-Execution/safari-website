/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#111827',
          light: '#1F2937',
          dark: '#0B0F17',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        terracotta: {
          DEFAULT: '#C25B3E',
          light: '#D96E50',
          dark: '#A84428',
          50: '#FDF4F0',
          100: '#FBE8E2',
          200: '#F6D2C5',
          300: '#EDAC97',
          400: '#DE8165',
          500: '#C25B3E',
          600: '#A84428',
          700: '#8A321B',
          800: '#6E2714',
          900: '#4A190C',
        },
        amber: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        sand: {
          DEFAULT: '#F8F9FA',
          light: '#FFFFFF',
          dark: '#EEF0F2',
        },
        cream: '#FFFFFF',
        ink: '#111827',
        inkSoft: '#4B5563',
        sage: {
          DEFAULT: '#52796F',
          dark: '#354F52',
        },
      },
      fontFamily: {
        display: ['Cormorant', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['5.5rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'h1': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'h3': ['1.75rem', { lineHeight: '1.2' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
      },
      maxWidth: {
        'content': '1320px',
        'prose-narrow': '680px',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slow-zoom': 'slowZoom 25s ease-in-out infinite alternate',
        'line-grow': 'lineGrow 1.2s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
};
