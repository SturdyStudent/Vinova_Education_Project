/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./public/*.{html,js}" ],
  theme: {
    screens: {
      'sm': "414px",
      'md': "1024px",
      'lg': "1440px",
      'xl': "1920px"
    },
    fontSize: {
      'sm': '0.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.563rem'
    },
    colors: {
      "mainBlue": "#1F3684",
      'paleBlue': '#57679d',
      "subLightGold": "#F9F3ED",
      "mainBlack": "#2D2E33",
      "white": "#FFF",
      'transparent': 'transparent',
      'subLightGrey': '#F5F5F5'
    },
    backgroundImage: {
      'caret-down': "url('./assets/img/CaretDownWhite.png')"
    },
    extend: {
    }
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(mainBlue|subLightGold|mainBlack|white)/,
    }
  ]
}

