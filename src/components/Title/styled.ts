import styled from 'styled-components'
import { TitleProps } from '.'

type TitleContainerProps = Pick<TitleProps, 'noPadding' | 'noMargin'>

export const TitleContainer = styled.div<TitleContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ noPadding }) => (noPadding ? '0' : '0 1rem')};
`

export const IconContainer = styled.div`
  margin-right: 8px;
`
