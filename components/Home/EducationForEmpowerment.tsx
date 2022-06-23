import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Container from '@/components/Container';
import { Waves } from '@/public/images/svg';
import { useResponsive } from 'helpers/custom-hooks';

const EducationForEmpowerment = () => {
  const theme = useTheme();
  const { Phone, SmallDesktop, Tablet } = useResponsive();

  return (
    <Box bgcolor={theme.palette.primary.dark}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs>
          <Container
            pt={Phone ? theme.spacing(8) : theme.spacing(12)}
            size={Phone ? 'sm' : Tablet ? 'md' : SmallDesktop ? 'lg' : 'xl'}
          >
            <Typography
              variant={Phone ? 'h6' : Tablet ? 'h5' : 'h4'}
              color="whitesmoke"
              textAlign="center"
            >
              Education for Empowerment
            </Typography>
            <Typography
              mt={Phone ? theme.spacing(4) : theme.spacing(8)}
              color="whitesmoke"
              textAlign="center"
              variant={Phone ? 'body2' : 'body1'}
            >
              We are a school that empowers students to thrive in academic
              excellence; personal, social and emotional growth that are needed
              for success in their live and livelihood
            </Typography>
          </Container>
        </Grid>
        <Waves />
      </Grid>
    </Box>
  );
};

export default EducationForEmpowerment;
