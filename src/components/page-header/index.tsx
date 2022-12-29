import Image, { StaticImageData } from 'next/image'
import { Box, Flex, Text } from '@vtex/brand-ui'
import styles from './styles'
import { Fragment } from 'react'

interface IPageHeader {
  title: string
  description: string
  imageUrl: StaticImageData
  imageAlt: string
}

const PageHeader = ({
  title,
  description,
  imageUrl,
  imageAlt,
}: IPageHeader) => {
  return (
    <Fragment>
      <Box sx={styles.welcomeOuterContainer}>
        <Flex sx={styles.welcomeInnerContainer}>
          <Box sx={styles.welcomeHeader}>
            <Text sx={styles.welcomeText}>{title}</Text>
            <Text sx={styles.welcomeSubtitle}>{description}</Text>
          </Box>
          <Box sx={styles.welcomeImageOuterContainer}>
            <Box sx={styles.welcomeImageInnerContainer}>
              <Box sx={styles.welcomeImageGradient}></Box>
              <Image
                alt={imageAlt}
                src={imageUrl}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box sx={styles.divider}></Box>
    </Fragment>
  )
}

export default PageHeader
