import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import React, { FC } from 'react';
import Container from '@/components/Container';
import { ArrowRight as ArrowRightIcon } from '@mui/icons-material';
import styled from '@emotion/styled';
import { Polygon } from '@/components/Shapes';

type RectangleProps = {
  size: 'xs' | 'sm';
};

const Rectangle = styled.div<RectangleProps>`
  width: 8vw;
  height: 13vw;
  background: #ed168d;
`;

const POINTS = [
  'Hybrid Learning Class.',
  'Fasilitas sekolah lengkap.',
  'Robotic menjadi program unggulan sekokah.',
  'Area sekolah yang nyaman dan asri, serta ruang terbuka yang luas.',
  'Sekolah Nasional dengan toleransi beragama yang tinggi.',
  'Kelas Bintang.',
];

const BulletLists: FC<{ label: string }> = ({ label }) => {
  const theme = useTheme();
  const { Phone, Desktop, Tablet } = useResponsive();

  return (
    <Grid container alignItems="center" spacing={3}>
      <Grid item mt={Phone ? theme.spacing(0) : theme.spacing(1)}>
        <Polygon size={Phone ? 'xs' : Tablet ? 'sm' : 'lg'} primary />
        <Polygon size={Phone ? 'xs' : Tablet ? 'sm' : 'lg'} secondary />
      </Grid>
      <Grid item xs>
        <Typography variant={Tablet ? 'body2' : 'h6'} color="whitesmoke">
          {label}
        </Typography>
      </Grid>
    </Grid>
  );
};

const WhyTb = () => {
  const theme = useTheme();
  const { Phone, SmallDesktop, Desktop } = useResponsive();
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
    <Box bgcolor={theme.palette.primary.main}>
      <Rectangle size={Phone ? 'xs' : 'sm'} />
      <Grid container direction="column">
        <Container
          py={Phone ? theme.spacing(4) : theme.spacing(12)}
          size={Phone ? 'sm' : SmallDesktop ? 'md' : Desktop ? 'lg' : 'xl'}
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
              color={theme.palette.primary.main}
              variant={Phone ? 'h6' : 'h5'}
            >
              TB?
            </Typography>
          </Grid>
          <Grid mt={theme.spacing(3)} container direction="column" spacing={4}>
            {POINTS?.map((point, idx) => (
              <Grid item key={idx}>
                <BulletLists label={point} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Polygon size="xl" />
        <Polygon size="xl" />
      </Grid>
    </Box>
  );
};

export default WhyTb;
