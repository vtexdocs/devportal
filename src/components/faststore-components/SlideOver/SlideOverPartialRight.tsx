import { Button, useUI } from '@faststore/ui'
import SlideOverUsage from './SlideOverUsage'

const SlideOverPartialRight = () => {
  const { modal, openModal } = useUI()
  return (
    <>
      <Button variant="primary" onClick={openModal} style={{ width: '9rem' }}>
        Right
      </Button>
      {modal && (
        <SlideOverUsage size="partial" direction="rightSide" isOpen={modal} />
      )}
    </>
  )
}

export default SlideOverPartialRight
