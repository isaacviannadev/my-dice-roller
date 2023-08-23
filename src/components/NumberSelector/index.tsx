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
import { Eye, EyeOff, Minus, Plus } from 'lucide-react'
import useBreakpoint from '../../utils/hooks/useBreakpoint'

interface NumberSelectorProps {
  onChange: (quantity: number) => void
  initialQuantity?: number
  maxQuantity?: number
  label?: string
  inline?: boolean
  active?: boolean
  initialActive?: boolean
  resetField?: () => void
}

const NumberSelector = ({
  onChange,
  initialQuantity = 1,
  label = 'Quantidade de dados',
  inline = false,
  initialActive = true,
  maxQuantity = 99,
  resetField,
}: NumberSelectorProps) => {
  const [quantity, setQuantity] = useState(initialQuantity)
  const [animate, setAnimate] = useState(false)
  const [isActive, setIsActive] = useState(initialActive)

  const currentBreakpoint = useBreakpoint()

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
      onChange(initialQuantity)
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

  const iconSize = currentBreakpoint === 'xs' ? 18 : 20

  return (
    <QuantityContainer inline={inline}>
      <FunctionName onClick={toggleActive}>
        <p>{label}</p>
        {!initialActive &&
          (isActive ? (
            <Eye size={iconSize} color="#9d5839" />
          ) : (
            <EyeOff size={iconSize} color="#d1bdb3" />
          ))}
      </FunctionName>
      {isActive ? (
        <QuantityWrapper>
          <QuantityButton
            onClick={decrement}
            disabled={quantity <= initialQuantity}
          >
            <Minus size={iconSize} color="#9d5839" />
          </QuantityButton>
          <QuantityDisplay animate={animate}>{quantity}</QuantityDisplay>
          <QuantityButton
            onClick={increment}
            disabled={quantity >= maxQuantity}
          >
            <Plus size={iconSize} color="#9d5839" />
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
