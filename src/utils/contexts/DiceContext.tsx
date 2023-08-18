import { createContext } from 'react'

interface DiceContextProps {
  results: Record<string, number>
  rollDice: (id: string, sides: number) => void
}

export const DiceContext = createContext<DiceContextProps>({
  results: {},
  rollDice: () => {},
})
