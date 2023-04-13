import { Box, Button, Textarea, Text, Icon, IconProps } from '@vtex/brand-ui'
import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import useClickOutside from 'utils/hooks/useClickOutside'
import { useIntl } from 'react-intl'

import { arrowDirectionStyle, modalPositionStyle } from './functions'
import styles from './styles'
export interface ModalProps {
  modalOpen: boolean
  liked?: boolean
}

const FeedBackModalArrow = (props: IconProps) => {
  return (
    <Icon
      {...props}
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
  )
}

const FeedBackModal = ({
  modalState,
  changeModalState,
  changeFeedBack,
  chosenButtonRef,
  onSubmit,
}: {
  modalState: ModalProps
  changeModalState: Dispatch<SetStateAction<ModalProps>>
  changeFeedBack: Dispatch<SetStateAction<boolean | undefined>>
  chosenButtonRef: MutableRefObject<HTMLElement | undefined>
  onSubmit: (comment: string) => Promise<void>
}) => {
  const cardRef = useRef<HTMLDivElement>()
  const { body, documentElement } = document
  const [comment, setComment] = useState('')
  const intl = useIntl()

  const closeModal = () => {
    const feedback = modalState?.liked
    const scrollTop = body.getBoundingClientRect().top * -1

    body.classList.remove('modal-open')
    documentElement.scrollTop = scrollTop
    body.style.removeProperty('top')

    changeModalState({ modalOpen: false })
    changeFeedBack(feedback)
  }

  const handleClick = async () => {
    onSubmit(comment)
    closeModal()
  }

  useEffect(() => {
    const scrollTop = body.getBoundingClientRect().top * -1
    body.style.top = `-${scrollTop}px`
    body.classList.add('modal-open')
  }, [])

  useClickOutside(cardRef, changeModalState)
  return (
    <Box sx={styles.container}>
      <Box
        ref={cardRef}
        sx={modalPositionStyle(chosenButtonRef.current) || styles.box}
      >
        <Box
          sx={
            arrowDirectionStyle(chosenButtonRef.current, 'card') || styles.card
          }
          data-cy="feedback-modal"
        >
          <Text sx={styles.title}>
            {intl.formatMessage({
              id: 'feedback_modal.title',
            })}
          </Text>
          <Textarea
            id="feedback-modal-input"
            sx={styles.textarea}
            label=""
            rows={7}
            value={comment}
            onChange={(e) => setComment(e.currentTarget.value)}
          />
          <Button
            onClick={async () => await handleClick()}
            sx={styles.button}
            variant="secondary"
          >
            {intl.formatMessage({
              id: 'feedback_modal.button',
            })}
          </Button>
        </Box>
        <FeedBackModalArrow
          sx={
            arrowDirectionStyle(chosenButtonRef.current, 'arrow') ||
            styles.arrow
          }
        />
      </Box>
    </Box>
  )
}

export default FeedBackModal
