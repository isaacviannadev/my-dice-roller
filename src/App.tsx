import styled, { keyframes } from 'styled-components'
import Home from './pages/Home'
import { media } from './utils/helpers'

const candleFlicker = keyframes`
  0% { background-color: rgba(248, 142, 43, 0.6); }
  25% { background-color: rgba(248, 142, 43, 0.4); }
  50% { background-color: rgba(248, 142, 43, 0.8); }
  75% { background-color: rgba(248, 142, 43, 0.4); }
  85% { background-color: rgba(248, 142, 43, 0.4); }
  100% { background-color: rgba(248, 142, 43, 0.6); }
`
const AppContainer = styled.div`
  height: 100%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -10rem;
    right: -10rem;
    width: 20rem;
    height: 20rem;
    animation: ${candleFlicker} 3s infinite;
    filter: blur(10rem);
    border-radius: 50%;
    z-index: -1;
  }

  ${media.md} {
    &::before {
      bottom: -20rem;
      right: -20rem;
      width: 40rem;
      height: 40rem;
    }
  }
`

function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  )
}

export default App
