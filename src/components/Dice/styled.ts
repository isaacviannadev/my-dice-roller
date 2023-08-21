import styled, { css } from 'styled-components'

type DiceProps = {
  isCriticalFail?: boolean
  isSuccess?: boolean
}

export const DiceFace = styled.div<DiceProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  cursor: pointer;
  color: var(--brand-white);
  position: relative;

  &::before,
  &::after {
    content: '';
    display: none;
    position: absolute;
    width: 4rem;
    height: 4rem;
    top: 0;
    right: 0;
    border-radius: 50%;
    background-color: transparent;
    z-index: 1000;
  }

  ${({ isCriticalFail }) =>
    isCriticalFail &&
    css`
      &::before {
        display: block;
        background: url('/images/falhou.png') no-repeat center center;
        background-size: cover;
      }
    `};

  ${({ isSuccess }) =>
    isSuccess &&
    css`
      &::after {
        display: block;
        background: url('/images/aprovado.png') no-repeat center center;
        background-size: cover;
      }
    `};

  transition: all 0.2s ease-in-out;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    margin: 0;

    color: #000;
  }
`
