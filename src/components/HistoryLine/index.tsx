import { HistoryLineContainer } from './styled'

type NotificationLineProps = {
  text: string
}

export const NotificationLine = ({ text }: NotificationLineProps) => {
  return <HistoryLineContainer>{text}</HistoryLineContainer>
}

export default NotificationLine
