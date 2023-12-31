import styled, { css, keyframes } from 'styled-components'
import { media } from '../../utils/helpers'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  height: 100%;
  max-width: 144rem;
  padding: 1rem;
  padding-bottom: 3rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  ${media.md} {
    gap: 2rem;
    padding: 2rem;
    padding-top: 0;
    padding-bottom: 4rem;
  }
`
export const SelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 1rem;

  ${media.md} {
    gap: 2rem;

    flex-direction: row;
  }
`

export const MenuArea = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  align-items: center;
  width: 100%;

  ${media.md} {
    max-width: 50rem;
    gap: 2rem;
    height: 100%;
    flex-direction: column;
  }
`

export const DiceLine = styled.div`
  display: flex;

  width: 100%;
  gap: 1rem;
`

export const DiceButton = styled.button`
  background-color: #e3e3e3;
  border: none;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  height: 100%;

  &:first-of-type {
    width: 100%;
  }

  span {
    display: block;
    text-align: center;
    color: #251713;
    font-size: 4rem;
    border: 2px solid var(--brand-secondary);
    border-radius: 5px;
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &:active {
    background-color: var(--brand-primary);

    > div div {
      transform: scale(1.1);
      background-color: var(--brand-secondary);
    }
  }

  ${media.md} {
    &:hover:not(:disabled) {
      background-color: var(--brand-primary);
      box-shadow: var(--shadow-lg);
    }
  }
`

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`

export const Flutuante = styled.div<{ insightsVisible: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  ${({ insightsVisible }) =>
    insightsVisible
      ? css`
          animation: ${slideUp} 0.3s ease forwards;
          bottom: 0;
        `
      : css`
          animation: ${slideDown} 0.3s ease forwards;
          bottom: 0;
        `}
`

export const CloseFlutuante = styled.button<{
  isVisible: boolean
  type: 'open' | 'close'
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  width: 3rem;
  height: 3rem;

  ${({ type }) =>
    type === 'close'
      ? css`
          top: -4rem;
          right: 1rem;
        `
      : css`
          bottom: 1rem;
          right: 1rem;
        `}

  ${({ isVisible }) =>
    isVisible
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}


  background-color: var(--brand-primary);
  border-radius: 50%;
  border: 2px solid var(--brand-secondary);
  box-shadow: var(--shadow-md);

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--brand-secondary);
    box-shadow: var(--shadow-lg);
  }
`

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;
`

export const DiceResults = styled(ResultsWrapper)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  border-radius: var(--border-radius-lg);
  border: 2px solid var(--brand-secondary);
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #9d5839 url('/images/board.avif') no-repeat center center;
    background-size: cover;
    background-blend-mode: overlay;
    filter: brightness(0.9);
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 1) inset;

    z-index: -1;
  }
`

export const SettingsWrapper = styled(ResultsWrapper)`
  height: fit-content;
  margin-bottom: 4rem;

  ${media.md} {
    margin-bottom: 0;
  }
`

export const DiceSelector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const TitleToggle = styled.span`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  width: 100%;
  color: var(--brand-primary);
  text-align: center;
  width: 100%;

  ${media.md} {
    font-size: 2rem;
  }
`
