import { Button, RegionPopover } from '@faststore/ui'
import React, { useRef } from 'react'

function RegionPopoverUsage() {
  const popoverTrigger = useRef(null)

  return (
    <>
      <Button ref={popoverTrigger} variant="primary">
        Change region
      </Button>
      <RegionPopover
        triggerRef={popoverTrigger}
        title="Update Location"
        closeButtonAriaLabel="Close"
        inputField={{
          label: 'Enter your postal code',
          buttonActionText: 'Save',
        }}
        textBeforeLocation="Current region:"
        textAfterLocation="(You can change this anytime below.)"
        description="Please provide your region to continue."
        placement="bottom-center"
        offsetTop={12}
        offsetLeft={8}
        onDismiss={() => { alert('RegionPopover dismissed') }}
      />
    </>
  )
}

export default RegionPopoverUsage
