import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type DrawerContainerProps = Pick<ButtonProps, 'size'>

const crossSize = {
  small: css`
    height: 2rem;
    font-size: 1rem;
  `,
  medium: css`
    height: 5rem;
    font-size: 1.6rem;
  `,
  large: css`
    height: 7rem;
    font-size: 2rem;
  `,
}

export const StyledButton = styled.button<DrawerContainerProps>`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  align-items: center;
  width: 100%;
  ${({ size }) => crossSize[size || 'medium']};
  border: 1px solid var(--brand-secondary);
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--brand-secondary);
`
