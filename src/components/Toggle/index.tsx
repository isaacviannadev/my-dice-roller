import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { StyledToggle, ToggleItem, ToggleSlideDiv } from './styled'

export type ToggleItemProps = {
  text: string
  id: string
  active: boolean
  action?: () => void
  disabled?: boolean
}

export type ToggleProps = {
  items: ToggleItemProps[]
  filteredData?: (arg: string) => void
}

export const Toggle = ({ items, filteredData }: ToggleProps) => {
  const toggleBar = useRef<HTMLDivElement>(null)
  const toggleItemRefs = useRef<Array<HTMLButtonElement | null>>([])
  const toggleSlide = useRef<HTMLDivElement>(null)
  const activeIndex = items.findIndex((item) => item.active)
  const [isActive, setIsActive] = useState(activeIndex || 0)

  const handleClick = (index: number) => {
    setIsActive(index)
    items[index].action?.()
    filteredData && filteredData(items[index].id)
  }

  useLayoutEffect(() => {
    const updateSizeAndPosition = () => {
      filteredData && filteredData(items[isActive].id)

      const activeItemRef = toggleItemRefs.current[isActive]
      const toggleSlideElement = toggleSlide.current
      const toggleBarElement = toggleBar.current

      if (activeItemRef && toggleSlideElement && toggleBarElement) {
        const activeItemRect = activeItemRef.getBoundingClientRect()
        const toggleBarRect = toggleBarElement.getBoundingClientRect()

        const slideWidth = activeItemRect.width - 8
        const slideLeft = activeItemRect.left - toggleBarRect.left

        toggleSlideElement.style.transform = `translateX(${slideLeft}px)`
        toggleSlideElement.style.width = `${slideWidth}px`
      }
    }

    updateSizeAndPosition()

    window.addEventListener('resize', updateSizeAndPosition)

    return () => {
      window.removeEventListener('resize', updateSizeAndPosition)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive])

  return (
    <StyledToggle ref={toggleBar}>
      {items.map((item, index) => (
        <ToggleItem
          ref={(element) => (toggleItemRefs.current[index] = element)}
          id={item.id}
          key={index + item.id}
          onClick={() => handleClick(index)}
          className={isActive === index ? 'active' : ''}
          disabled={item.disabled}
        >
          {item.text}
        </ToggleItem>
      ))}
      {items[activeIndex] && (
        <ToggleSlideDiv
          ref={toggleSlide}
          id={`slideInActiveIndex-${isActive}`}
        />
      )}
    </StyledToggle>
  )
}

export default Toggle
