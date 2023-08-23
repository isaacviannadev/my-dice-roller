import styled from 'styled-components'
import { media } from '../../utils/helpers'

export const DrawerContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0;
  height: 100%;
  background-color: #d2c2b3;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;
  box-shadow: var(--shadow-right);

  z-index: 1000;

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
  }

  ${media.sm} {
    width: 350px;
  }
`
