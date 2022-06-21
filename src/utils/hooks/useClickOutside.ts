import { useEffect, MutableRefObject, SetStateAction, Dispatch } from 'react'

export default function useClickOutside(
  ref: MutableRefObject<HTMLElement | undefined>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  openModal: Dispatch<SetStateAction<any>>
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const { body, documentElement } = document
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        openModal({ modalToggle: false })
        const scrollTop = body.getBoundingClientRect().top * -1
        body.classList.remove('modal-open')
        documentElement.scrollTop = scrollTop
        body.style.removeProperty('top')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
}
