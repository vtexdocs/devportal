import { Box, Button, Input, Text } from '@vtex/brand-ui'
import { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import useClickOutside from 'utils/hooks/useClickOutside'

import styles from './styles'
export interface ModalProps {
  modal: boolean
  position?: {
    posX: number
    posY: number
  }
}

const FeedBackModal = ({
  modalPos,
  feedBackSelect,
  changeModalPos,
  changeFeedBackSelected,
}: {
  modalPos: ModalProps | undefined
  feedBackSelect: boolean | undefined
  changeModalPos: Dispatch<SetStateAction<ModalProps | undefined>>
  changeFeedBackSelected: Dispatch<SetStateAction<boolean | undefined>>
}) => {
  const cardRef = useRef<HTMLDivElement>()

  const closeModal = () => {
    document.getElementsByTagName('body')[0].classList.remove('modal-open')
    changeModalPos({ modal: false })
    changeFeedBackSelected(feedBackSelect)
  }

  useEffect(() => {
    document.getElementsByTagName('body')[0].classList.add('modal-open')
  }, [])

  useClickOutside(cardRef, changeModalPos)
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
        <h2>{modalPos?.position?.posX}</h2>
      </Box>
    </Box>
  )
}

export default FeedBackModal
