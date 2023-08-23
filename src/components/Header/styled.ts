import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: auto;

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    margin: auto;
  }
`

export const HistoryArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  border-radius: var(--border-radius-lg);
  background-color: transparent;
`
export const HistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 0.5rem;
  margin-bottom: 7rem;
  border-top: 1px solid var(--brand-secondary);
  border-bottom: 1px solid var(--brand-secondary);
  padding: 1rem;
  overflow-y: auto;
`
export const ActionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  white-space: nowrap;

  & button {
    border: none;
    gap: 1rem;
    padding: 0;

    span {
      margin-top: 0.5rem;
      color: var(--brand-tertiary);
    }
  }
`
