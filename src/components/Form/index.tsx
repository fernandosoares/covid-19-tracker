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
import { IData } from '../../interfaces'

const Form: React.FC = () => {
  const { state, loading, search, result, setResult } = useContext(DataContext)
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

  const handleClear = () => {
    setResult({} as IData)
  }

  return (
    <Container maxWidth='lg'>
      <Grid container marginTop={3}>
        <Grid item xs={12}>
          {!result.country && (
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
          )}

          <FormGroup sx={{ marginTop: 2 }}>
            {!result.country ? (
              <Button variant='contained' onClick={handleClick}>
                Search
              </Button>
            ) : (
              <Button variant='contained' color='success' onClick={handleClear}>
                Clear
              </Button>
            )}
          </FormGroup>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Form
