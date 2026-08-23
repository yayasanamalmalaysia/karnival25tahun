import { useEffect, useState } from 'react'

const calculate = (target) => {
  const distance = Math.max(0, new Date(target).getTime() - Date.now())
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
    ended: distance === 0,
  }
}

export function useCountdown(target) {
  const [countdown, setCountdown] = useState(() => calculate(target))

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(calculate(target)), 1000)
    return () => window.clearInterval(timer)
  }, [target])

  return countdown
}
