import styles from './styles'
import type { PropsWithChildren } from 'react'
import { useDialogState, Dialog } from 'reakit/Dialog'
import { Box, Button, Text, SxProps, Link } from '@vtex/brand-ui'
import { IconClose } from './IconClose'

interface AnnouncementBarProps extends PropsWithChildren<SxProps> {
  type: string
  label?: string
  closable: boolean
  action: {
    href: string
    tag?: string
    button?: string
  }
}

const AnnouncementBar = ({
  closable,
  type,
  action: { tag, button, href },
  label,
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
    <Dialog
      {...state}
      aria-label="Welcome"
      hideOnEsc={closable}
      hideOnClickOutside={false}
    >
      <Box sx={styles.container(type)}>
        <Box sx={styles.box}>
          {tag && <Text sx={styles.label(type)}>{tag}</Text>}
          <Text sx={styles.text}>{children}</Text>
          <Text sx={styles.text}>{label}</Text>
          {button && (
            <Link sx={styles.button(type)} target="_blank" href={href}>
              {button}
            </Link>
          )}
        </Box>
        {closable && (
          <Box>
            <Button
              aria-label="Close Announcement Bar"
              sx={styles.closeIcon}
              variant="tertiary"
              size="small"
              onClick={(e) => {
                handleClose(e)
              }}
              icon={() => <IconClose />}
            />
          </Box>
        )}
      </Box>
    </Dialog>
  )
}

export default AnnouncementBar
