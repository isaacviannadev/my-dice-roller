import { keyframes, styled } from 'styled-components'

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const QuantityButton = styled.button`
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
`

export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const ResetButton = styled.button`
  background: none;
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
  padding: 5px 10px;
  font-weight: bold;
  font-size: 3rem;

  animation: ${(props) => (props.animate ? changeColorAnimation : 'none')} 0.5s
    linear;
  animation-iteration-count: ${(props) => (props.animate ? 1 : 0)};
`
