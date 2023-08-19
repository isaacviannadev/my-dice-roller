import { D4, D6, D8, D10, D12, D20 } from './DiceFaces'
import { styled } from 'styled-components'

type DiceProps = {
  id: string
  sides: number
  result: string
  isCriticalFail?: boolean
  isSuccess?: boolean
}

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`

const Dice = ({
  sides,
  result = '?',
  isCriticalFail = false,
  isSuccess = false,
}: DiceProps) => {
  const renderDiceFace = () => {
    switch (sides) {
      case 4:
        return (
          <D4
            id="d4"
            result={'' + result}
            isCriticalFail={isCriticalFail}
            isSuccess={isSuccess}
          />
        )
      case 6:
        return (
          <D6
            id="d6"
            result={'' + result}
            isCriticalFail={isCriticalFail}
            isSuccess={isSuccess}
          />
        )
      case 8:
        return (
          <D8
            id="d8"
            result={'' + result}
            isCriticalFail={isCriticalFail}
            isSuccess={isSuccess}
          />
        )
      case 10:
        return (
          <D10
            id="d10"
            result={'' + result}
            isCriticalFail={isCriticalFail}
            isSuccess={isSuccess}
          />
        )
      case 12:
        return (
          <D12
            id="d12"
            result={'' + result}
            isCriticalFail={isCriticalFail}
            isSuccess={isSuccess}
          />
        )
      case 20:
        return (
          <D20
            id="d20"
            result={'' + result}
            isCriticalFail={isCriticalFail}
            isSuccess={isSuccess}
          />
        )
      default:
        return null
    }
  }

  return <DiceContainer>{renderDiceFace()}</DiceContainer>
}

export default Dice
