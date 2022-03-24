import React, { useContext } from 'react'
import { DataContext } from '../../contexts/DataContext'

import { Container, Typography } from '@mui/material'
import moment from 'moment'

const Hero: React.FC = () => {
  const { state, loading } = useContext(DataContext)
  const date = !loading
    ? moment(state[0].updated).format('YYYY/MMM/DD HH\\hMM')
    : ' ...'
  return (
    <Container maxWidth='lg'>
      <Typography className='hero' variant='h3' marginTop={4}>
        COVID-19 World Information Tracker
      </Typography>
      <Typography variant='caption'>Last updated: {date}</Typography>
    </Container>
  )
}

export default Hero
