import { Box, Button, Flex } from '@vtex/brand-ui'
import CloseIcon from 'components/icons/close-icon'
import { ReactElement, useEffect, useRef, useState } from 'react'
import useClickOutside from 'utils/hooks/useClickOutside'
import styles from './styles'

interface Props {
  children: ReactElement
}

export default function LightBox({ children }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>()

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'visible'
  }, [isModalOpen])

  useClickOutside(modalRef, () => setIsModalOpen(false))

  return (
    <div>
      {isModalOpen && (
        <Flex sx={styles.container}>
          <Box sx={styles.modal} ref={modalRef}>
            <Box sx={styles.buttonContainer}>
              <Button
                sx={styles.closeButton}
                aria-label={'Close'}
                size="small"
                variant="tertiary"
                icon={() => <CloseIcon size={16} />}
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
