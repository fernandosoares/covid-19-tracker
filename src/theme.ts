import { createTheme } from '@mui/material/styles'

export default createTheme({
  typography: {
    h1: {
      '&.main-title': {
        fontSize: '1.5rem',
        fontWeight: 700,
        letterSpacing: '.05rem',
      },
    },
    h3: {
      '&.hero': {
        fontSize: '3rem',
        fontWeight: 700,
        letterSpacing: '.05rem',
      },
    },
  },
})
