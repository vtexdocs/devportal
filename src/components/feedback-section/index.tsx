import { Flex, Text, Link } from '@vtex/brand-ui'
import EditIcon from 'components/icons/edit-icon'
import LikeIcon from 'components/icons/like-icon'
import LikeSelectedIcon from 'components/icons/like-selected-icon'
import { useState } from 'react'
import { getMessages } from 'utils/get-messages'
import { setButtonStyle } from './functions'

import styles from './styles'

const messages = getMessages()

const FeedbackSection = () => {
  const [feedback, changeFeedback] = useState<boolean>()

  const urlToEdit =
    'https://github.com/vtexdocs/dev-portal-content/edit/main/docs/release-notes/assets-builder.md'

  return (
    <Flex sx={styles.container}>
      <Text>
        {feedback !== undefined
          ? messages['api_guide_documentation_page_feedback.response']
          : messages['api_guide_documentation_page_feedback.question']}
      </Text>
      <Flex sx={styles.likeContainer}>
        <Flex
          sx={setButtonStyle(feedback, true)}
          onClick={() => changeFeedback(true)}
        >
          {feedback === undefined || !feedback ? (
            <LikeIcon sx={styles.likeIcon} />
          ) : (
            <LikeSelectedIcon sx={styles.likeIcon} />
          )}
          <Text>
            {messages['api_guide_documentation_page_feedback.positive']}
          </Text>
        </Flex>
        <Flex
          sx={setButtonStyle(feedback, false)}
          onClick={() => changeFeedback(false)}
        >
          {feedback === undefined || feedback ? (
            <LikeIcon sx={styles.dislikeIcon} />
          ) : (
            <LikeSelectedIcon sx={styles.dislikeIcon} />
          )}
          <Text>
            {messages['api_guide_documentation_page_feedback.negative']}
          </Text>
        </Flex>
      </Flex>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={urlToEdit}
        sx={styles.editContainer}
      >
        <EditIcon sx={styles.editIcon} />
        <Text>{messages['api_guide_documentation_page_feedback.edit']}</Text>
      </Link>
    </Flex>
  )
}

export default FeedbackSection
