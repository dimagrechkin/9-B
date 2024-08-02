/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundMain: '#FCF5E3',
        primaryMain: '#990000',
        secondaryMain: '#FBF0D7',
        thirdMain: '#E2D8C2',
      },
    },
  },
  plugins: [],
}
