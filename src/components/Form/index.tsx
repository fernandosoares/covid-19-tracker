import {
  Autocomplete,
  Button,
  Container,
  FormGroup,
  Grid,
  TextField,
} from '@mui/material'
import React, { ChangeEvent, useContext, useState } from 'react'
import { DataContext } from '../../contexts/DataContext'

const Form: React.FC = () => {
  const { state, loading, search } = useContext(DataContext)
  const [value, setValue] = useState('')

  if (loading) return <></>

  const options = state.map((item) => {
    return item.country
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleClick = async () => {
    await search(value)
  }

  return (
    <Container maxWidth='lg'>
      <Grid container marginTop={3}>
        <Grid item xs={12}>
          <FormGroup>
            <Autocomplete
              options={options}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label='Search by Country'
                  placeholder='Country name'
                  value={value}
                  onSelect={handleChange}
                />
              )}
            />
          </FormGroup>
          <FormGroup sx={{ marginTop: 2 }}>
            <Button variant='contained' onClick={handleClick}>
              Search
            </Button>
          </FormGroup>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Form
