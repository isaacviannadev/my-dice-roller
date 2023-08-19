import { Eraser } from 'lucide-react'
import Button from '../Button'
import { DrawerContainer } from './styled'
import { useRollHistory } from '../../utils/contexts/RollHistoryContext'

interface DrawerProps {
  open: boolean
  onClose?: () => void
  children?: React.ReactNode
}

const Drawer = ({ open, children, onClose }: DrawerProps) => {
  const { clearHistory } = useRollHistory()

  return (
    <DrawerContainer open={open}>
      {children}
      <footer>
        <Button onClick={clearHistory}>
          <span>Apagar</span>
          <Eraser size={24} color="#9d5839" />
        </Button>
      </footer>
    </DrawerContainer>
  )
}

export default Drawer
