import { Container, Typography } from '@mui/material'
import moment from 'moment'
import React, { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'

const Hero: React.FC = () => {
  const { data } = useContext(DataContext)

  return (
    <Container maxWidth='lg'>
      <Typography className='hero' variant='h3' marginTop={4}>
        COVID-19 World Information Tracker
      </Typography>
      <Typography variant='caption'>Last updated: </Typography>
    </Container>
  )
}

export default Hero
