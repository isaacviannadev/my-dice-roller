import React, { createContext, useState, useContext } from 'react'

interface Roll {
  dice: string
  result: number[]
  timestamp: Date
}

interface RollHistoryContextData {
  history: Roll[]
  addRoll: (roll: Roll) => void
}

type RollHistoryProviderProps = {
  children: React.ReactNode
}

const RollHistoryContext = createContext<RollHistoryContextData>(
  {} as RollHistoryContextData,
)

export const RollHistoryProvider = ({ children }: RollHistoryProviderProps) => {
  const [history, setHistory] = useState<Roll[]>([])

  const addRoll = (roll: Roll) => {
    setHistory((prevHistory) => [...prevHistory, roll])
  }

  return (
    <RollHistoryContext.Provider value={{ history, addRoll }}>
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
