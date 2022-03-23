import axios from 'axios'
import { useEffect, useState } from 'react'

import { IDataContextProviderProps, IState } from '../interfaces'
import { DataContext } from './DataContext'

export const DataContextProvider = ({
  children,
}: IDataContextProviderProps) => {
  const [data, setData] = useState<IState>({} as IState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      axios
        .get('https://disease.sh/v3/covid-19/countries?yesterday=1')
        .then((res) => {
          setData({ data: res.data })
          setLoading(false)
        })
    })()
  }, [])

  return (
    <DataContext.Provider value={{ ...data, loading }}>
      {children}
    </DataContext.Provider>
  )
}
