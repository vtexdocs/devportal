import { useEffect, MutableRefObject, SetStateAction, Dispatch } from 'react'

export default function useClickOutside(
  ref: MutableRefObject<HTMLElement | undefined>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toggleModal: Dispatch<SetStateAction<any>>
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        toggleModal({ modalToggle: false })
        document.getElementsByTagName('body')[0].classList.remove('modal-open')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.addEventListener('mousedown', handleClickOutside)
    }
  })
}
