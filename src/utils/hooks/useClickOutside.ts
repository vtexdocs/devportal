import { useEffect, MutableRefObject, SetStateAction, Dispatch } from 'react'

export default function useClickOutside(
  ref: MutableRefObject<HTMLDivElement | undefined>,
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
        document.getElementsByTagName('body')[0].classList.remove('modal-open')
        toggleModal(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.addEventListener('mousedown', handleClickOutside)
    }
  })
}
