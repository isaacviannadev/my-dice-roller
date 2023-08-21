import { useState, useEffect } from 'react'

import { breakpoints } from '../helpers'

const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState('xs')

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth

      if (width < breakpoints.sm) setCurrentBreakpoint('xs')
      else if (width < breakpoints.md) setCurrentBreakpoint('sm')
      else if (width < breakpoints.lg) setCurrentBreakpoint('md')
      else if (width < breakpoints.xl) setCurrentBreakpoint('lg')
      else setCurrentBreakpoint('xl')
    }

    updateBreakpoint()

    window.addEventListener('resize', updateBreakpoint)

    return () => {
      window.removeEventListener('resize', updateBreakpoint)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakpoints])

  return currentBreakpoint
}

export default useBreakpoint
