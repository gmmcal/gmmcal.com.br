const pxToRem = (px, base = 10) => `${px / base}rem`
const getScaleValues = (limit = 100) => {
  let scale = {}

  Array(limit + 1).fill()
    .map((value, key) => pxToRem(key))
    .forEach((value, key) => {
      scale[key] = value
    })

  return scale
}

module.exports = {
  content: [
    './app/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: {
        DEFAULT: '#000',
        blue: '#1b1f29',
      },
      white: {
        DEFAULT: '#fff',
        gray: '#fafafa',
      },
      blue: {
        'grayish': '#c3c8d6',
        'dark-grayish': '#93959c',
        'dark-grayish-2': '#84868d',
        'dark-grayish:hover': '#a9abb0',
        'very-dark-grayish': '#474d5d',
        'very-dark-grayish:hover': '#373d4c',
        'menu': '#262b37',
      },
      cyan: {
        strong: '#00bdbd',
        dark: '#0a9f9f',
      },
      gray: {
        'very-light': '#eee',
        light: '#ccc',
      },
      red: {
        light: '#ff675f',
        'light-grayish': '#e5e4e4',
      },
      'white-opacity-.5': 'rgba(255, 255, 255, .5)',
      'white-opacity-.1': 'rgba(255, 255, 255, .1)',
    },
    spacing: {
      ...getScaleValues(140),
      '1/12': '8.333333%',
      '2/12': '16.666667%',
      '3/12': '25%',
      '4/12': '33.333333%',
      '5/12': '41.666667%',
      '6/12': '50%',
      '7/12': '58.333333%',
      '8/12': '66.666667%',
      '9/12': '75%',
      '10/12': '83.333333%',
      '11/12': '91.666667%',
    },
    fontFamily: {
      sans: [
        '"Open Sans"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      error: [
        '"Roboto"',
        'Arial',
        'sans-serif'
      ]
    },
    fontSize: {
      ...getScaleValues(80),
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      none: 1,
      ...getScaleValues(90),
    },
    letterSpacing: {
      ...getScaleValues(16),
    },
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      'top-center': 'top center',
      'position-0': '0 0',
      'position-arrow-top': '50% 100%',
      'position-arrow-left': '0 2.3rem',
      'flag-br': '-32px 0',
      'flag-en': '0 -32px',
    },
    backgroundSize: {
      cover: 'cover',
      contain: 'contain',
      full: '100% 100%',
    },
    borderWidth: {
      DEFAULT: '0.1rem',
      ...getScaleValues(8),
    },
    borderRadius: {
      none: '0',
      ...getScaleValues(4),
      half: '50%',
    },
    minHeight: {
      ...getScaleValues(700),
      full: '100%',
      screen: '100vh',
    },
    maxWidth: {
      ...getScaleValues(1170),
      'p-30': '30%',
      'p-70': '70%',
      full: '100%',
    },
    flex: {
      1: '1 1 0%',
      auto: '0 0 auto',
      initial: '0 1 auto',
      none: 'none',
      '1/12': '0 0 8.333333%',
      '2/12': '0 0 16.666667%',
      '3/12': '0 0 25%',
      '4/12': '0 0 33.333333%',
      '5/12': '0 0 41.666667%',
      '6/12': '0 0 50%',
      '7/12': '0 0 58.333333%',
      '8/12': '0 0 66.666667%',
      '9/12': '0 0 75%',
      '10/12': '0 0 83.333333%',
      '11/12': '0 0 91.666667%',
      '30': '0 0 30%',
      '70': '0 0 70%',
      full: '0 0 100%',
    },
    inset: {
      0: 0,
      200: '20.0rem',
    },
  },
}
