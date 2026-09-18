import { useEffect, useState } from 'react'

export default function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const check = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
    setIsTouch(check)
  }, [])

  return isTouch
}
