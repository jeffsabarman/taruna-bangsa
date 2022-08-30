import { Grid, Typography, useTheme } from '@mui/material';
import { useBackgroundTypography } from 'helpers/custom-hooks';
import { ThemeColor } from 'helpers/types';
import React, { FC, ReactNode, useMemo } from 'react';
import { useResponsive } from 'helpers/custom-hooks';

interface VisionMissionProps {
  visions: string[];
  missions: string[];
  themeColor: ThemeColor;
  visionSub?: string;
  missionSub?: string;
}

const VisionMission: FC<VisionMissionProps> = ({
  visions,
  missions,
  themeColor,
  visionSub,
  missionSub,
}) => {
  /** Utilities */
  const styles = useBackgroundTypography();
  const theme = useTheme();
  const { SmallDesktop, Tablet } = useResponsive();

  /** Functions */
  const getTitleStyle = useMemo(() => {
    switch (themeColor) {
      case 'red':
        return styles.redHeader;
      case 'lightblue':
        return styles.lighblueHeader;
      case 'grey':
        return styles.greyHeader;

      default:
        return styles.yellowHeader;
    }
  }, [themeColor]);

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
            alignItems="center"
            container
            key={idx}
            spacing={1}
            mt={1}
          >
            <Grid item xs={1}>
              <Typography component="span" variant="h4">
                &#183;
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body2" color="GrayText">
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
            alignItems="center"
            container
            key={idx}
            spacing={1}
            mt={1}
          >
            <Grid item xs={1}>
              <Typography component="span" variant="h4">
                &#183;
              </Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography variant="body2" color="GrayText">
                {mission}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default VisionMission;
