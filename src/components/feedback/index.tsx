import { Flex, Text, Link } from '@vtex/brand-ui'

import EditIcon from 'components/icons/edit-icon'
import LikeIcon from 'components/icons/like-icon'
import LikeSelectedIcon from 'components/icons/like-selected-icon'
import { useState } from 'react'
import { getMessages } from 'utils/get-messages'
import { buttonStyle } from './functions'

import styles from './styles'

const messages = getMessages()

const FeedBackSection = () => {
  const [feedBackSelect, setFeedBackSelect] = useState<boolean>()
  return (
    <Flex sx={styles.container}>
      <Text>
        {feedBackSelect !== undefined
          ? messages['api_guide_documentation_page_feedback.response']
          : messages['api_guide_documentation_page_feedback.question']}
      </Text>
      <Flex>
        <Flex
          sx={buttonStyle(feedBackSelect, true)}
          onClick={() => setFeedBackSelect(true)}
        >
          {feedBackSelect === undefined || !feedBackSelect ? (
            <LikeIcon sx={styles.likeIcon} />
          ) : (
            <LikeSelectedIcon sx={styles.likeIcon} />
          )}
          <Text>
            {messages['api_guide_documentation_page_feedback.positive']}
          </Text>
        </Flex>
        <Flex
          sx={buttonStyle(feedBackSelect, false)}
          onClick={() => setFeedBackSelect(false)}
        >
          {feedBackSelect === undefined || feedBackSelect ? (
            <LikeIcon sx={styles.dislikeIcon} />
          ) : (
            <LikeSelectedIcon sx={styles.dislikeIcon} />
          )}
          <Text>
            {messages['api_guide_documentation_page_feedback.negative']}
          </Text>
        </Flex>
      </Flex>
      <Link sx={styles.editContainer}>
        <EditIcon sx={styles.editIcon} />
        <Text>{messages['api_guide_documentation_page_feedback.edit']}</Text>
      </Link>
    </Flex>
  )
}

export default FeedBackSection
