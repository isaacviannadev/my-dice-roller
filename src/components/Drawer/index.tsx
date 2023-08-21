import { Eraser } from 'lucide-react'
import Button from '../Button'
import { DrawerContainer } from './styled'
import { useRollHistory } from '../../utils/contexts/RollHistoryContext'
import { useRef } from 'react'
import { useOutsideClick } from '../../utils/hooks/useOutsideClick'

interface DrawerProps {
  open: boolean
  onClose?: () => void
  children?: React.ReactNode
}

const Drawer = ({ open, children, onClose }: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null)
  const { clearHistory } = useRollHistory()

  const handleOutsideClick = () => {
    if (open && onClose) onClose()
  }

  useOutsideClick(drawerRef, handleOutsideClick)

  return (
    <DrawerContainer open={open} ref={drawerRef}>
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
