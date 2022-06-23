import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Container from '@/components/Container';

const EducationForEmpowerment = () => {
  const theme = useTheme();
  const smallFrame = useMediaQuery(theme.breakpoints.down('md'));
  const extraSmallFrame = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box bgcolor={theme.palette.primary.dark}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs>
          <Container
            py={extraSmallFrame ? theme.spacing(8) : theme.spacing(12)}
            size={extraSmallFrame ? 'sm' : smallFrame ? 'md' : 'lg'}
          >
            <Typography
              variant={extraSmallFrame ? 'h6' : 'h5'}
              color="whitesmoke"
              textAlign="center"
            >
              Education for Empowerment
            </Typography>
            <Typography
              mt={extraSmallFrame ? theme.spacing(4) : theme.spacing(8)}
              color="whitesmoke"
              textAlign="center"
              variant={extraSmallFrame ? 'body2' : 'body1'}
            >
              We are a school that empowers students to thrive in academic
              excellence; personal, social and emotional growth that are needed
              for success in their live and livelihood
            </Typography>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EducationForEmpowerment;
