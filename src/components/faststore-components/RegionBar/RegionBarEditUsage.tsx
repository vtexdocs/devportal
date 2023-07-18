import { RegionBar, RegionModal, useUI } from '@faststore/ui'

const RegionBarEditUsage = () => {
  const { modal, openModal } = useUI()
  return (
    <>
      <RegionBar
        postalCode={'151515'}
        onButtonClick={() => openModal()}
        label={''}
      />
      {modal && <RegionModal fadeOutOnSubmit={true} inputValue={'151515'} />}
    </>
  )
}

export default RegionBarEditUsage
