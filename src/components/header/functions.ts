import { SetStateAction } from 'react'

export const toggleHeader = (
  setLastScroll: (value: SetStateAction<number>) => void,
  lastScroll: number,
  header: HTMLElement | null | undefined
) => {
  if (header) {
    const height = header.children[0].clientHeight
    if (window.scrollY > height && window.scrollY > lastScroll) {
      header.style.top = `-${height}px`
    } else {
      header.style.top = '0'
    }
    setLastScroll(window.scrollY)
  }
}
