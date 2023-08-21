import styled from 'styled-components'
import { TitleProps } from '.'
import { media } from '../../utils/helpers'

type TitleContainerProps = Pick<
  TitleProps,
  'noPadding' | 'noMargin' | 'textColor'
>

export const TitleContainer = styled.div<TitleContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ noPadding }) => (noPadding ? '0' : '0 1rem')};
  color: ${({ textColor }) => textColor || 'inherit'};

  h2 {
    margin: ${({ noMargin }) => (noMargin ? '0' : '0 0 1rem')};
    font-size: 3rem;
    ${media.sm} {
      font-size: 3.6rem;
    }
  }
`

export const IconContainer = styled.div``
