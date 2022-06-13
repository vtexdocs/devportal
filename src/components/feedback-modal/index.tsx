import { Box, Button, Input, Text } from '@vtex/brand-ui'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import useClickOutside from 'utils/hooks/useClickOutside'

import styles from './styles'
export interface ModalProps {
  modalToggle: boolean
  feedback?: boolean
  position?: {
    posX: number
    posY: number
  }
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

  const closeModal = () => {
    const feedback = modalState?.feedback
    document.getElementsByTagName('body')[0].classList.remove('modal-open')
    changeModalState({ modalToggle: false })
    changeFeedBack(feedback)
  }

  useEffect(() => {
    document.getElementsByTagName('body')[0].classList.add('modal-open')
  }, [])

  useClickOutside(cardRef, changeModalState)
  return (
    <Box sx={styles.container}>
      <Box ref={cardRef} sx={styles.box}>
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
        <h2>{modalState?.position?.posX}</h2>
        <h2>{modalState?.position?.posY}</h2>
      </Box>
    </Box>
  )
}

export default FeedBackModal
