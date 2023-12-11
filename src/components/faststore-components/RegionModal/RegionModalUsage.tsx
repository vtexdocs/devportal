import { Button, RegionModal, useUI } from '@faststore/ui'
import { useState } from 'react'

const RegionModalUsage = () => {
  const { modal, openModal } = useUI()
  const [input, setInput] = useState('')

  return (
    <>
      <Button variant="primary" onClick={() => openModal()}>
        Open Region Modal
      </Button>
      {modal && (
        <RegionModal
          fadeOutOnSubmit={true}
          inputValue={input}
          onInput={(e) => setInput(e.currentTarget.value)}
        />
      )}
    </>
  )
}

export default RegionModalUsage
