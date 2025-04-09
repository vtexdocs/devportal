import React from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  useUI,
} from '@faststore/ui'

export const ModalBase = () => {
  const { modal, openModal } = useUI()
  return (
    <>
      <Button variant="primary" onClick={() => openModal()}>
        Open Modal
      </Button>
      {modal && (
        <Modal>
          {({ fadeOut }) => (
            <>
              <ModalHeader
                onClose={() => fadeOut()}
                title="Modal Title"
                description="Modal description"
              />
              <ModalBody>
                <p>This is the ModalBody</p>
              </ModalBody>
              <ModalFooter>
                <Button variant="secondary" onClick={() => fadeOut()}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => fadeOut()}>
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </Modal>
      )}
    </>
  )
}

export default ModalBase
