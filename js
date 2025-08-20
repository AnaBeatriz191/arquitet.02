module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          700: '#5C4033',
          800: '#3E2F1C',
          900: '#2B1B0F'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'serif']
      },
      backgroundImage: {
        'vintage-pattern': "url('/vintage-bg.jpg')"
      }
    }
  },
  plugins: []
}
