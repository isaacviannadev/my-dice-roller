import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const MenuArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 800px;
`

export const DiceLine = styled.div`
  display: flex;
  gap: 20px;
`

export const DiceButton = styled.button`
  background-color: #eee;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  span {
    margin-top: 10px;
    display: block;
    text-align: center;
    color: #666;
  }

  &:hover:not(:disabled) {
    background-color: #ddd;
    box-shadow: 0 0 10px #ddd;
    transform: scale(1.1);

    > div div {
      transform: scale(1.1);
      background-color: gray;

      span {
        color: #fff;
      }
    }
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`
