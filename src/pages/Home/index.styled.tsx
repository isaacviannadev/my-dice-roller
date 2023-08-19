import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 20px;
`
export const SelectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 140rem;
  height: 100%;
  gap: 4rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export const MenuArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`

export const DiceLine = styled.div`
  display: flex;
  width: 100%;
  max-width: 140rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const DiceButton = styled.button`
  background-color: #e3e3e3;
  flex-grow: 1;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  span {
    margin-top: 1rem;
    display: block;
    text-align: center;
    color: inherit;
  }

  &:hover:not(:disabled) {
    background-color: var(--brand-primary);
    box-shadow: var(--shadow-sm);
    transform: scale(1.1);

    > div div {
      transform: scale(1.1);
      background-color: var(--brand-secondary);

      span {
        color: var(--brand-light);
      }
    }
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`

export const ResultsWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const DiceResults = styled(ResultsWrapper)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  border-radius: var(--border-radius-lg);

  background-color: var(--brand-secondary);
`

export const SettingsWrapper = styled(ResultsWrapper)`
  flex-direction: space-between;
  width: 100%;
`
