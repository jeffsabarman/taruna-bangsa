import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import { useResponsive } from 'helpers/custom-hooks'
import React from 'react'
import ContactUsForm from '@/components/ContactUs/ContactUsForm'
import RegistrationFlow from '@/components/ContactUs/RegistrationFlow'
import ReactMap from '@/components/GoogleMaps'
import HeaderLayout from '@/components/HeaderLayout'

function ContactUs() {
  /** Utilities */
  const theme = useTheme()
  const { Phone } = useResponsive()

  /** Media Queries */
  const customSmallPhone = useMediaQuery('(max-width:350px)')
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box mt={largerThanPhone || Phone ? theme.spacing(12) : theme.spacing(8)}>
      <Grid container direction="column">
        <Grid item xs>
          <ReactMap
            style={{
              width: customSmallPhone ? '100%' : '100vw',
              height: Phone ? 300 : 500,
            }}
          />
        </Grid>
        <HeaderLayout title="Alur Pendaftaran Online">
          <RegistrationFlow />
        </HeaderLayout>
        <Box bgcolor={theme.palette.primary.main}>
          <Grid container direction="column">
            <HeaderLayout
              mode="dark"
              title="Hubungi Kami Untuk Informasi Lebih Lanjut"
            >
              <Grid container>
                <Grid item xs>
                  <ContactUsForm />
                </Grid>
              </Grid>
            </HeaderLayout>
          </Grid>
        </Box>
      </Grid>
    </Box>
  )
}

export default ContactUs
