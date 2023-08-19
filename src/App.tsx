import { styled } from 'styled-components'
import Home from './pages/Home'

const AppContainer = styled.div`
  height: 100%;
  padding: 2rem;
`

function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  )
}

export default App
