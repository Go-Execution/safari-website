/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        natgeo: {
          yellow: '#FFCC00',
          black: '#000000',
          dark: '#111111',
          charcoal: '#1C1C1C',
          grey: '#2A2A2A',
          border: '#333333',
        },
        espresso: {
          DEFAULT: '#111111',
          light: '#1C1C1C',
          dark: '#000000',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111111',
        },
        terracotta: {
          DEFAULT: '#FFCC00',
          light: '#FFD633',
          dark: '#E6B800',
          50: '#FFFDEB',
          100: '#FFF9C2',
          200: '#FFF085',
          300: '#FFE247',
          400: '#FFD633',
          500: '#FFCC00',
          600: '#E6B800',
          700: '#B89200',
          800: '#8A6D00',
          900: '#5C4900',
        },
        amber: {
          DEFAULT: '#FFCC00',
          light: '#FFD633',
          dark: '#E6B800',
        },
        sand: {
          DEFAULT: '#F8F9FA',
          light: '#FFFFFF',
          dark: '#E9ECEF',
        },
        cream: '#FFFFFF',
        ink: '#0D0D0D',
        inkSoft: '#525252',
        sage: {
          DEFAULT: '#475569',
          dark: '#334155',
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
