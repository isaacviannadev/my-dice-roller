import { styled } from 'styled-components'
import Dice from './components/Dice'
import { useContext } from 'react'
import { DiceContext } from './utils/contexts/DiceContext'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const DiceLine = styled.div`
  display: flex;
  gap: 20px;
`

const DiceButton = styled.button`
  background-color: #eee;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ddd;
    box-shadow: 0 0 10px #ddd;
  }

  &:hover > div div {
    transform: scale(1.1);
    background-color: gray;

    span {
      color: #fff;
    }
  }

  &:hover *:last-child() {
    color: red;
  }

  span {
    margin-top: 10px;
    display: block;
    text-align: center;
    color: #666;
  }
`

const DiceSet = [
  { id: 'd4', sides: 4 },
  { id: 'd6', sides: 6 },
  { id: 'd8', sides: 8 },
  { id: 'd10', sides: 10 },
  { id: 'd12', sides: 12 },
  { id: 'd20', sides: 20 },
]

function App() {
  const { rollDice } = useContext(DiceContext)

  return (
    <AppContainer>
      <h1>Dice Roller</h1>
      <DiceLine>
        {DiceSet.map((side) => (
          <DiceButton
            key={side.id}
            onClick={() => rollDice(side.id, side.sides)}
          >
            <Dice id={side.id} sides={side.sides} />
            <span>{`D-${side.sides}`}</span>
          </DiceButton>
        ))}
      </DiceLine>
    </AppContainer>
  )
}

export default App
