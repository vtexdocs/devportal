import { Box, Button, Flex } from '@vtex/brand-ui'
import CloseIcon from 'components/icons/close-icon'
import { ReactElement, useEffect, useState } from 'react'
import styles from './styles'

interface Props {
  children: ReactElement
}

export default function LightBox({ children }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'visible'
  }, [isModalOpen])

  return (
    <div>
      {isModalOpen && (
        <Flex sx={styles.container} onClick={() => setIsModalOpen(false)}>
          <Box sx={styles.modal}>
            <Box sx={styles.buttonContainer}>
              <Button
                sx={styles.closeButton}
                aria-label={'Close'}
                size="small"
                variant="tertiary"
                icon={() => <CloseIcon size={24} />}
                onClick={() => setIsModalOpen(false)}
              />
            </Box>
            {children}
          </Box>
        </Flex>
      )}
      <div onClick={() => setIsModalOpen(true)}>{children}</div>
    </div>
  )
}
