import styled from 'styled-components'
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
  justify-content: center;
  align-items: center;
  width: 100%;
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
    display: block;
    text-align: center;
    color: var(--brand-black);
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

      span {
        color: var(--brand-light);
      }
    }
  }

  ${media.md} {
    &:hover:not(:disabled) {
      background-color: var(--brand-primary);
      box-shadow: var(--shadow-lg);
    }
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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  border: 2px solid var(--brand-secondary);

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
    filter: brightness(0.8);
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
