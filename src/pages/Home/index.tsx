import { useContext, useEffect, useState } from 'react'
import Dice from '../../components/Dice'
import { DiceContext } from '../../utils/contexts/DiceContext'
import { useRollHistory } from '../../utils/contexts/RollHistoryContext'

import {
  HomeContainer,
  DiceLine,
  DiceButton,
  MenuArea,
  DiceResults,
  ResultsWrapper,
  SettingsWrapper,
  SelectionWrapper,
  HistoryArea,
  HistoryContent,
} from './styled'
import Toggle from '../../components/Toggle'
import NumberSelector from '../../components/NumberSelector'
import Title from '../../components/Title'
import { Dices, Sliders, History } from 'lucide-react'
import Drawer from '../../components/Drawer'
import Button from '../../components/Button'

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
  const { history } = useRollHistory()
  const [diceActive, setDiceActive] = useState(20)
  const [quantity, setQuantity] = useState(1)
  const [difficult, setDifficult] = useState(0)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const handleRollClick = () => {
    rollMultipleDice('selected', diceActive, quantity)
  }

  const isSuccess = (result: number) => {
    if (difficult === 0) return diceActive === result

    return result >= difficult
  }

  const toggleItems = DiceSet.map((side) => ({
    text: `D-${side.sides}`,
    id: side.id,
    active: side.sides === 20 ? true : false,
    action: () => setDiceActive(side.sides),
  }))

  useEffect(() => {
    setDifficult(0)
    clearResults('selected')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diceActive])

  return (
    <HomeContainer>
      <h1>Dice Roller</h1>

      <SelectionWrapper>
        <ResultsWrapper>
          <Title text="Resultados" icon={<Dices size={64} color="#9d5839" />} />
          <DiceResults>
            {results.selected?.map((result, index) => (
              <Dice
                key={index}
                id={'' + result}
                result={result + ''}
                sides={diceActive}
                isCriticalFail={result === 1}
                isSuccess={isSuccess(result)}
              />
            ))}
          </DiceResults>
        </ResultsWrapper>

        <MenuArea>
          <SettingsWrapper>
            <Title
              text="Configurações"
              icon={<Sliders size={32} color="#9d5839" />}
            />

            <NumberSelector
              inline
              initialQuantity={1}
              onChange={(newQuantity) => setQuantity(newQuantity)}
            />
            <NumberSelector
              inline
              initialActive={false}
              label="Dificuldade"
              initialQuantity={0}
              maxQuantity={diceActive}
              onChange={(newDifficult) => setDifficult(newDifficult)}
            />
            <Button onClick={toggleDrawer}>
              <span>Ver Histórico</span>
              <History size={24} color="#9d5839" />
            </Button>
          </SettingsWrapper>

          <Toggle items={toggleItems} />

          <DiceLine>
            {DiceSet.map((side) => (
              <DiceButton
                disabled={side.sides !== diceActive}
                key={side.id}
                onClick={handleRollClick}
              >
                <Dice id={side.id} result="Rolar" sides={side.sides} />
              </DiceButton>
            ))}
          </DiceLine>
        </MenuArea>
      </SelectionWrapper>

      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <HistoryArea>
          <Title
            noPadding={false}
            text="Histórico"
            icon={<History size={32} color="#9d5839" />}
          />
          <HistoryContent>
            {history.map((roll, index) => (
              <div key={index}>
                <span>
                  {roll.dice} - {roll.result} -{' '}
                  {roll.timestamp.toLocaleString()}
                </span>
              </div>
            ))}
          </HistoryContent>
        </HistoryArea>
      </Drawer>
    </HomeContainer>
  )
}

export default Home
