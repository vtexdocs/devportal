import { Icon, RegionBar, RegionModal, useUI } from '@faststore/ui'

const RegionBarUsage = () => {
  const { modal, openModal } = useUI()
  return (
    <>
      <RegionBar
        icon={
          <Icon name="MapPin" onReset={undefined} onResetCapture={undefined} />
        }
        label="Set your location"
        onButtonClick={() => openModal()}
      />
      {modal && <RegionModal fadeOutOnSubmit={true} />}
    </>
  )
}

export default RegionBarUsage
