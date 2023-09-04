import { Grid, Typography, useTheme } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles'
import { ArrowRight as ArrowRightIcon } from '@mui/icons-material'
import { keyframes } from '@mui/system'
import { useResponsive } from 'helpers/custom-hooks'

const scrollMove = keyframes`
 from {
   left: 0px;
 }
 to {
   left: 12px;
 }
`

const StyledArrow = styled(ArrowRightIcon)(() => ({
  position: 'relative',
  animation: `${scrollMove} 1s infinite alternate`,
}))

const SwipeArrow: React.FC<{ color: string }> = ({ color }) => {
  //* Style
  const theme = useTheme()

  //* Media Query
  const { Phone } = useResponsive()

  return (
    <Grid item xs={12} style={{ marginTop: theme.spacing(2) }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Typography variant={Phone ? 'caption' : 'body2'} style={{ color }}>
            Swipe
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: theme.spacing(1.5) }}>
          <StyledArrow sx={{ color }} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SwipeArrow
