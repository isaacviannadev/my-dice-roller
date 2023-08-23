import styled from 'styled-components'

export const HistoryLineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: fit-content;
  padding: 0.8rem;
  border-radius: 1rem;
  background-color: var(--brand-light);
  border: 0.1rem solid var(--brand-secondary);
  transition: all 0.2s ease-in-out;

  &:nth-child(odd) {
    background-color: var(--brand-primary);
  }

  &:hover {
    box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.5);
  }
`
export const InsightDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;

  small {
    color: var(--brand-text);
  }

  span {
    color: var(--brand-text);
    font-weight: bold;

    small {
      color: var(--brand-secondary);
      font-weight: bold;
    }
  }
`

export const InsightsLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
