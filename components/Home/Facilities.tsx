import styled from '@emotion/styled';
import { Box, BoxProps, Grid, useTheme, useMediaQuery } from '@mui/material';
import React, { CSSProperties, FC, ReactNode } from 'react';
import HeaderLayout from '../HeaderLayout';
import { useResponsive } from 'helpers/custom-hooks';
import { SliderCarousel } from '../Carousel';
import Pool from '@/public/images/swimming-pool.jpg';
import GalleryImage from '../shared/GalleryImage';

// ? For reference
// const images = [
//   {
//     url: 'images/swimming-pool.jpg',
//     alt: 'facil image',
//   },
//   {
//     url: 'images/biology-lab.jpg',
//     alt: 'facil image',
//   },
//   {
//     url: 'images/robotic-lab.jpg',
//     alt: 'facil image',
//   },
//   {
//     url: 'images/basketball.jpg',
//     alt: 'facil image',
//   },
//   {
//     url: 'images/playground.jpg',
//     alt: 'facil image',
//   },
//   {
//     url: 'images/open-space.jpg',
//     alt: 'facil image',
//   },
// ];

const images = [
  {
    original: 'images/swimming-pool.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/biology-lab.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/robotic-lab.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/basketball.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/playground.jpg',
    originalAlt: 'facil image',
  },
  {
    original: 'images/open-space.jpg',
    originalAlt: 'facil image',
  },
];

const Facilities = () => {
  const theme = useTheme();
  const { Phone, Tablet, SmallDesktop } = useResponsive();

  return (
    <Box bgcolor={theme.palette.primary.main}>
      <Grid container direction="column">
        <HeaderLayout
          mode="dark"
          title="Fasilitas"
          subtitle="We are a school that empowers students to thrive in academic excellence; personal, social and emotional growth that are needed for success in their live and livelihood."
        >
          {/* <SliderCarousel // ? For Reference
            paginationBottom={Tablet ? '1rem' : '-2rem'}
            images={images}
            themeColor="lightblue"
            pagination={false}
          /> */}
          <Box maxWidth={Tablet ? '100%' : SmallDesktop ? '75vw' : '60vw'}>
            <GalleryImage
              autoPlay
              slideDuration={800}
              showFullscreenButton
              showPlayButton
              {...{ images }}
            />
          </Box>
        </HeaderLayout>
      </Grid>
    </Box>
  );
};

export default Facilities;
