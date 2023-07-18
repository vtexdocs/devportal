import { Button, useUI } from '@faststore/ui'
import SlideOverUsage from './SlideOverUsage'

const SlideOverFullRight = () => {
  const { modal, openModal } = useUI()
  return (
    <>
      <Button variant="primary" onClick={openModal} style={{ width: '9rem' }}>
        Right
      </Button>
      {modal && (
        <SlideOverUsage size="full" direction="rightSide" isOpen={modal} />
      )}
    </>
  )
}

export default SlideOverFullRight
