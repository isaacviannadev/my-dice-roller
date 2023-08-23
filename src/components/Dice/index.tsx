import { D4, D6, D8, D10, D12, D20 } from '../../assets/svgss'
import styled, { css } from 'styled-components'
import { DiceFace } from './styled'

export type DiceProps = {
  id: string
  sides: number
  result: string
  isCriticalFail?: boolean
  isSuccess?: boolean
  animate?: boolean
}

type DiceContainerProps = Pick<DiceProps, 'isCriticalFail' | 'isSuccess'>

const DiceContainer = styled.div<DiceContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  filter: drop-shadow(0px 8px 4px rgba(0, 0, 0, 0.5));
  position: relative;

  &::before {
    content: '';
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
    filter: blur(1rem);
  }

  ${({ isCriticalFail }) =>
    isCriticalFail &&
    css`
      &::before {
        display: block;
        background-color: #ff3e3e;
      }
    `};

  ${({ isSuccess }) =>
    isSuccess &&
    css`
      &::before {
        display: block;
        background-color: #5df093;
      }
    `};

  svg {
    width: 8rem;
    height: auto;
  }
`

const Dice = ({
  sides,
  result = '?',
  isCriticalFail = false,
  isSuccess = false,
}: DiceProps) => {
  const renderSVG = () => {
    switch (sides) {
      case 4:
        return <D4 />
      case 6:
        return <D6 />
      case 8:
        return <D8 />
      case 10:
        return <D10 />
      case 12:
        return <D12 />
      case 20:
        return <D20 />
      default:
        return null
    }
  }

  return (
    <DiceContainer isCriticalFail={isCriticalFail} isSuccess={isSuccess}>
      <DiceFace isCriticalFail={isCriticalFail} isSuccess={isSuccess}>
        <span>{result}</span>
        {renderSVG()}
      </DiceFace>
    </DiceContainer>
  )
}

export default Dice
