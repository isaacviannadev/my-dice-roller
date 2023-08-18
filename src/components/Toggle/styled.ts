import styled, { css } from 'styled-components'

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
  height: 34px;
  /* padding: 0 0.6rem; */

  background-color: #ededed;
  border-radius: 80px;

  z-index: 1;
`

export const ToggleItem = styled.button<ToggleSlideProps>`
  ${({ itemsLength }) => css`
    width: calc(100% / ${itemsLength});
    padding: 0.4rem 1rem;
    transition: all 0.2s ease-in-out;
    color: #777;
    font-weight: normal;
    font-size: 1.2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &.active {
      color: #e51b15;
      font-weight: 600;
    }

    &:disabled {
      color: #ccc;
      cursor: not-allowed;
    }
  `}
`

export const ToggleSlideDiv = styled.div`
  display: block;
  width: 90%;
  position: absolute;
  background-color: #fff;
  height: 2.6rem;
  border-radius: 2.4rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
  transform-origin: center;

  z-index: -1;
`
