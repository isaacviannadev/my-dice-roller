import { keyframes, styled } from 'styled-components'

type NumberSelectorProps = {
  inline?: boolean
}

export const QuantityContainer = styled.div<NumberSelectorProps>`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? 'row' : 'column')};
  width: 100%;
  max-width: 140rem;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 1rem;
`

export const FunctionName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 24rem;

  p {
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
  }
`

export const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border-radius: 50%;
  width: 3.6rem;
  height: 3.6rem;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 1.8rem;

  &:hover {
    background: #e0e0e0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const ResetButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  white-space: nowrap;
  border: none;
  color: var(--brand-secondary);
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 1rem;
  cursor: pointer;

  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: var(--brand-tertiary);
  }
`
const changeColorAnimation = keyframes`
  0% { color: currentColor; }
  20% { color: #ff9900; }
`

export const QuantityDisplay = styled.span<{ animate: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  white-space: nowrap;
  font-size: 3rem;
  min-width: 5rem;

  animation: ${(props) => (props.animate ? changeColorAnimation : 'none')} 0.5s
    linear;
  animation-iteration-count: ${(props) => (props.animate ? 1 : 0)};
`
export const OffMessage = styled.span`
  text-align: right;
  opacity: 0.5;
  font-size: 2rem;
  font-style: italic;
  white-space: nowrap;
`
