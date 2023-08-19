import { D4, D6, D8, D10, D12, D20 } from './DiceFaces'
import { styled } from 'styled-components'

type DiceProps = {
  id: string
  sides: number
  result: string
}

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const Dice = ({ id, sides, result = '?' }: DiceProps) => {
  const renderDiceFace = () => {
    switch (sides) {
      case 4:
        return <D4 id="d4" result={'' + result} />
      case 6:
        return <D6 id="d6" result={'' + result} />
      case 8:
        return <D8 id="d8" result={'' + result} />
      case 10:
        return <D10 id="d10" result={'' + result} />
      case 12:
        return <D12 id="d12" result={'' + result} />
      case 20:
        return <D20 id="d20" result={'' + result} />
      default:
        return null
    }
  }

  return <DiceContainer>{renderDiceFace()}</DiceContainer>
}

export default Dice
