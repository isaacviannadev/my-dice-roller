import { useContext, useState } from 'react'
import Dice from '../../components/Dice'
import { DiceContext } from '../../utils/contexts/DiceContext'
import { HomeContainer, DiceLine, DiceButton, MenuArea } from './index.styled'
import Toggle from '../../components/Toggle'

const DiceSet = [
  { id: 'd4', sides: 4 },
  { id: 'd6', sides: 6 },
  { id: 'd8', sides: 8 },
  { id: 'd10', sides: 10 },
  { id: 'd12', sides: 12 },
  { id: 'd20', sides: 20 },
]

function Home() {
  const { rollDice } = useContext(DiceContext)

  const [diceActive, setDiceActive] = useState('d20')

  const toggleItems = DiceSet.map((side) => ({
    text: `D-${side.sides}`,
    id: side.id,
    active: side.sides === 20 ? true : false,
    action: () => setDiceActive(side.id),
  }))

  return (
    <HomeContainer>
      <h1>Dice Roller</h1>

      <MenuArea>
        <Toggle items={toggleItems} />
      </MenuArea>
      <DiceLine>
        {DiceSet.map((side) => (
          <DiceButton
            disabled={side.id !== diceActive}
            key={side.id}
            onClick={() => rollDice(side.id, side.sides)}
          >
            <Dice id={side.id} sides={side.sides} />
            <span>{`D-${side.sides}`}</span>
          </DiceButton>
        ))}
      </DiceLine>
    </HomeContainer>
  )
}

export default Home
