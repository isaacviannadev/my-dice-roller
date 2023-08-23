import { Roll } from '../contexts/RollHistoryContext'

export const breakpoints = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 1200,
  xl: 1440,
}

export const media = {
  xs: `@media only screen and (min-width: ${breakpoints.xs}px)`,
  sm: `@media only screen and (min-width: ${breakpoints.sm}px)`,
  md: `@media only screen and (min-width: ${breakpoints.md}px)`,
  lg: `@media only screen and (min-width: ${breakpoints.lg}px)`,
  xl: `@media only screen and (min-width: ${breakpoints.xl}px)`,
}

export const calculateInsights = ({
  difficulty,
  result,
}: Pick<Roll, 'difficulty' | 'result'>) => {
  const total = result.reduce((acc, curr) => acc + curr, 0)
  const criticalFails = result.filter((r) => r === 1).length
  const successes = result.filter((r) => r >= difficulty).length - criticalFails

  const highestRoll = Math.max(...result)
  const resultWithoutCriticalFails = result.filter((r) => r !== 1)
  const fails = resultWithoutCriticalFails.filter((r) => r < difficulty).length
  const lowestRoll =
    resultWithoutCriticalFails.length > 0
      ? Math.min(...resultWithoutCriticalFails)
      : 1
  const highestQuantity = result.filter((r) => r === highestRoll).length
  const lowestQuantity = result.filter((r) => r === lowestRoll).length

  return {
    total,
    successes,
    fails,
    criticalFails,
    highestRoll,
    lowestRoll,
    highestQuantity,
    lowestQuantity,
  }
}
