import styles from './styles'
import type { PropsWithChildren } from 'react'
import { useDialogState, Dialog } from 'reakit/Dialog'
import { Box, Button, Text, SxProps, Link } from '@vtex/brand-ui'
import { IconClose } from './IconClose'

interface AnnouncementBarProps extends PropsWithChildren<SxProps> {
  action: {
    label: string
    href: string
  }
}

const AnnouncementBar = ({
  action: { label, href },
  children,
}: AnnouncementBarProps) => {
  const state = useDialogState({
    modal: false,
    visible: true,
    baseId: 'announcement-bar',
  })
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    state.hide()
  }

  return (
    <Dialog {...state} aria-label="Welcome" hideOnClickOutside={false}>
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
