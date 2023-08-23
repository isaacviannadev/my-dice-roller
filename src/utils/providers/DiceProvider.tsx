import { ReactNode, useState } from 'react'
import { DiceContext } from '../contexts/DiceContext'
import { useRollHistory } from '../contexts/RollHistoryContext'

type DiceProviderProps = {
  children: ReactNode
}

export const DiceProvider = ({ children }: DiceProviderProps) => {
  const [results, setResults] = useState<Record<string, number[]>>({})
  const { addRoll } = useRollHistory()

  const playRollSound = () => {
    const audio = new Audio('/sounds/dado.mp3')
    audio.play()
  }

  const insights = {
    total: 0,
    successes: 0,
    fails: 0,
    criticalFails: 0,
    highestRoll: 0,
    lowestRoll: 0,
    highestQuantity: 0,
    lowestQuantity: 0,
  }

  const rollMultipleDice = (
    id: string,
    sides: number,
    quantity: number,
    difficulty = 0,
  ) => {
    const rolls = Array.from(
      { length: quantity },
      () => Math.floor(Math.random() * sides) + 1,
    )
    playRollSound()

    setResults((prevResults) => ({
      ...prevResults,
      [id]: rolls,
    }))

    addRoll({
      dice: `D-${sides}`,
      difficulty: difficulty,
      result: rolls,
      insights,
      timestamp: new Date(),
      quantity,
    })
  }

  const clearResults = (id: string) => {
    setResults((prevResults) => {
      const newResults = { ...prevResults }
      delete newResults[id]
      return newResults
    })
  }

  return (
    <DiceContext.Provider value={{ results, rollMultipleDice, clearResults }}>
      {children}
    </DiceContext.Provider>
  )
}
