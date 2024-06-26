import { defineTheme } from '@pinceau/theme'

export default defineTheme({
  header: {
    height: '64px',
  },
  font: {
    primary: 'Nunito, "Nunito Fallback: Arial", sans-serif, ui-sans-serif, system-ui, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji; ',
  },
  border: '#262626',
  color: {
    black: '#171717',
    white: '#FFFFFF',
    primary: {
      50: '#EAF6F2',
      100: '#D2ECE2',
      200: '#A8DBC6',
      300: '#7DC9A9',
      400: '#58B98F',
      500: '#539F80', // Base color
      600: '#44816A',
      700: '#356253',
      800: '#26443D',
      900: '#172824',
    },

  },

  space: {
    0: '0px',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem',
    11: '2.75rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
    72: '18rem',
    80: '20rem',
    96: '24rem',
    px: '1px',
    rem: {
      125: '0.125rem',
      375: '0.375rem',
      625: '0.625rem',
      875: '0.875rem',
    },
  },
})
