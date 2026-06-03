/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A0274F',
        secondary: '#E07B2A',
        charcoal: '#3A3A3A',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      maxWidth: {
        shell: '390px',
      },
      boxShadow: {
        card: '0 4px 14px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
