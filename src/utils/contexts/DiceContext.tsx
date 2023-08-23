import { createContext } from 'react'

interface DiceContextProps {
  results: Record<string, number[]>
  rollMultipleDice: (
    id: string,
    sides: number,
    quantity: number,
    difficulty: number,
  ) => void
  clearResults: (id: string) => void
}

export const DiceContext = createContext<DiceContextProps>({
  results: {},
  rollMultipleDice: () => {},
  clearResults: () => {},
})
