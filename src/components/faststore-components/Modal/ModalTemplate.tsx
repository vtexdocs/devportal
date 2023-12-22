import React from 'react'
import { ModalBase } from './ModalBase'
import { UIProvider } from '@faststore/ui'

export const ModalTemplate = () => {
  return (
    <UIProvider>
      <ModalBase />
    </UIProvider>
  )
}

export default ModalTemplate
