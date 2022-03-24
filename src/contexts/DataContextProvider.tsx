import axios from 'axios'
import { useEffect, useState } from 'react'

import { IData, IDataContextProviderProps, IState } from '../interfaces'
import { DataContext } from './DataContext'

export const DataContextProvider = ({
  children,
}: IDataContextProviderProps) => {
  const [data, setData] = useState({} as { state: IData[] })
  const [result, setResult] = useState<IData>({} as IData)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      axios
        .get('https://disease.sh/v3/covid-19/countries?yesterday=1')
        .then((res) => {
          setData({ state: res.data })
          setLoading(false)
        })
    })()
  }, [])

  const search = async (value: string) => {
    setLoading(true)
    await axios
      .get(`https://disease.sh/v3/covid-19/countries/${value}?yesterday=1`)
      .then((res) => {
        setResult(res.data)
        setLoading(false)
        console.log(result.country)
      })
      .catch((err) => console.log(err))
  }

  return (
    <DataContext.Provider
      value={{ ...data, search, result, setResult, loading }}
    >
      {children}
    </DataContext.Provider>
  )
}
