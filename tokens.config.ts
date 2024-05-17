import { defineTheme } from 'pinceau'

export default defineTheme({
  header: {
    height: '60px'
  },
  font: {
    primary: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif'
  },
  color: {
    black: '#0B0D0E',
    white: '#FFFFFF',
    primary: {
      50: '#EAF6F2',
      100: '#D2ECE2',
      200: '#A8DBC6',
      300: '#7DC9A9',
      400: '#58B98F',
      500: '#539F80',  // Base color
      600: '#44816A',
      700: '#356253',
      800: '#26443D',
      900: '#172824'
    }

  }
})
