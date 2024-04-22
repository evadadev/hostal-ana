/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {sans: ['Poppins', 'sans-serif']},
      colors: {
        'primary': 'rgb(161 98 7)',
        'secundary': '#6b7280',
        'grey-ligth': '#9ca3af',
        'black-modal': 'rgb(0 0 0 / 0.8)',
      },
      minHeight: {
        'mainScrren': 'calc(100vh - 190px)',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('@tailwindcss/forms'),
  ],
}

