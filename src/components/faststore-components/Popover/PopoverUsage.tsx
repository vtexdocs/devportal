import React, { useRef } from 'react'
import {
  Button,
  Popover,
  useUI,
} from '@faststore/ui'

export function PopoverUsage() {
  const { popover: displayPopover, openPopover, closePopover } = useUI()
  const buttonRef = useRef(null)

  return (
    <>
      <Button
        variant="primary"
        onClick={() => openPopover({ isOpen: true, triggerRef: buttonRef })}
        ref={buttonRef}
      >
        Popover Trigger
      </Button>

      <Popover
        title="Popover Title"
        content={<div>Popover content goes here</div>}
        dismissible
        onDismiss={closePopover}
        isOpen={displayPopover.isOpen}
        triggerRef={displayPopover.triggerRef}
        placement="bottom-start"
        offsetTop={-16}
      />
    </>
  )
}

export default PopoverUsage
