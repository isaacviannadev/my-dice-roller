import { keyframes, styled } from 'styled-components'
import { media } from '../../utils/helpers'

type NumberSelectorProps = {
  inline?: boolean
}

export const QuantityContainer = styled.div<NumberSelectorProps>`
  display: flex;
  flex-direction: ${({ inline }) => (inline ? 'row' : 'column')};
  width: 100%;
  align-items: center;
  justify-content: space-between;
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
    font-size: 1.5rem;
    font-weight: bold;
    width: 100%;
    color: var(--brand-primary);
  }

  ${media.md} {
    p {
      font-size: 2rem;
    }
  }
`

export const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 3rem;

  &:hover {
    background: #e0e0e0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${media.md} {
    width: 3rem;
    height: 3rem;
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

  margin-left: 1.4rem;

  ${media.md} {
    margin-left: 0;
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
  font-size: 2rem;
  width: fit-content;
  animation: ${(props) => (props.animate ? changeColorAnimation : 'none')} 0.5s
    linear;
  animation-iteration-count: ${(props) => (props.animate ? 1 : 0)};

  ${media.md} {
    font-size: 2rem;
  }
`
export const OffMessage = styled.span`
  text-align: right;
  opacity: 0.5;
  font-size: 1.4rem;
  font-style: italic;
  white-space: nowrap;

  ${media.md} {
    font-size: 2rem;
  }
`
