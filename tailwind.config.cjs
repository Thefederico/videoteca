module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
        ferrariRed: '#fb100a',
        prymaryDark: '#202020',
        secondaryDark: '#181818',
        veryLightPink: '#C7C7C7',
        textInputField: '#F7F7F7',
        white: '#FFFFFF',
        justBlack: '#000000'
      }),
      textColor: {
        textInputField: '#F7F7F7',
        veryLightPink: '#C7C7C7',
        ferrariRed: '#fb100a'
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif']
      }
    },
    variants: {
      width: ['responsive', 'hover', 'focus'],
      extend: {}
    }
  },
  plugins: []
}
