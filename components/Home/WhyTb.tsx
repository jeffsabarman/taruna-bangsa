import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import React from 'react';
import Container from '@/components/Container';

const WhyTb = () => {
  const theme = useTheme();
  const { Phone, SmallDesktop, Tablet } = useResponsive();
  const styles = {
    readHeader: {
      backgroundColor: theme.palette.secondary.main,
      p: theme.spacing(1),
    },
    whiteHeader: {
      backgroundColor: theme.palette.background.paper,
      p: theme.spacing(1),
    },
  };

  return (
    <Box bgcolor={theme.palette.primary.dark}>
      <Grid container direction="column">
        <Container
          py={Phone ? theme.spacing(8) : theme.spacing(12)}
          size={Phone ? 'sm' : Tablet ? 'md' : SmallDesktop ? 'lg' : 'xl'}
        >
          <Grid item>
            <Typography
              display="inline-block"
              sx={styles['readHeader']}
              color="whitesmoke"
              variant={Phone ? 'h6' : 'h5'}
            >
              Why
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              display="inline-block"
              sx={styles['whiteHeader']}
              color={theme.palette.primary.dark}
              variant={Phone ? 'h6' : 'h5'}
            >
              TB?
            </Typography>
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
};

export default WhyTb;
