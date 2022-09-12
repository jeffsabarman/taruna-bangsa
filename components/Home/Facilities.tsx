import styled from '@emotion/styled';
import { Box, BoxProps, Grid, useTheme, useMediaQuery } from '@mui/material';
import React, { CSSProperties, FC, ReactNode, useState } from 'react';
import HeaderLayout from '../HeaderLayout';
import { useResponsive } from 'helpers/custom-hooks';
import { SliderCarousel } from '../Carousel';
import Pool from '@/public/images/swimming-pool.jpg';
import GalleryImage from '../shared/GalleryImage';
import FacilityImage from '../Facilities/FacilityImage';
import FacilitiesSlider from '../Facilities/FacilitiesSlider';
import { FACILITIES } from 'helpers/constants';

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
  const [focusImageKey, setFocusImageKey] = useState('');
  const [showSlider, setShowSlider] = useState(false);

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'));
  const customLargerPhone = useMediaQuery('(max-width:800px)');

  /** Function */
  const handleZoomImage = (key: string) => {
    setShowSlider(true);
    setFocusImageKey(key);
  };

  return (
    <Box bgcolor={theme.palette.primary.main}>
      <Grid container direction="column">
        <HeaderLayout
          mode="dark"
          title="Fasilitas"
          subtitle="We are a school that empowers students to thrive in academic excellence; personal, social and emotional growth that are needed for success in their live and livelihood."
        >
          <Grid mt={1} container spacing={3}>
            {FACILITIES?.map((fac, index) => (
              <Grid
                xs={customLargerPhone ? 12 : SmallDesktop ? 6 : 4}
                item
                key={index}
                mb={customLargerPhone ? 2 : 0}
              >
                <FacilityImage
                  handleClick={() => handleZoomImage(fac.key)}
                  title={fac.title}
                  image={fac.image}
                />
              </Grid>
            ))}
          </Grid>
        </HeaderLayout>
      </Grid>
      <FacilitiesSlider
        open={showSlider}
        handleClose={() => setShowSlider(false)}
        focusImage={focusImageKey}
      />
    </Box>
  );
};

export default Facilities;
