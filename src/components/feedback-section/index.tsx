import { Flex, Text, Link } from '@vtex/brand-ui'
import EditIcon from 'components/icons/edit-icon'
import LikeIcon from 'components/icons/like-icon'
import LikeSelectedIcon from 'components/icons/like-selected-icon'
import { useEffect, useRef, useState } from 'react'
import { setButtonStyle } from './functions'
import FeedbackModal, { ModalProps } from 'components/feedback-modal'
import { useIntl, FormattedMessage } from 'react-intl'

import styles from './styles'

interface DocPath {
  slug?: string
  docPath?: string
  suggestEdits?: boolean
}

const FeedbackSection = ({ slug, docPath, suggestEdits = true }: DocPath) => {
  const [feedback, changeFeedback] = useState<boolean>()
  const [modalState, changeModalState] = useState<ModalProps>({
    modalOpen: false,
  })
  const likeButton = useRef<HTMLElement>()
  const dislikeButton = useRef<HTMLElement>()
  const intl = useIntl()

  useEffect(() => {
    changeModalState({ modalOpen: false })
    changeFeedback(undefined)
  }, [slug])

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

  const urlToEdit = `https://github.com/vtexdocs/help-center-content/edit/main/${docPath}`

  return (
    <Flex sx={styles.container} data-cy="feedback-section">
      <Text sx={styles.question}>
        {feedback !== undefined
          ? intl.formatMessage({ id: 'feedback_section.response' })
          : intl.formatMessage({ id: 'feedback_section.question' })}
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
          <Text>
            <FormattedMessage id="feedback_section.positive" />
          </Text>
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
          <Text>
            <FormattedMessage id="feedback_section.negative" />
          </Text>
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
          <Text>
            <FormattedMessage id="feedback_section.edit" />
          </Text>
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
