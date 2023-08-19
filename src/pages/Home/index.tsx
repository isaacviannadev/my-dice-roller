import { useContext, useEffect, useState } from 'react'
import Dice from '../../components/Dice'
import { DiceContext } from '../../utils/contexts/DiceContext'
import {
  HomeContainer,
  DiceLine,
  DiceButton,
  MenuArea,
  DiceResults,
  ResultsWrapper,
} from './index.styled'
import Toggle from '../../components/Toggle'
import DiceQuantitySelector from '../../components/DiceQuantity'

const DiceSet = [
  { id: 'd4', sides: 4 },
  { id: 'd6', sides: 6 },
  { id: 'd8', sides: 8 },
  { id: 'd10', sides: 10 },
  { id: 'd12', sides: 12 },
  { id: 'd20', sides: 20 },
]

function Home() {
  const { results, rollMultipleDice, clearResults } = useContext(DiceContext)

  const [diceActive, setDiceActive] = useState(20)
  const [quantity, setQuantity] = useState(1)

  const handleRollClick = () => {
    rollMultipleDice('selected', diceActive, quantity)
  }

  const toggleItems = DiceSet.map((side) => ({
    text: `D-${side.sides}`,
    id: side.id,
    active: side.sides === 20 ? true : false,
    action: () => setDiceActive(side.sides),
  }))

  useEffect(() => {
    clearResults('selected')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diceActive])

  return (
    <HomeContainer>
      <h1>Dice Roller</h1>

      <MenuArea>
        <Toggle items={toggleItems} />
      </MenuArea>

      <DiceQuantitySelector
        initialQuantity={1}
        onChange={(newQuantity) => setQuantity(newQuantity)}
      />

      <DiceLine>
        {DiceSet.map((side) => (
          <DiceButton
            disabled={side.sides !== diceActive}
            key={side.id}
            onClick={handleRollClick}
          >
            <Dice id={side.id} result={`D-${side.sides}`} sides={side.sides} />
            <span>Rolar !</span>
          </DiceButton>
        ))}
      </DiceLine>

      <ResultsWrapper>
        <h2>Resultados</h2>
        <DiceResults>
          {results.selected?.map((result, index) => (
            <Dice
              key={index}
              id={'' + result}
              result={result + ''}
              sides={diceActive}
            />
          ))}
        </DiceResults>
      </ResultsWrapper>
    </HomeContainer>
  )
}

export default Home
