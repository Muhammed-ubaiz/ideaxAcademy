import { useState } from 'react'

export default function useIsTouchDevice() {
  const [isTouch] = useState(
    () => window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window
  )

  return isTouch
}
