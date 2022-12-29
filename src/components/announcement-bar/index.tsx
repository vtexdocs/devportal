import styles from './styles'
import type { PropsWithChildren, ReactNode } from 'react'
import { useDialogState, Dialog } from 'reakit/Dialog'
import { Box, Button, Text, IconProps, SxProps, Link } from '@vtex/brand-ui'
import { IconClose } from './IconClose'

interface HelloBarProps extends PropsWithChildren<SxProps> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  closeIcon?: boolean
  onClose?: () => void
  icon?: (props: IconProps) => ReactNode
  action: {
    label: string
    href: string
  }
}

const AnnouncementBar = ({
  onClose,
  action: { label, href },
  children,
}: HelloBarProps) => {
  const state = useDialogState({ modal: false, visible: true })
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    state.hide()
    if (onClose) onClose()
  }

  return (
    <Dialog {...state} hideOnClickOutside={false}>
      <Box sx={styles.container}>
        <Box sx={styles.box}>
          <Text sx={styles.label}>NEW</Text>
          <Text sx={styles.textBold}>📢 Preview version - </Text>
          <Text sx={styles.text}>{children}</Text>
          <Link sx={styles.link} target="_blank" href={href}>
            {label}
          </Link>
        </Box>
        <Box>
          <Button
            sx={styles.closeIcon}
            variant="tertiary"
            size="small"
            onClick={(e) => {
              handleClose(e)
            }}
            icon={() => <IconClose />}
          />
        </Box>
      </Box>
    </Dialog>
  )
}

export default AnnouncementBar
