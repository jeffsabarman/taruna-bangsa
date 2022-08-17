import React from 'react';
import Dialog from '@mui/material/Dialog';
import { DialogTitle, Grid } from '@mui/material';
import { Image } from 'pages/facilities';
import { HeroCarousel, SliderCarousel } from '../Carousel';
import { useResponsive } from 'helpers/custom-hooks';

type FacilitiesSliderProps = {
  open: boolean;
  handleClose: () => void;
  image: Image;
};

/** Mocked Data */
const images = [
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
    alt: 'facil image',
    link: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    alt: 'facil image',
    link: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
    alt: 'facil image',
    link: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80',
    alt: 'facil image',
    link: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
  },
];

const FacilitiesSlider = ({ open, handleClose }: FacilitiesSliderProps) => {
  /** Utilities */
  const { Phone, Tablet, SmallDesktop, Desktop } = useResponsive();

  return (
    <Dialog maxWidth="lg" open={open} onClose={handleClose} aria-labelledby="">
      <DialogTitle>Gedung Sekolah</DialogTitle>
      <Grid container width={'55vw'} sx={{ p: 4 }}>
        <SliderCarousel
          paginationBottom={Tablet ? '1rem' : '2rem'}
          images={images}
          themeColor="lightblue"
        />
      </Grid>
    </Dialog>
  );
};

export default FacilitiesSlider;
