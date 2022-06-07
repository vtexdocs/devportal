import { Flex, Text } from '@vtex/brand-ui'

import EditIcon from 'components/icons/edit-icon'
import LikeIcon from 'components/icons/like-icon'
import { getMessages } from 'utils/get-messages'

import styles from './styles'

const messages = getMessages()

const FeedBackSection = () => {
  return (
    <Flex sx={styles.containter}>
      <Text>{messages['api_guide_documentation_page_feedback.question']}</Text>
      <Flex>
        <LikeIcon sx={styles.likeIcon} />
        <Text sx={styles.text}>
          {messages['api_guide_documentation_page_feedback.positive']}
        </Text>
        <LikeIcon sx={styles.dislikeIcon} />
        <Text sx={styles.text}>
          {messages['api_guide_documentation_page_feedback.negative']}
        </Text>
      </Flex>
      <Flex>
        <EditIcon sx={styles.editIcon} />
        <Text sx={styles.text}>
          {messages['api_guide_documentation_page_feedback.edit']}
        </Text>
      </Flex>
    </Flex>
  )
}

export default FeedBackSection
