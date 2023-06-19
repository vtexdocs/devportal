import { Flex, Text, Link } from '@vtexdocs/brand-ui'
import EditIcon from 'components/icons/edit-icon'
import LikeIcon from 'components/icons/like-icon'
import LikeSelectedIcon from 'components/icons/like-selected-icon'
import { useRef, useState } from 'react'
import { getMessages } from 'utils/get-messages'
import { setButtonStyle } from './functions'
import FeedbackModal, { ModalProps } from 'components/feedback-modal'

import styles from './styles'

const messages = getMessages()

interface DocPath {
  slug?: string
  docPath?: string
  suggestEdits?: boolean
}

const FeedbackSection = ({ slug, docPath, suggestEdits = true }: DocPath) => {
  const [feedback, changeFeedback] = useState<boolean | undefined>(undefined)
  const [prevSlug, setPrevSlug] = useState(slug)
  const [modalState, changeModalState] = useState<ModalProps>({
    modalOpen: false,
  })
  const likeButton = useRef<HTMLElement>()
  const dislikeButton = useRef<HTMLElement>()

  if (slug !== prevSlug) {
    setPrevSlug(slug)
    changeModalState({ modalOpen: false })
    changeFeedback(undefined)
  }

  const openModal = (choice: boolean) => {
    changeModalState({
      modalOpen: true,
      liked: choice,
    })
  }

  const sendFeedback = async (comment: string) => {
    const feedback = {
      data: [
        new Date().toISOString(),
        `https://developers.vtex.com/docs/guides/${slug}`,
        modalState.liked ? 'positive' : 'negative',
        comment,
      ],
    }

    await fetch('/api/feedback/', {
      method: 'POST',
      body: JSON.stringify(feedback),
    })
  }

  const urlToEdit = `https://github.com/vtexdocs/dev-portal-content/edit/main/${docPath}`

  return (
    <Flex sx={styles.container} data-cy="feedback-section">
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
          data-cy="feedback-section-like"
        >
          {feedback === undefined || !feedback ? (
            <LikeIcon size={24} sx={styles.likeIcon} />
          ) : (
            <LikeSelectedIcon size={24} sx={styles.likeIcon} />
          )}
          <Text>{messages['feedback_section.positive']}</Text>
        </Flex>
        <Flex
          ref={dislikeButton}
          sx={setButtonStyle(feedback, modalState, false)}
          onClick={feedback === undefined ? () => openModal(false) : null}
        >
          {feedback === undefined || feedback ? (
            <LikeIcon size={24} sx={styles.dislikeIcon} />
          ) : (
            <LikeSelectedIcon size={24} sx={styles.dislikeIcon} />
          )}
          <Text>{messages['feedback_section.negative']}</Text>
        </Flex>
      </Flex>
      {suggestEdits && (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={urlToEdit}
          sx={styles.editContainer}
        >
          <EditIcon size={24} sx={styles.editIcon} />
          <Text>{messages['feedback_section.edit']}</Text>
        </Link>
      )}
      {modalState.modalOpen ? (
        <FeedbackModal
          changeFeedBack={changeFeedback}
          changeModalState={changeModalState}
          modalState={modalState}
          chosenButtonRef={modalState.liked ? likeButton : dislikeButton}
          onSubmit={(comment) => sendFeedback(comment)}
        />
      ) : null}
    </Flex>
  )
}

export default FeedbackSection
