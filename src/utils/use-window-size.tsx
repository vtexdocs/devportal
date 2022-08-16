import { useState, useEffect } from 'react'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState<{
    width?: number
    height?: number
  }>({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener('resize', handleResize)
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
  return windowSize
}

export default useWindowSize
