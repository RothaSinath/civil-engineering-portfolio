/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53', // secondary navy
          900: '#102A43', // primary navy
          950: '#0B2545', // dark navy
        },
        primaryNavy: '#102A43',
        darkNavy: '#0B2545',
        secondaryNavy: '#243B53',
        accentBlue: '#3B82F6',
        paleBlue: '#EAF2FF',
        lightBg: '#F5F8FC',
        textPrimary: '#172B4D',
        textSecondary: '#627D98',
        borderSubtle: '#D9E2EC',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Manrope', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        site: '1280px',
      },
      boxShadow: {
        subtle: '0 1px 3px 0 rgba(16, 42, 67, 0.05), 0 1px 2px 0 rgba(16, 42, 67, 0.03)',
        card: '0 4px 6px -1px rgba(16, 42, 67, 0.06), 0 2px 4px -1px rgba(16, 42, 67, 0.03)',
        'card-hover': '0 12px 28px -5px rgba(16, 42, 67, 0.1), 0 8px 10px -6px rgba(16, 42, 67, 0.04)',
        modal: '0 25px 50px -12px rgba(11, 37, 69, 0.25)',
      },
      borderRadius: {
        card: '14px',
      }
    },
  },
  plugins: [],
};
