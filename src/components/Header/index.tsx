import { useState } from 'react'
import { History, XCircle } from 'lucide-react'
import {
  Container,
  ImageContainer,
  HistoryArea,
  HistoryContent,
  ActionHeader,
} from './styled'
import Title from '../Title'
import Drawer from '../../components/Drawer'
import NotificationLine from '../../components/HistoryLine'
import { useRollHistory } from '../../utils/contexts/RollHistoryContext'
import Button from '../Button'

const Header = () => {
  const { history } = useRollHistory()

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }
  return (
    <Container>
      <ImageContainer>
        <img src="/images/logodr.png" alt="logo" />
      </ImageContainer>
      <Title text="DiceRoller" textColor="#9d5839" icon={null} />
      <ActionHeader onClick={toggleDrawer}>
        <Button>
          <span>Histórico</span>
          <History size={32} color="#9d5839" />
        </Button>
      </ActionHeader>

      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <HistoryArea>
          <Title
            noPadding={false}
            noMargin
            text="Histórico"
            icon={<XCircle size={32} color="#9d5839" onClick={toggleDrawer} />}
          />
          <HistoryContent>
            {history.map((roll, index) => (
              <NotificationLine
                key={index}
                text={`${roll.dice} - ${
                  roll.result
                } - ${roll.timestamp.toLocaleString()}`}
              />
            ))}
          </HistoryContent>
        </HistoryArea>
      </Drawer>
    </Container>
  )
}

export default Header
