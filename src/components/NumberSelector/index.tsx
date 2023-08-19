import { useEffect, useState } from 'react'
import {
  QuantityContainer,
  QuantityButton,
  QuantityDisplay,
  ResetButton,
  QuantityWrapper,
} from './styled'

interface NumberSelectorProps {
  onChange: (quantity: number) => void
  initialQuantity?: number
  label?: string
  inline?: boolean
}

const NumberSelector = ({
  onChange,
  initialQuantity = 1,
  label = 'Quantidade de dados',
  inline = false,
}: NumberSelectorProps) => {
  const [quantity, setQuantity] = useState(initialQuantity)
  const [animate, setAnimate] = useState(false)

  const increment = () => {
    const newQuantity = quantity + 1
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

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500)
      return () => clearTimeout(timer)
    }
  }, [animate])

  return (
    <QuantityContainer inline={inline}>
      <p>{label}</p>
      <QuantityWrapper>
        <QuantityButton onClick={decrement}>-</QuantityButton>
        <QuantityDisplay animate={animate}>{quantity}</QuantityDisplay>
        <QuantityButton onClick={increment}>+</QuantityButton>
      </QuantityWrapper>
      <ResetButton onClick={reset}>Resetar</ResetButton>
    </QuantityContainer>
  )
}

export default NumberSelector
