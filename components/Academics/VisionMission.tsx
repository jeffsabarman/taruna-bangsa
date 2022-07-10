import { Grid, Typography, useTheme } from '@mui/material';
import { useBackgroundTypography } from 'helpers/custom-hooks';
import { ThemeColor } from 'helpers/types';
import React, { FC, useMemo } from 'react';

interface VisionMissionProps {
  vision: string;
  mission: string;
  themeColor: ThemeColor;
}

const VisionMission: FC<VisionMissionProps> = ({
  vision,
  mission,
  themeColor,
}) => {
  /** Utilities */
  const styles = useBackgroundTypography();
  const theme = useTheme();

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
      <Grid item xs={12} md={6}>
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
        <Typography mt={3} variant="body2" color="GrayText">
          {vision}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography
          sx={{
            ...getTitleStyle,
            px: theme.spacing(2),
          }}
          color="whitesmoke"
          display="inline-block"
          variant="subtitle1"
        >
          Misi
        </Typography>
        <Typography mt={3} variant="body2" color="GrayText">
          {mission}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default VisionMission;
