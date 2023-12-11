import { RegionBar, RegionModal, useUI } from '@faststore/ui'

const RegionBarUsage = () => {
  const { modal, openModal } = useUI()
  return (
    <>
      <RegionBar onButtonClick={() => openModal()} label={''} />
      {modal && <RegionModal fadeOutOnSubmit={true} />}
    </>
  )
}

export default RegionBarUsage
