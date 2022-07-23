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
import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useResponsive } from 'helpers/custom-hooks';
import { HeroCarousel } from '@/components/Carousel';
//* Sanity
import sanityClient from 'client';
import { MAIN_CAROUSEL_IMAGES } from 'utils/groq';

/** Mocked Data */
// const images = [
//   {
//     url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
//     link: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
//     link: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
//   },
// ];

/** Mocked Data */
// const images = [
//   {
//     url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
//     link: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
//     link: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//     link: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
//     link: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
//   },
// ];

const HeroSection: FC = (props) => {
  /** Utilities */
  const theme = useTheme();
  const { Phone, Tablet, SmallDesktop, Desktop } = useResponsive();

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'));

  /** State */
  const [images, setImages] = useState<
    { url: string; link: string; alt: string }[]
  >([]);

  /** Functions */
  const getMainCarouselImages = async () => {
    try {
      const mainCarouselImages = await sanityClient.fetch(MAIN_CAROUSEL_IMAGES);
      setImages(
        mainCarouselImages?.map(
          (image: {
            _id: string;
            alt: string;
            url: string;
            urlSmall: string;
            link: string;
          }) => {
            return {
              url: image?.url,
              urlSmall: image?.urlSmall,
              link: image?.link,
              alt: image?.alt,
            };
          },
        ),
      );
    } catch (err) {
      console.log(err, '<<< errr');
    }
  };

  /** Hooks */
  useEffect(() => {
    getMainCarouselImages();
  }, []);

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
            autoPlaySpeed={5000}
            showArrows={false}
            paginationBottom={Tablet ? '1rem' : '2rem'}
            images={images}
            themeColor="lightblue"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
