import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12}>
          <Typography marginTop={2} variant='caption' component='p'>
            Developed by Fernando Soares, O Dev | 2022 | All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer
