import React, { useCallback, useState, useRef, useEffect } from 'react'
import copy from 'copy-text-to-clipboard'
import { Box, Button, Icon } from '@vtex/brand-ui'
import type { SxStyleProp } from '@vtex/brand-ui'

import styles from './styles'

interface CopyButtonProps {
  code: string
  sx?: SxStyleProp
}

export default function CopyButton({ code, sx }: CopyButtonProps): JSX.Element {
  const [isCopied, setIsCopied] = useState(false)
  const copyTimeout = useRef<number | undefined>(undefined)
  const handleCopyCode = useCallback(() => {
    copy(code)
    setIsCopied(true)
    copyTimeout.current = window.setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }, [code])

  useEffect(() => () => window.clearTimeout(copyTimeout.current), [])

  return (
    <Button
      variant="tertiary"
      size="small"
      onClick={handleCopyCode}
      sx={{
        ...(isCopied ? styles.copyButtonCopied : styles.copyButton),
        ...sx,
      }}
      aria-label="Copy code snippet"
    >
      <Box sx={styles.copyButtonIcons} aria-hidden="true">
        <Icon
          size={16}
          sx={isCopied ? styles.copyButtonIconCopied : styles.copyButtonIcon}
        >
          <path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" />
        </Icon>
        <Icon
          size={16}
          sx={
            isCopied
              ? styles.copyButtonSuccessIcon
              : styles.copyButtonSuccessIconCopied
          }
        >
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </Icon>
      </Box>
    </Button>
  )
}
