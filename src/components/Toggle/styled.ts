import styled, { css } from 'styled-components'
import { media } from '../../utils/helpers'

type ToggleSlideProps = {
  activeIndex: number
  itemsLength: number
}

export const StyledToggle = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding: 0 0.6rem;

  background-color: #ededed;
  border-radius: 80px;

  z-index: 1;
`

export const ToggleItem = styled.button<ToggleSlideProps>`
  ${({ itemsLength }) => css`
    /* width: calc(100% / ${itemsLength}); */
    width: 100%;
    padding: 0.4rem 1rem;
    transition: all 0.2s ease-in-out;
    color: var(--brand-secondary);
    font-weight: normal;
    font-size: 1.8rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &.active {
      color: var(--brand-white);
      font-weight: 600;
    }

    &:disabled {
      color: #ccc;
      cursor: not-allowed;
    }

    ${media.md} {
      font-size: 2rem;
    }
  `}
`

export const ToggleSlideDiv = styled.div`
  width: 100%;
  position: absolute;
  background-color: var(--brand-secondary);
  height: 3rem;
  border-radius: 2.4rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  transform-origin: center;

  z-index: -1;
`
