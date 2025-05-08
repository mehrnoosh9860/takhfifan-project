/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        iran: ['"Vazirmatn"', 'sans-serif'],
      },
    },
    maxWidth: {
      'custom-container': '1440px',
    },
  },
  plugins: [],
}
