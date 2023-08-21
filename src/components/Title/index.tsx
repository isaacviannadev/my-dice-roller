import { TitleContainer, IconContainer } from './styled'

export type TitleProps = {
  text: string
  icon: React.ReactNode
  textColor?: string
  noPadding?: boolean
  noMargin?: boolean
} & React.HTMLAttributes<HTMLDivElement>

const Title = ({
  text,
  icon,
  textColor,
  noPadding = true,
  noMargin = true,
  ...rest
}: TitleProps) => (
  <TitleContainer
    noPadding={noPadding}
    noMargin={noMargin}
    textColor={textColor}
    {...rest}
  >
    <h2>{text}</h2>
    <IconContainer>{icon}</IconContainer>
  </TitleContainer>
)

export default Title
