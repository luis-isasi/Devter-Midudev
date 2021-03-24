import { useState, useEffect } from 'react'

const DATE_UNITS: [Intl.RelativeTimeFormatUnit, number][] = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
]

const getDateDiffs = (timeStamp) => {
  const now = Date.now()
  const elapsed = (timeStamp - now) / 1000

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.round(elapsed / +secondsInUnit)
      return { value, unit }
    }
  }
}

const useTimeAgo = (timeStamp) => {
  const [timeAgo, setTimeAgo] = useState(() => getDateDiffs(timeStamp))

  useEffect(() => {
    const timeout = setInterval(() => {
      const newTimeAgo = getDateDiffs(timeStamp)

      setTimeAgo(newTimeAgo)
    }, 5000)

    return () => clearInterval(timeout)
  }, [timeStamp])

  const rtf = new Intl.RelativeTimeFormat('es', { style: 'short' })

  const { value, unit } = timeAgo

  return rtf.format(value, unit)
}

export default useTimeAgo
