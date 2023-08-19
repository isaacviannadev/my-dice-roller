import { StyledButton } from './styled'

export type ButtonProps = {
  onClick?: () => void
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

export const Button = ({ onClick, children, size }: ButtonProps) => (
  <StyledButton onClick={onClick} size={size}>
    {children}
  </StyledButton>
)

export default Button
