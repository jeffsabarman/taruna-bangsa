import { Card, CardMedia, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { useResponsive } from 'helpers/custom-hooks'

type FacilityImageProps = {
  image: string
  title: string
  handleClick: () => void
}

function FacilityImage({ image, title, handleClick }: FacilityImageProps) {
  const { Phone } = useResponsive()
  const customLargerPhone = useMediaQuery('(max-width:800px)')

  return (
    <Card
      sx={{
        width: '100%',
        height: Phone ? '60vw' : customLargerPhone ? '50vw' : 240,
        cursor: 'pointer',
        position: 'relative',
        borderRadius: '12px',
      }}
      onClick={() => handleClick()}
    >
      <CardMedia
        component="img"
        image={image}
        sx={{ position: 'relative', objectFit: 'cover', height: '100%' }}
      />
      <Typography
        variant={Phone ? 'caption' : 'body2'}
        p={1}
        color="whitesmoke"
        bgcolor="rgba(1,1,1,0.7)"
        position="absolute"
        bottom={0}
        width="100%"
      >
        {title}
      </Typography>
    </Card>
  )
}

export default FacilityImage
