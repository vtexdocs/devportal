import React from 'react'
import { Button, Modal, ModalBody, ModalHeader, useUI } from '@faststore/ui'

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
            </>
          )}
        </Modal>
      )}
    </>
  )
}

export default ModalBase
