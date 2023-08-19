import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'

interface Roll {
  dice: string
  result: number[]
  timestamp: Date
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
    const updatedHistory = [...history, roll]
    setHistory(updatedHistory)
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
