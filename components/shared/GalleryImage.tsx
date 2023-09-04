import { useTheme, Box } from '@mui/material'
// @ts-ignore
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

interface GalleryImageProps {
  images:
    | {
        original: string
        thumbnail?: string
        originalAlt?: string
        description?: string
      }[]
    | undefined
  slideDuration?: number
  autoPlay?: boolean
  thumbnailPosition?: 'top' | 'right' | 'bottom' | 'left'
  showFullscreenButton?: boolean
  showPlayButton?: boolean
  showBullets?: boolean
}

function GalleryImage({
  images,
  slideDuration = 600,
  autoPlay = false,
  thumbnailPosition = 'bottom',
  showFullscreenButton = false,
  showPlayButton = false,
  showBullets = false,
}: GalleryImageProps) {
  const theme = useTheme()

  return (
    <Box
      style={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <ImageGallery
        items={images}
        slideDuration={slideDuration}
        autoPlay={autoPlay}
        thumbnailPosition={thumbnailPosition}
        showFullscreenButton={showFullscreenButton}
        showPlayButton={showPlayButton}
        showBullets={showBullets}
      />
    </Box>
  )
}

export default GalleryImage
