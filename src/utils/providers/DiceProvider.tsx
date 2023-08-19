import { ReactNode, useState } from 'react'
import { DiceContext } from '../contexts/DiceContext'

type DiceProviderProps = {
  children: ReactNode
}

export const DiceProvider = ({ children }: DiceProviderProps) => {
  const [results, setResults] = useState<Record<string, number[]>>({})

  const playRollSound = () => {
    const audio = new Audio('/sounds/dado.mp3')
    audio.play()
  }

  const rollMultipleDice = (id: string, sides: number, quantity: number) => {
    const rolls = Array.from(
      { length: quantity },
      () => Math.floor(Math.random() * sides) + 1,
    )
    playRollSound()

    setResults((prevResults) => ({
      ...prevResults,
      [id]: rolls,
    }))
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
