import styled from 'styled-components'

export const HistoryLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 0 1rem;
  border-radius: 2rem;
  background-color: var(--brand-primary);

  &:nth-child(odd) {
    background-color: var(--brand-secondary);
    color: var(--brand-white);
  }
`
