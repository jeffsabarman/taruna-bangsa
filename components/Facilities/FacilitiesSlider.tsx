import React, { useCallback } from 'react'
import Dialog from '@mui/material/Dialog'
import GalleryImage from '@/components/shared/GalleryImage'

type FacilitiesSliderProps = {
  open: boolean
  handleClose: () => void
  focusImage: string
}

/** Mocked Data */
const POOL_IMAGES = [
  {
    original: 'images/swimming-pool.jpg',
    thumbnail: 'images/swimming-pool.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/swimming-pool-2.jpg',
    thumbnail: 'images/swimming-pool-2.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/swimming-pool-3.jpg',
    thumbnail: 'images/swimming-pool-3.jpg',
    originalAlt: 'facil image',
  },
]

const BASKETBALL_IMAGES = [
  {
    original: 'images/basketball.jpg',
    thumbnail: 'images/basketball.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/basketball-2.jpg',
    thumbnail: 'images/basketball-2.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/basketball-3.jpg',
    thumbnail: 'images/basketball-3.jpg',
    originalAlt: 'facil image',
  },
]
const BIOLOGY_IMAGES = [
  {
    original: 'images/biology-lab.jpg',
    thumbnail: 'images/biology-lab.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/biology-lab-2.jpg',
    thumbnail: 'images/biology-lab-2.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/biology-lab-3.jpg',
    thumbnail: 'images/biology-lab-3.jpg',
    originalAlt: 'facil image',
  },
]
const ROBOTIC_IMAGES = [
  {
    original: 'images/robotic-lab.jpg',
    thumbnail: 'images/robotic-lab.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/robotic-lab-2.jpg',
    thumbnail: 'images/robotic-lab-2.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/robotic-lab-3.jpg',
    thumbnail: 'images/robotic-lab-3.jpg',
    originalAlt: 'facil image',
  },
]
const PLAYGROUND_IMAGES = [
  {
    original: 'images/playground.jpg',
    thumbnail: 'images/playground.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/playground-2.jpg',
    thumbnail: 'images/playground-2.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/playground-3.jpg',
    thumbnail: 'images/playground-3.jpg',
    originalAlt: 'facil image',
  },
]
const OPEN_SPACE_IMAGES = [
  {
    original: 'images/open-space.jpg',
    thumbnail: 'images/open-space.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/open-space-2.jpg',
    thumbnail: 'images/open-space-2.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/open-space-3.jpg',
    thumbnail: 'images/open-space-3.jpg',
    originalAlt: 'facil image',
  },
]

function FacilitiesSlider({
  open,
  handleClose,
  focusImage,
}: FacilitiesSliderProps) {
  /** Utilities */

  const getImages = useCallback(() => {
    switch (focusImage) {
      case 'pool': {
        return POOL_IMAGES
      }
      case 'biology': {
        return BIOLOGY_IMAGES
      }
      case 'robotic': {
        return ROBOTIC_IMAGES
      }
      case 'playground': {
        return PLAYGROUND_IMAGES
      }
      case 'open-space': {
        return OPEN_SPACE_IMAGES
      }
      case 'basketball': {
        return BASKETBALL_IMAGES
      }

      default: {
        return ''
      }
    }
  }, [focusImage])

  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby=""
      style={{ backgroundColor: 'rgba(1,1,1,0.4)' }}
    >
      <GalleryImage
        images={getImages() || []}
        autoPlay
        showFullscreenButton
        showPlayButton
      />
    </Dialog>
  )
}

export default FacilitiesSlider
