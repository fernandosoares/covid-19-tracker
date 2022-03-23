import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import Header from './components/Header'
import theme from './theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
    </ThemeProvider>
  )
}

export default App
