import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'

interface InsightsRoll {
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
    const { difficulty, result } = roll

    const resultSorted = [...result].sort((a, b) => a - b)
    const total = resultSorted.reduce((acc, curr) => acc + curr, 0)
    const criticalFails = resultSorted.filter((r) => r === 1).length
    const successes =
      resultSorted.filter((r) => r >= difficulty).length - criticalFails

    const highestRoll = Math.max(...resultSorted)
    const resultWithoutCriticalFails = resultSorted.filter((r) => r !== 1)
    const fails = resultWithoutCriticalFails.filter(
      (r) => r < difficulty,
    ).length
    const lowestRoll =
      resultWithoutCriticalFails.length > 0
        ? Math.min(...resultWithoutCriticalFails)
        : 1
    const highestQuantity = resultSorted.filter((r) => r === highestRoll).length
    const lowestQuantity = resultSorted.filter((r) => r === lowestRoll).length

    const insights = {
      total,
      successes,
      fails,
      criticalFails,
      highestRoll,
      lowestRoll,
      highestQuantity,
      lowestQuantity,
    }

    const updatedHistory = [
      ...history,
      {
        ...roll,
        result: resultSorted,
        insights,
      },
    ]

    const sortedHistory = updatedHistory.sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime(),
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
