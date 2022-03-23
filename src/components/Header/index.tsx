import { CoronavirusRounded } from '@mui/icons-material'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Header: React.FC = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Box display='flex' alignItems='center'>
          <CoronavirusRounded />
          <Typography className='main-title' marginLeft={1} variant='h1'>
            COVID-19 Global Data Tracker | Soares, O Dev
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
