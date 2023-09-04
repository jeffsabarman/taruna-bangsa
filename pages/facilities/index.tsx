import React, { useState } from 'react'
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import { useResponsive } from 'helpers/custom-hooks'
import { FACILITIES } from 'helpers/constants'
import HeaderLayout from '@/components/HeaderLayout'
import FacilityImage from '@/components/Facilities/FacilityImage'
import FacilitiesSlider from '@/components/Facilities/FacilitiesSlider'
import 'react-image-gallery/styles/css/image-gallery.css'

export type Image = {
  image: string
  title: string
}

function Facilities() {
  /** Utilities */
  const theme = useTheme()
  const { Phone, SmallDesktop } = useResponsive()
  const [focusImageKey, setFocusImageKey] = useState('')
  const [showSlider, setShowSlider] = useState(false)

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'))
  const customLargerPhone = useMediaQuery('(max-width:800px)')

  /** Function */
  const handleZoomImage = (key: string) => {
    setShowSlider(true)
    setFocusImageKey(key)
  }

  return (
    <>
      <Box mt={largerThanPhone || Phone ? theme.spacing(12) : theme.spacing(8)}>
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
        </Box>
      </Box>
      <FacilitiesSlider
        open={showSlider}
        handleClose={() => setShowSlider(false)}
        focusImage={focusImageKey}
      />
    </>
  )
}

export default Facilities
