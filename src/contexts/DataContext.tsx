import { createContext } from 'react'
import { IState } from '../interfaces'

export const DataContext = createContext<IState>({} as IState)
