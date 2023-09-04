import { Grid, Typography, useTheme } from '@mui/material'
import { useBackgroundTypography, useResponsive } from 'helpers/custom-hooks'
import { ThemeColor } from 'helpers/types'
import React, { useMemo } from 'react'

interface VisionMissionProps {
  visions: string[]
  missions: string[]
  themeColor: ThemeColor
  visionSub?: string
  missionSub?: string
}

const VisionMission = ({
  visions,
  missions,
  themeColor,
  visionSub,
  missionSub,
}: VisionMissionProps) => {
  /** Utilities */
  const styles = useBackgroundTypography()
  const theme = useTheme()
  const { SmallDesktop, Tablet } = useResponsive()

  /** Functions */
  const getTitleStyle = useMemo(() => {
    switch (themeColor) {
      case 'red': {
        return styles.redHeader
      }
      case 'lightblue': {
        return styles.lighblueHeader
      }
      case 'grey': {
        return styles.greyHeader
      }

      default: {
        return styles.yellowHeader
      }
    }
  }, [themeColor])

  return (
    <Grid container spacing={8}>
      <Grid item xs={12} md={SmallDesktop ? 12 : 6}>
        <Typography
          sx={{
            ...getTitleStyle,
            px: theme.spacing(2),
          }}
          color="whitesmoke"
          display="inline-block"
          variant="subtitle1"
        >
          Visi
        </Typography>
        {visionSub && (
          <Typography mt={3} variant="body2" color="GrayText">
            {visionSub}
          </Typography>
        )}
        {visions.map((vision, idx) => (
          <Grid
            direction="row"
            alignItems={Tablet ? 'flex-start' : 'center'}
            container
            key={idx}
            spacing={1}
            mt={1}
          >
            <Grid item>
              <Typography component="span" variant="h4">
                &#183;
              </Typography>
            </Grid>
            <Grid item xs ml={2}>
              <Typography variant="body2" color="GrayText" maxWidth="70vw">
                {vision}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} md={SmallDesktop ? 12 : 6}>
        <Typography
          sx={{
            ...getTitleStyle,
            mb: 1,
            px: theme.spacing(2),
          }}
          color="whitesmoke"
          display="inline-block"
          variant="subtitle1"
        >
          Misi
        </Typography>
        {missionSub && (
          <Typography mt={3} variant="body2" color="GrayText">
            {missionSub}
          </Typography>
        )}
        {missions.map((mission, idx) => (
          <Grid
            direction="row"
            alignItems={Tablet ? 'flex-start' : 'center'}
            container
            key={idx}
            spacing={1}
            mt={1}
          >
            <Grid item>
              <Typography component="span" variant="h4">
                &#183;
              </Typography>
            </Grid>
            <Grid item xs ml={2}>
              <Typography variant="body2" color="GrayText">
                {mission}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}

export default VisionMission
