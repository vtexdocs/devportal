import { Box, Button, Input, Text, Icon } from '@vtex/brand-ui'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import useClickOutside from 'utils/hooks/useClickOutside'

import { setModalPosition } from './functions'
import styles from './styles'
export interface ModalProps {
  modalToggle: boolean
  feedback?: boolean
}

const FeedBackModal = ({
  modalState,
  changeModalState,
  changeFeedBack,
}: {
  modalState: ModalProps
  changeModalState: Dispatch<SetStateAction<ModalProps>>
  changeFeedBack: Dispatch<SetStateAction<boolean | undefined>>
}) => {
  const cardRef = useRef<HTMLDivElement>()
  const { body, documentElement } = document

  const closeModal = () => {
    const feedback = modalState?.feedback
    const scrollTop = body.getBoundingClientRect().top * -1

    body.classList.remove('modal-open')
    documentElement.scrollTop = scrollTop
    body.style.removeProperty('top')

    changeModalState({ modalToggle: false })
    changeFeedBack(feedback)
  }

  useEffect(() => {
    body.style.top = `-${documentElement.scrollTop}px`
    body.classList.add('modal-open')
  }, [])

  useClickOutside(cardRef, changeModalState)
  return (
    <Box sx={styles.container}>
      <Box ref={cardRef} sx={setModalPosition(modalState)}>
        <Box sx={styles.card}>
          <Text>Leave a comment</Text>
          <Input sx={styles.input} id="feedback-modal-input" label="" />
          <Button
            onClick={() => closeModal()}
            sx={styles.button}
            variant="secondary"
          >
            send feedback
          </Button>
        </Box>
        <Icon
          sx={styles.arrow}
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {' '}
          <path
            d="M10.8432 12.3275C10.4448 12.8914 9.60821 12.8914 9.20976 12.3275L0.500234 6.7935e-05L19.5527 6.56171e-05L10.8432 12.3275Z"
            fill="white"
          />
        </Icon>
      </Box>
    </Box>
  )
}

export default FeedBackModal
