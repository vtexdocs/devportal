import { Button, useUI } from '@faststore/ui'
import SlideOverUsage from './SlideOverUsage'

const SlideOverPartialLeft = () => {
  const { modal, openModal } = useUI()
  return (
    <>
      <Button variant="primary" onClick={openModal} style={{ width: '9rem' }}>
        Left
      </Button>
      {modal && (
        <SlideOverUsage size="partial" direction="leftSide" isOpen={modal} />
      )}
    </>
  )
}

export default SlideOverPartialLeft
