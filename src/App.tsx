import React from 'react'

import theme from './theme'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

import { DataContextProvider } from './contexts/DataContextProvider'

import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Panel from './components/Panel'
import Form from './components/Form'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <DataContextProvider>
        <Hero />
        <Form />
        <Panel />
      </DataContextProvider>
      <Footer />
    </ThemeProvider>
  )
}

export default App
