import React, { useCallback } from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, Grid } from '@mui/material';
import { Image } from 'pages/facilities';
import { HeroCarousel, SliderCarousel } from '../Carousel';
import { useResponsive } from 'helpers/custom-hooks';

type FacilitiesSliderProps = {
  open: boolean;
  handleClose: () => void;
  focusImage: string;
};

/** Mocked Data */
const POOL_IMAGES = [
  {
    url: 'images/swimming-pool.jpg',
    alt: 'facil image',
  },
  {
    url: 'images/swimming-pool-2.jpg',
    alt: 'facil image',
  },
  {
    url: 'images/swimming-pool-3.jpg',
    alt: 'facil image',
  },
];

const BASKETBALL_IMAGES = [
  {
    url: 'images/basketball.jpg',
    alt: 'facil image',
  },
  {
    url: 'images/basketball-2.jpg',
    alt: 'facil image',
  },
  {
    url: 'images/basketball-3.jpg',
    alt: 'facil image',
  },
];
const BIOLOGY_IMAGES = [
  {
    url: 'images/biology-lab.jpg',
    alt: 'facil image',
  },
  {
    url: 'images/biology-lab-2.jpg',
    alt: 'facil image',
  },
  {
    url: 'images/biology-lab-3.jpg',
    alt: 'facil image',
  },
];
const ROBOTIC_IMAGES = [
  {
    url: 'images/robotic-lab.jpg',
    alt: 'facil image',
  },
  {
    url: 'images/robotic-lab-2.jpg',
    alt: 'facil image',
  },
  {
    url: 'images/robotic-lab-3.jpg',
    alt: 'facil image',
  },
];
const PLAYGROUND_IMAGES = [
  {
    url: 'images/playground.jpg',
    alt: 'facil image',
  },
  {
    url: 'images/playground-2.jpg',
    alt: 'facil image',
  },
  {
    url: 'images/playground-3.jpg',
    alt: 'facil image',
  },
];
const OPEN_SPACE_IMAGES = [
  {
    url: 'images/open-space.jpg',
    alt: 'facil image',
  },
  {
    url: 'images/open-space-2.jpg',
    alt: 'facil image',
  },
  {
    url: 'images/open-space-3.jpg',
    alt: 'facil image',
  },
];

const FacilitiesSlider = ({
  open,
  handleClose,
  focusImage,
}: FacilitiesSliderProps) => {
  /** Utilities */
  const { Phone, Tablet, SmallDesktop, Desktop } = useResponsive();

  const getImages = useCallback(() => {
    switch (focusImage) {
      case 'pool':
        return POOL_IMAGES;
      case 'biology':
        return BIOLOGY_IMAGES;
      case 'robotic':
        return ROBOTIC_IMAGES;
      case 'playground':
        return PLAYGROUND_IMAGES;
      case 'open-space':
        return OPEN_SPACE_IMAGES;
      case 'basketball':
        return BASKETBALL_IMAGES;
    }
  }, [focusImage]);

  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby=""
    >
      <Grid container width={'55vw'} sx={{ p: 4 }}>
        <SliderCarousel
          paginationBottom={Tablet ? '1rem' : '-2rem'}
          images={getImages()}
          themeColor="lightblue"
        />
      </Grid>
    </Dialog>
  );
};

export default FacilitiesSlider;
