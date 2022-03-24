import React, { useContext } from 'react'
import { CardMedia, Container, Grid } from '@mui/material'
import { DataContext } from '../../contexts/DataContext'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Box } from '@mui/system'
import { IDataRow } from '../../interfaces'
import LinearLoading from '../Loading/Linear'

const Panel: React.FC = () => {
  const { state, loading, result } = useContext(DataContext)

  if (loading) return <LinearLoading />

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(
      value
    )
  }
  const cols: GridColDef[] = [
    {
      field: 'flag',
      headerName: '',
      width: 64,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params) => (
        <CardMedia
          component='img'
          src={params.formattedValue}
          width={64}
          loading='lazy'
        />
      ),
    },
    {
      field: 'country',
      headerName: 'Country',
      disableColumnMenu: true,
      width: 440,
    },
    {
      field: 'population',
      headerName: 'Population',
      disableColumnMenu: true,
      width: 140,
      valueFormatter: (params: any) => formatNumber(params.value),
    },
    {
      field: 'cases24',
      headerName: 'Cases/24h',
      disableColumnMenu: true,
      width: 120,
      valueFormatter: (params: any) => formatNumber(params.value),
    },
    {
      field: 'deaths24',
      headerName: 'Deaths/24h',
      disableColumnMenu: true,
      width: 120,
      valueFormatter: (params: any) => formatNumber(params.value),
    },
    {
      field: 'totalCases',
      headerName: 'Total Cases',
      disableColumnMenu: true,
      width: 130,
      valueFormatter: (params: any) => formatNumber(params.value),
    },
    {
      field: 'totalDeaths',
      headerName: 'Total Deaths',
      disableColumnMenu: true,
      width: 130,
      valueFormatter: (params: any) => formatNumber(params.value),
    },
  ]

  const isResult: string = result.country
  const gridHeight: number = !isResult ? 631 : 163

  const rows: IDataRow[] | IDataRow = []
  if (!isResult) {
    // eslint-disable-next-line array-callback-return
    state.map((data, i) => {
      rows.push({
        id: i,
        flag: data.countryInfo.flag,
        country: data.country,
        population: data.population,
        cases24: data.todayCases,
        deaths24: data.todayDeaths,
        totalCases: data.cases,
        totalDeaths: data.deaths,
      })
    })
  } else {
    rows.push({
      id: 1,
      flag: result.countryInfo.flag,
      country: result.country,
      population: result.population,
      cases24: result.todayCases,
      deaths24: result.todayDeaths,
      totalCases: result.cases,
      totalDeaths: result.deaths,
    })
  }

  return (
    <>
      <Container>
        <Grid container marginTop={4}>
          <Grid item xs={12}>
            <Box height={gridHeight}>
              <DataGrid
                pageSize={10}
                columns={cols}
                rows={rows}
                rowsPerPageOptions={[10]}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Panel
