export interface IDataContextProviderProps {
  children: JSX.Element | JSX.Element[]
}

export interface IDataRow {
  id: number
  flag: string
  country: string
  population: number
  cases24: number
  deaths24: number
  totalCases: number
  totalDeaths: number
}

export interface IState {
  data: IData[]
  search?: (value: string) => void
  loading?: boolean
}

export interface IData {
  updated: number
  country: string
  countryInfo: ICountryInfo
  cases: number
  todayCases: number
  deaths: number
  todayDeaths: number
  recovered: number
  todayRecovered: number
  active: number
  critical: number
  casesPerOneMillion: number
  deathsPerOneMillion: number
  tests: number
  testsPerOneMillion: number
  population: number
  continent: string
  oneCasePerPeople: number
  oneDeathPerPeople: number
  oneTestPerPeople: number
  activePerOneMillion: number
  recoveredPerOneMillion: number
  criticalPerOneMillion: number
}

export interface ICountryInfo {
  _id: number | null
  iso2: null | string
  iso3: null | string
  lat: number
  long: number
  flag: string
}
