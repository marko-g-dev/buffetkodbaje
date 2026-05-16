/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF6F0',
        brown: {
          DEFAULT: '#3B2F24',
          muted: '#8B7355',
        },
        terracotta: {
          DEFAULT: '#C4623A',
          light: '#D4785A',
          dark: '#A04E2D',
        },
        beige: '#F0E6D6',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
