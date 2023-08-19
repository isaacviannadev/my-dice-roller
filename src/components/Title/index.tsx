import { TitleContainer, IconContainer } from './styled'

export type TitleProps = {
  text: string
  icon: React.ReactNode
  noPadding?: boolean
  noMargin?: boolean
} & React.HTMLAttributes<HTMLDivElement>

const Title = ({
  text,
  icon,
  noPadding = true,
  noMargin = false,
}: TitleProps) => (
  <TitleContainer noPadding={noPadding} noMargin={noMargin}>
    <h2>{text}</h2>
    <IconContainer>{icon}</IconContainer>
  </TitleContainer>
)

export default Title
