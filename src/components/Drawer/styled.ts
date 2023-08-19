import styled from 'styled-components'

export const DrawerContainer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 350px;
  padding: 0;
  height: 100%;
  background-color: #f0f0f0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;
  overflow-y: auto;
  box-shadow: var(--shadow-right);

  z-index: 1000;

  footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1rem;

    button {
      width: 100%;
      height: 5rem;
      border: 1px solid var(--brand-secondary);
      text-transform: uppercase;
      font-size: 1.6rem;
      font-weight: 700;
      letter-spacing: 2px;
      color: var(--brand-secondary);
    }
  }
`
