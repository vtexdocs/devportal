import { Gift, GiftContent, GiftImage } from '@faststore/ui'
import { useFormattedPrice } from '../utilities/usePriceFormatter'
import Image from 'next/image'

const GiftTemplateWithoutBadge = () => {
  return (
    <Gift>
      <GiftImage>
        <Image
          src="https://storeframework.vtexassets.com/arquivos/ids/190902/unsplash-magic-mouse.jpg?v=637800136963870000"
          alt="Magicwhite"
          width={89}
          height={89}
        />
      </GiftImage>
      <GiftContent
        productName="Apple Magic Mouse"
        price={{ value: 999, listPrice: 999, formatter: useFormattedPrice }}
      />
    </Gift>
  )
}

export default GiftTemplateWithoutBadge
