/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0D2A52',
        'gold': '#C8A35D',
        'cream': '#F7F3EE',
        'ice-blue': '#A8D8FF',
        'light-cream': '#FCFAF7',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
