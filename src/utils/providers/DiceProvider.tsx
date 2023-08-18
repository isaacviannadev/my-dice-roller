import { ReactNode, useState } from 'react'
import { DiceContext } from '../contexts/DiceContext'

type DiceProviderProps = {
  children: ReactNode
}

export const DiceProvider = ({ children }: DiceProviderProps) => {
  const [results, setResults] = useState<Record<string, number>>({})

  const rollDice = (id: string, sides: number) => {
    setResults((prevResults) => ({
      ...prevResults,
      [id]: Math.floor(Math.random() * sides) + 1,
    }))
  }

  return (
    <DiceContext.Provider value={{ results, rollDice }}>
      {children}
    </DiceContext.Provider>
  )
}
