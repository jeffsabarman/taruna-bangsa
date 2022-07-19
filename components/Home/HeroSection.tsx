import { ArrowForward, ArrowRightAlt } from '@mui/icons-material';
import {
  Box,
  BoxProps,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { useResponsive } from 'helpers/custom-hooks';
import { HeroCarousel } from '@/components/Carousel';

const HeroSection: FC = (props) => {
  /** Utilities */
  const theme = useTheme();
  const { Phone, Tablet, SmallDesktop, Desktop } = useResponsive();

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'));

  /** Mocked Data */
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
      link: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
      link: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
      link: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
      link: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    },
  ];

  return (
    <Box
      position="relative"
      mt={largerThanPhone || Phone ? theme.spacing(12) : theme.spacing(8)}
      {...props}
    >
      <Grid
        container
        // sx={{ height: SmallDesktop ? '60vh' : Desktop ? '80vh' : '90vh' }}
        // sx={{ height: SmallDesktop ? '70vw' : Desktop ? '80vw' : '90vh' }}
        sx={{
          height: Phone ? '70vw' : Tablet ? '65vw' : '50vw',
        }}
      >
        <Grid item xs>
          <HeroCarousel
            enableAutoPlay
            autoPlaySpeed={4000}
            showArrows={false}
            images={images}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
