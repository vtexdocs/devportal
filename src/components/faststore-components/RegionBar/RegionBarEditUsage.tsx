import { Icon, RegionBar, RegionModal, useUI } from '@faststore/ui'

const RegionBarEditUsage = () => {
  const { modal, openModal } = useUI()
  return (
    <>
      <RegionBar
        icon={
          <Icon name="MapPin" onReset={undefined} onResetCapture={undefined} />
        }
        postalCode={'151515'}
        onButtonClick={() => openModal()}
        label={''}
      />
      {modal && <RegionModal fadeOutOnSubmit={true} inputValue={'151515'} />}
    </>
  )
}

export default RegionBarEditUsage
