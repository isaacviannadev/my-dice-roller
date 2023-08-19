import { useEffect, useState } from 'react'
import {
  QuantityContainer,
  QuantityButton,
  QuantityDisplay,
  ResetButton,
  QuantityWrapper,
  OffMessage,
  FunctionName,
} from './styled'
import { Eye, EyeOff } from 'lucide-react'

interface NumberSelectorProps {
  onChange: (quantity: number) => void
  initialQuantity?: number
  maxQuantity?: number
  label?: string
  inline?: boolean
  active?: boolean
  initialActive?: boolean
}

const NumberSelector = ({
  onChange,
  initialQuantity = 1,
  label = 'Quantidade de dados',
  inline = false,
  initialActive = true,
  maxQuantity = 99,
}: NumberSelectorProps) => {
  const [quantity, setQuantity] = useState(initialQuantity)
  const [animate, setAnimate] = useState(false)
  const [isActive, setIsActive] = useState(initialActive)

  const increment = () => {
    const newQuantity = Math.min(maxQuantity, quantity + 1)
    setQuantity(newQuantity)
    onChange(newQuantity)
    setAnimate(!animate)
  }

  const decrement = () => {
    const newQuantity = Math.max(1, quantity - 1)
    setQuantity(newQuantity)
    onChange(newQuantity)
    setAnimate(!animate)
  }

  const reset = () => {
    setQuantity(initialQuantity)
    onChange(initialQuantity)
    setAnimate(!animate)
  }

  const toggleActive = () => {
    if (!initialActive) {
      setQuantity(initialQuantity)
      setIsActive(!isActive)
    }
  }

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500)
      return () => clearTimeout(timer)
    }
  }, [animate])

  useEffect(() => {
    setQuantity(initialQuantity)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxQuantity])

  return (
    <QuantityContainer inline={inline}>
      <FunctionName onClick={toggleActive}>
        <p>{label}</p>
        {!initialActive &&
          (isActive ? (
            <Eye size={20} color="#9d5839" />
          ) : (
            <EyeOff size={20} color="#d1bdb3" />
          ))}
      </FunctionName>
      {isActive ? (
        <QuantityWrapper>
          <QuantityButton
            onClick={decrement}
            disabled={quantity <= initialQuantity}
          >
            -
          </QuantityButton>
          <QuantityDisplay animate={animate}>{quantity}</QuantityDisplay>
          <QuantityButton
            onClick={increment}
            disabled={quantity >= maxQuantity}
          >
            +
          </QuantityButton>
          <ResetButton onClick={reset}>Resetar</ResetButton>
        </QuantityWrapper>
      ) : (
        <OffMessage>Desativado</OffMessage>
      )}
    </QuantityContainer>
  )
}

export default NumberSelector
