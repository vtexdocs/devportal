import { Flex, IconProps, Text } from '@vtex/brand-ui'

import ArrowRightIcon from 'public/icons/arrow-right-icon'
import styles from './styles'

export interface props {
  title: string
  description: string
  link: string
  Icon: (props: IconProps) => JSX.Element
}

const EducationChannel = ({ title, description, link, Icon }: props) => {
  return (
    <Flex sx={styles.channelBox}>
      <Icon className="channelIcon" sx={styles.channelIcon} />
      <Text className="channelTitle" sx={styles.channelTitle}>
        {title}
      </Text>
      <Text className="channelDescription" sx={styles.channelDescription}>
        {description}
      </Text>
      <Flex>
        <Text className="channelLink" sx={styles.channelLink}>
          {link}
        </Text>
        <ArrowRightIcon className="channelArrow" sx={styles.arrowIcon} />
      </Flex>
    </Flex>
  )
}

export default EducationChannel
