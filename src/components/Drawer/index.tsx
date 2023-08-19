import Button from '../Button'
import { DrawerContainer } from './styled'

interface DrawerProps {
  open: boolean
  onClose?: () => void
  children?: React.ReactNode
}

const Drawer = ({ open, children, onClose }: DrawerProps) => {
  return (
    <DrawerContainer open={open}>
      {children}
      <footer>
        <Button onClick={onClose}>
          <span>Fechar</span>
        </Button>
      </footer>
    </DrawerContainer>
  )
}

export default Drawer
