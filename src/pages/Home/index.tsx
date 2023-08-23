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
  SettingsWrapper,
  SelectionWrapper,
  TitleToggle,
  DiceSelector,
} from './styled'
import Toggle from '../../components/Toggle'
import Header from '../../components/Header'
import NumberSelector from '../../components/NumberSelector'
import Title from '../../components/Title'
import { Dices, Sliders } from 'lucide-react'
import useBreakpoint from '../../utils/hooks/useBreakpoint'

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
  const [diceActive, setDiceActive] = useState(10)
  const [quantity, setQuantity] = useState(1)
  const [difficult, setDifficult] = useState(0)
  const [expand, setExpand] = useState(true)

  const currentBreakpoint = useBreakpoint()

  const toggleExpand = () => {
    setExpand(!expand)
  }

  const handleRollClick = () => {
    rollMultipleDice('selected', diceActive, quantity, difficult)
  }

  const isSuccess = (result: number) => {
    if (difficult === 0) return diceActive === result

    return result >= difficult && result !== 1
  }

  const toggleItems = DiceSet.map((side) => ({
    text: `D-${side.sides}`,
    id: side.id,
    active: side.sides === 10 ? true : false,
    action: () => setDiceActive(side.sides),
  }))

  const mobileIconSize = currentBreakpoint === 'xs' ? 28 : 48

  useEffect(() => {
    clearResults('selected')
    setDifficult(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [diceActive])

  return (
    <HomeContainer>
      <Header />
      <SelectionWrapper>
        <ResultsWrapper>
          <Title
            text="Resultados"
            icon={<Dices size={mobileIconSize} color="#9d5839" />}
          />
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
              onClick={toggleExpand}
              text="Configurações"
              icon={<Sliders size={mobileIconSize} color="#9d5839" />}
            />

            {expand && (
              <>
                <DiceSelector>
                  <TitleToggle>Selecione o dado</TitleToggle>
                  <Toggle items={toggleItems} />
                </DiceSelector>

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
              </>
            )}
          </SettingsWrapper>

          <DiceLine>
            {DiceSet.map(
              (side) =>
                side.sides === diceActive && (
                  <DiceButton
                    disabled={side.sides !== diceActive}
                    key={side.id}
                    onClick={handleRollClick}
                  >
                    <span>Rolar Dados</span>
                  </DiceButton>
                ),
            )}
          </DiceLine>
        </MenuArea>
      </SelectionWrapper>
    </HomeContainer>
  )
}

export default Home
