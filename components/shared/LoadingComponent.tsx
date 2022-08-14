import { Grid, CircularProgress, useTheme } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';

export default function LoadingComponent() {
  const { Phone, Tablet } = useResponsive();
  const theme = useTheme();

  return (
    <Grid item>
      <CircularProgress
        style={{
          width: Phone ? '3rem' : Tablet ? '4.5rem' : '6rem',
          height: Phone ? '3rem' : Tablet ? '4.5rem' : '6rem',
          color: theme.palette.primary.light,
        }}
      />
    </Grid>
  );
}
