/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { ImageGallery, ImageZoom } from '@faststore/ui'
import type { ImageElementData } from '@faststore/components'

interface ImageComponentProps {
  url?: string | undefined
  alternateName?: string | undefined
  loading?: 'eager' | 'lazy' | undefined
}

const ImageComponent = ({
  url,
  alternateName,
  loading,
}: ImageComponentProps) => (
  <img data-fs-image src={url} alt={alternateName} loading={loading} />
)

export interface ImageGalleryUsageProps {
  images?: ImageElementData[]
}

const ImageGalleryUsage = ({ images }: ImageGalleryUsageProps) => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0)
  const currentImage = images ? images[selectedImageIdx] : null

  return (
    <ImageGallery
      images={images || []}
      ImageComponent={ImageComponent}
      selectedImageIdx={selectedImageIdx}
      setSelectedImageIdx={setSelectedImageIdx}
    >
      <ImageZoom>
        <img
          data-fs-image
          src={currentImage?.url}
          alt={currentImage?.alternateName}
          style={{ aspectRatio: 15 / 14 }}
        />
      </ImageZoom>
    </ImageGallery>
  )
}

export default ImageGalleryUsage
