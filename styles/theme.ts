import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  typography: {
    htmlFontSize: 10,
    fontFamily: ['Ubuntu', 'serif'].join(','),
    fontSize: 12,
    h1: {
      fontWeight: 600,
      letterSpacing: 1,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: '#2B3385',
      light: '#00B3EB',
    },
    secondary: {
      main: '#FF0000',
    },
    text: {
      primary: '#333333',
    },
    warning: {
      main: '#FBBA00',
    },
  },
})

export default theme
