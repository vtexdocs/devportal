import { Flex, Text, Link } from '@vtex/brand-ui'
import EditIcon from 'components/icons/edit-icon'
import LikeIcon from 'components/icons/like-icon'
import LikeSelectedIcon from 'components/icons/like-selected-icon'
import { useRef, useState } from 'react'
import { getMessages } from 'utils/get-messages'
import { setButtonStyle } from './functions'
import FeedbackModal, { ModalProps } from 'components/feedback-modal'

import styles from './styles'

const messages = getMessages()

const FeedbackSection = () => {
  const [feedback, changeFeedback] = useState<boolean>()
  const [modalState, changeModalState] = useState<ModalProps>({
    modalOpen: false,
  })
  const likeButton = useRef<HTMLElement>()
  const dislikeButton = useRef<HTMLElement>()

  const openModal = (choice: boolean) => {
    changeModalState({
      modalOpen: true,
      liked: choice,
    })
  }

  const urlToEdit =
    'https://github.com/vtexdocs/dev-portal-content/edit/main/docs/release-notes/assets-builder.md'

  return (
    <Flex sx={styles.container}>
      <Text sx={styles.question}>
        {feedback !== undefined
          ? messages['feedback_section.response']
          : messages['feedback_section.question']}
      </Text>
      <Flex sx={styles.likeContainer}>
        <Flex
          ref={likeButton}
          sx={setButtonStyle(feedback, modalState, true)}
          onClick={feedback === undefined ? () => openModal(true) : null}
        >
          {feedback === undefined || !feedback ? (
            <LikeIcon sx={styles.likeIcon} />
          ) : (
            <LikeSelectedIcon sx={styles.likeIcon} />
          )}
          <Text>{messages['feedback_section.positive']}</Text>
        </Flex>
        <Flex
          ref={dislikeButton}
          sx={setButtonStyle(feedback, modalState, false)}
          onClick={feedback === undefined ? () => openModal(false) : null}
        >
          {feedback === undefined || feedback ? (
            <LikeIcon sx={styles.dislikeIcon} />
          ) : (
            <LikeSelectedIcon sx={styles.dislikeIcon} />
          )}
          <Text>{messages['feedback_section.negative']}</Text>
        </Flex>
      </Flex>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={urlToEdit}
        sx={styles.editContainer}
      >
        <EditIcon sx={styles.editIcon} />
        <Text>{messages['feedback_section.edit']}</Text>
      </Link>
      {modalState.modalOpen ? (
        <FeedbackModal
          changeFeedBack={changeFeedback}
          changeModalState={changeModalState}
          modalState={modalState}
          chosenButtonRef={modalState.liked ? likeButton : dislikeButton}
        />
      ) : null}
    </Flex>
  )
}

export default FeedbackSection
