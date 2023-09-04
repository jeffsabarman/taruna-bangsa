import { Box, Grid, useTheme, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { useResponsive } from 'helpers/custom-hooks'
import { FACILITIES } from 'helpers/constants'
import HeaderLayout from '../HeaderLayout'
import FacilityImage from '../Facilities/FacilityImage'
import FacilitiesSlider from '../Facilities/FacilitiesSlider'

// const images = [
//   {
//     original: 'images/swimming-pool.jpg',
//     originalAlt: 'facil image',
//   },
//   {
//     original: 'images/biology-lab.jpg',
//     originalAlt: 'facil image',
//   },
//   {
//     original: 'images/robotic-lab.jpg',
//     originalAlt: 'facil image',
//   },
//   {
//     original: 'images/basketball.jpg',
//     originalAlt: 'facil image',
//   },
//   {
//     original: 'images/playground.jpg',
//     originalAlt: 'facil image',
//   },
//   {
//     original: 'images/open-space.jpg',
//     originalAlt: 'facil image',
//   },
// ]

function Facilities() {
  const theme = useTheme()
  const { SmallDesktop } = useResponsive()
  const [focusImageKey, setFocusImageKey] = useState('')
  const [showSlider, setShowSlider] = useState(false)

  const customLargerPhone = useMediaQuery('(max-width:800px)')

  /** Function */
  const handleZoomImage = (key: string) => {
    setShowSlider(true)
    setFocusImageKey(key)
  }

  return (
    <Box bgcolor={theme.palette.primary.main}>
      <Grid container direction="column">
        <HeaderLayout
          mode="dark"
          title="Fasilitas"
          subtitle="Sekolah Taruna Bangsa menempati lahan seluas 12.530 m², dilengkapi dengan gedung yang megah dan asri, serta fasilitas pendidikan yang sesuai dengan perkembangan teknologi sangat mendukung peserta didik dalam mengasah otak dan mengolah bakat."
        >
          <Grid mt={1} container spacing={3}>
            {FACILITIES?.map((fac, index) => (
              <Grid
                xs={customLargerPhone ? 12 : SmallDesktop ? 6 : 4}
                item
                key={index}
                mb={customLargerPhone ? 2 : 0}
              >
                <FacilityImage
                  handleClick={() => handleZoomImage(fac.key)}
                  title={fac.title}
                  image={fac.image}
                />
              </Grid>
            ))}
          </Grid>
        </HeaderLayout>
      </Grid>
      <FacilitiesSlider
        open={showSlider}
        handleClose={() => setShowSlider(false)}
        focusImage={focusImageKey}
      />
    </Box>
  )
}

export default Facilities
