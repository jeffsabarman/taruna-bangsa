import { Box, useMediaQuery, useTheme } from '@mui/material'
import { useResponsive } from 'helpers/custom-hooks'
import React from 'react'
import WhyTb from '@/components/Home/WhyTb'
import Academics from '@/components/Home/Academics'

function WhyTBPages() {
  /** Utilities */
  const theme = useTheme()
  const { Phone } = useResponsive()

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Box mt={largerThanPhone || Phone ? theme.spacing(12) : theme.spacing(8)}>
      <WhyTb />
      <Academics />
    </Box>
  )
}

export default WhyTBPages
