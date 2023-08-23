import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { calculateInsights } from '../helpers'

export interface InsightsRoll {
  total: number // Soma dos resultados
  successes: number // Quantidade de sucessos
  fails: number // Quantidade de falhas
  criticalFails: number // Quantidade de falhas críticas
  highestRoll: number // Maior dado
  lowestRoll: number // Menor dado
  highestQuantity: number // Maior quantidade de dados
  lowestQuantity: number // Menor quantidade de dados
}

export interface Roll {
  dice: string
  difficulty: number
  result: number[]
  timestamp: Date
  insights: InsightsRoll
  quantity: number
}

interface RollHistoryContextData {
  history: Roll[]
  addRoll: (roll: Roll) => void
  clearHistory: () => void
}

type RollHistoryProviderProps = {
  children: React.ReactNode
}

const RollHistoryContext = createContext<RollHistoryContextData>(
  {} as RollHistoryContextData,
)

export const RollHistoryProvider = ({ children }: RollHistoryProviderProps) => {
  const [history, setHistory] = useState<Roll[]>([])

  useEffect(() => {
    const loadedHistory = Cookies.get('rollHistory')
    if (loadedHistory) {
      setHistory(JSON.parse(loadedHistory))
    }
  }, [])

  const addRoll = (roll: Roll) => {
    const { result } = roll
    const insights = calculateInsights(roll)

    const updatedHistory = [
      ...history,
      {
        ...roll,
        result,
        insights,
      },
    ]

    const sortedHistory = updatedHistory.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
    )

    setHistory(sortedHistory)
    Cookies.set('rollHistory', JSON.stringify(updatedHistory))
  }

  const clearHistory = () => {
    setHistory([])
    Cookies.remove('rollHistory')
  }

  return (
    <RollHistoryContext.Provider value={{ history, addRoll, clearHistory }}>
      {children}
    </RollHistoryContext.Provider>
  )
}

export const useRollHistory = () => {
  const context = useContext(RollHistoryContext)
  if (!context) {
    throw new Error('useRollHistory must be used within a RollHistoryProvider')
  }
  return context
}
