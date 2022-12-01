import type { IconComponent } from 'utils/typings/types'

import Link from 'next/link'
import { Flex, Text } from '@vtex/brand-ui'

import ArrowRightIcon from 'components/icons/arrow-right-icon'

import styles from './styles'

export interface props {
  title: string
  description: string
  textLink: string
  link: string
  Icon: IconComponent
}

const EducationChannel = ({
  title,
  description,
  textLink,
  link,
  Icon,
}: props) => {
  return (
    <Link href={link} target="_blank" legacyBehavior>
      <Flex sx={styles.channelBox}>
        <Icon className="channelIcon" sx={styles.channelIcon} />
        <Text className="channelTitle" sx={styles.channelTitle}>
          {title}
          <ArrowRightIcon
            className="channelArrow"
            sx={styles.channelTitleArrowIcon}
          />
        </Text>
        <Text className="channelDescription" sx={styles.channelDescription}>
          {description}
        </Text>
        <Flex sx={styles.channelLinkContainer}>
          <Text className="channelLinkText" sx={styles.channelLinkText}>
            {textLink}
          </Text>
          <ArrowRightIcon
            className="channelArrow"
            sx={styles.channelArrowIcon}
          />
        </Flex>
      </Flex>
    </Link>
  )
}

export default EducationChannel
