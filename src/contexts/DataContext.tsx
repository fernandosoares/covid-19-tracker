import { createContext } from 'react'
import { IData, IState } from '../interfaces'

interface IProps {
  state: IData[]
  search: (value: string) => void
  result: IData
  loading: boolean
}

export const DataContext = createContext<IProps>({} as IProps)
