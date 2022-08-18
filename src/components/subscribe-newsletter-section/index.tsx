import { Flex, Text } from '@vtex/brand-ui'
import Image from 'next/image'

import ArrowRightIcon from 'components/icons/arrow-right-icon'
import { getMessages } from 'utils/get-messages'
import useWindowSize from 'utils/use-window-size'

import styles from './styles'
import { subscribeNewsletterContainer, textContainer } from './functions'

import image1 from '../../../public/images/subscribe-newsletter-images/subscribe-newsletter-1.png'
import image2 from '../../../public/images/subscribe-newsletter-images/subscribe-newsletter-2.png'
import image3 from '../../../public/images/subscribe-newsletter-images/subscribe-newsletter-3.png'

const SubscribeNewsletterImage = ({
  displayImage,
}: {
  displayImage: boolean
}) => {
  const windowSize = useWindowSize()

  if (!displayImage || windowSize.width == undefined) return <></>

  let image
  if (windowSize.width >= 1280) {
    image = image3
  } else if (windowSize.width >= 640) {
    image = image2
  } else {
    image = image1
  }

  return (
    <Flex sx={styles.imageContainer}>
      <Image src={image} layout="fill" />
    </Flex>
  )
}

const SubscribeNewsletterSection = ({
  containerType,
}: {
  containerType: string
}) => {
  const messages = getMessages()

  const showBackgroundImage = containerType === 'landing-page' ? true : false

  return (
    <Flex sx={styles.container}>
      <SubscribeNewsletterImage displayImage={showBackgroundImage} />
      <Flex sx={subscribeNewsletterContainer(containerType)}>
        <Flex sx={textContainer(containerType)}>
          <Text className="title" sx={styles.text}>
            {messages['subscribe_newsletter_section.title']}
          </Text>
          <Text className="subtitle" sx={styles.text}>
            {messages['subscribe_newsletter_section.subtitle']}
          </Text>
        </Flex>

        <Flex sx={styles.emailContainer}>
          <form sx={styles.emailForm}>
            <input
              type="email"
              name=""
              id="newsletter-mail"
              placeholder="E-mail"
              style={styles.emailInput}
            />
          </form>

          <div style={styles.divider}></div>

          <Flex sx={styles.iconContainer}>
            <ArrowRightIcon sx={styles.submitArrow} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SubscribeNewsletterSection
