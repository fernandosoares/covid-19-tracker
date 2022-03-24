import { CircularProgress, Container } from '@mui/material'
import React from 'react'

const CircularLoading: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <CircularProgress />
    </Container>
  )
}

export default CircularLoading
