import React from 'react'
import styles from './styles'
import { Box, Button, Text } from '@vtex/brand-ui'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  children: React.ReactNode
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
}: ModalProps) {
  if (!isOpen) return null

  return (
    <Box sx={styles.wrapContainer} onClick={onClose}>
      <Box
        sx={styles.innerContainer}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <Button
          variant="tertiary"
          onClick={onClose}
          sx={styles.modalButton}
          aria-label="Close modal"
        >
          ×
        </Button>

        <Text sx={styles.modalTitle}>{title}</Text>
        {description && <Text sx={styles.modalDescription}>{description}</Text>}

        {children}
      </Box>
    </Box>
  )
}
