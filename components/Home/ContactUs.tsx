import { Box, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import Container from '../Container';
import { Polygon } from '@/components/Shapes';
import { useResponsive } from 'helpers/custom-hooks';
import ReactMap from '../GoogleMaps';

const ContactUs = () => {
  const theme = useTheme();
  const { SmallDesktop, Tablet, Phone } = useResponsive();

  /** Functions */
  const getPolygonSize = () => {
    return SmallDesktop ? 'md' : '2xl';
  };

  return (
    <Grid container alignItems="stretch">
      <Grid item xs={12} md={6} minHeight={350}>
        <ReactMap style={{ width: '100%', height: '100%' }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box bgcolor={theme.palette.primary.main}>
          <Container
            size={SmallDesktop ? 'md' : 'lg'}
            pt={
              Phone
                ? theme.spacing(10)
                : SmallDesktop
                ? theme.spacing(18)
                : theme.spacing(24)
            }
          >
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Typography color="whitesmoke" variant={Phone ? 'h5' : 'h4'}>
                  Hubungi Kami
                </Typography>
                <Typography mt={theme.spacing(4)} color="whitesmoke">
                  Jalan Raya Babakan Madang No. 101 Sentul, Bogor 16810 Jawa
                  Barat
                </Typography>
                <Typography mt={theme.spacing(2)} color="whitesmoke">
                  Telp : (021) 8795 1016
                </Typography>
                <Typography color="whitesmoke">
                  Email : ppdb@taruna-bangsa.com
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <Grid container justifyContent="flex-end" p={theme.spacing(8)}>
            <Polygon size={getPolygonSize()} tertiary />
            <Polygon size={getPolygonSize()} tertiary />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
