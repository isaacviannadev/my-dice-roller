import { TitleContainer, IconContainer } from './styled'

export type TitleProps = {
  text: string
  icon: React.ReactNode
  noPadding?: boolean
} & React.HTMLAttributes<HTMLDivElement>

const Title = ({ text, icon, noPadding = true }: TitleProps) => (
  <TitleContainer noPadding={noPadding}>
    <h2>{text}</h2>
    <IconContainer>{icon}</IconContainer>
  </TitleContainer>
)

export default Title
