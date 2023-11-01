import { Box, Flex, Text } from '@vtex/brand-ui'

import Image from 'next/image'
import parallaxOne from '../../../public/images/parallax/parallax-one.png'
import parallaxTwo from '../../../public/images/parallax/parallax-two.png'
import parallaxThree from '../../../public/images/parallax/parallax-three.png'
import styles from 'components/newsletter-section/styles'
import imgStyle from './styles.module.css'

import { getMessages } from 'utils/get-messages'
import { useEffect, useRef, useState } from 'react'

const NewsletterSection = () => {
  const messages = getMessages()
  const imageContainer = useRef<HTMLDivElement>(null)
  const [imageIntersect, setImageIntersect] = useState(false)
  const [scrollAnimY, setScrollAnimY] = useState(0)
  const [overImage, setOverImage] = useState(-1)

  function onImageIntersection(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      setImageIntersect(entry.isIntersecting)
    })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onImageIntersection, {
      threshold: 0.5,
    })

    if (imageContainer.current) observer.observe(imageContainer.current)
    return () => {
      observer.disconnect()
    }
  }, [imageContainer])

  useEffect(() => {
    if (!imageIntersect || !imageContainer.current) {
      return
    }

    const onScroll = () => {
      setScrollAnimY(window.scrollY)
    }

    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [imageIntersect])

  return (
    <Box sx={styles.section}>
      <Box sx={styles.newsletter}>
        <Flex sx={styles.newsletterContainer}>
          <Box
            ref={imageContainer}
            sx={styles.imageContainer}
            className={imgStyle.container}
          >
            <Image
              src={parallaxOne}
              style={{
                top: `calc(40% + ${scrollAnimY * 0.7}px)`,
                scale: overImage === 1 ? '1.2' : 'none',
              }}
              alt=""
              onMouseOver={() => setOverImage(1)}
              onMouseLeave={() => setOverImage(-1)}
            />
            <Image
              src={parallaxTwo}
              style={{
                top: `calc(40% + ${scrollAnimY * 0.85}px)`,
                scale: overImage === 2 ? '1.2' : 'none',
              }}
              alt=""
              onMouseOver={() => setOverImage(2)}
              onMouseLeave={() => setOverImage(-1)}
            />
            <Image
              src={parallaxThree}
              style={{
                top: `calc(40% + ${scrollAnimY}px)`,
                scale: overImage === 3 ? '1.2' : 'none',
              }}
              onMouseOver={() => setOverImage(3)}
              onMouseLeave={() => setOverImage(-1)}
              alt=""
            />
          </Box>
          <Box sx={styles.titleGradient}>
            <Text sx={styles.newsletterTitle}>
              {messages['landing_page_newsletter.title']}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default NewsletterSection
