import { useEffect, useState } from 'react'
import {
  QuantityContainer,
  QuantityButton,
  QuantityDisplay,
  ResetButton,
  QuantityWrapper,
} from './styled'

interface DiceQuantitySelectorProps {
  onChange: (quantity: number) => void
  initialQuantity?: number
  label?: string
}

const DiceQuantitySelector = ({
  initialQuantity = 1,
  label = 'Quantidade de dados',
  onChange,
}: DiceQuantitySelectorProps) => {
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
    <QuantityContainer>
      <h2>{label}</h2>
      <QuantityWrapper>
        <QuantityButton onClick={decrement}>-</QuantityButton>
        <QuantityDisplay animate={animate}>{quantity}</QuantityDisplay>
        <QuantityButton onClick={increment}>+</QuantityButton>
      </QuantityWrapper>
      <ResetButton onClick={reset}>Resetar</ResetButton>
    </QuantityContainer>
  )
}

export default DiceQuantitySelector
