import {
  D10Face,
  D12Face,
  D20Face,
  D4Face,
  D6Face,
  D8Face,
} from './DiceFaces.styled'

type DiceProps = {
  id: string
  result: string
}

export const D4 = ({ id, result = '?' }: DiceProps) => {
  return (
    <D4Face id={id}>
      <span>{result}</span>
    </D4Face>
  )
}

export const D6 = ({ id, result = '?' }: DiceProps) => {
  return (
    <D6Face id={id}>
      <span>{result}</span>
    </D6Face>
  )
}

export const D8 = ({ id, result = '?' }: DiceProps) => {
  return (
    <D8Face id={id}>
      <span>{result}</span>
    </D8Face>
  )
}

export const D10 = ({ id, result = '?' }: DiceProps) => {
  return (
    <D10Face id={id}>
      <span>{result}</span>
    </D10Face>
  )
}

export const D12 = ({ id, result = '?' }: DiceProps) => {
  return (
    <D12Face id={id}>
      <span>{result}</span>
    </D12Face>
  )
}

export const D20 = ({ id, result = '?' }: DiceProps) => {
  return (
    <D20Face id={id}>
      <span>{result}</span>
    </D20Face>
  )
}
