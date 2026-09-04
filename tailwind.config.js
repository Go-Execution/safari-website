/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#2A1F1A',
          light: '#3D2E25',
          dark: '#1A1310',
          50: '#F8F5F2',
          100: '#EDE6DF',
          200: '#D4C5B8',
          300: '#B09A87',
          400: '#8A7060',
          500: '#6D5645',
          600: '#523E30',
          700: '#3D2E25',
          800: '#2A1F1A',
          900: '#1A1310',
        },
        terracotta: {
          DEFAULT: '#C25B3E',
          light: '#D67A5C',
          dark: '#A04528',
          50: '#FBF0EB',
          100: '#F5DBCF',
          200: '#E9B4A0',
          300: '#DA8E73',
          400: '#C25B3E',
          500: '#A04528',
          600: '#82381F',
          700: '#632B17',
          800: '#451E10',
          900: '#2C1208',
        },
        amber: {
          DEFAULT: '#E8A23B',
          light: '#F0BC65',
          dark: '#C5842A',
        },
        sand: {
          DEFAULT: '#F2EBE0',
          light: '#FAF6EF',
          dark: '#E0D4C2',
        },
        cream: '#FAF6EF',
        ink: '#1A1310',
        inkSoft: '#4A3D34',
        sage: {
          DEFAULT: '#7A8B6F',
          dark: '#5A6B50',
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
