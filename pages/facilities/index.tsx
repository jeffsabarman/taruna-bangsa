import React, { useState } from 'react';
import HeaderLayout from '@/components/HeaderLayout';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import FacilityImage from '@/components/Facilities/FacilityImage';
import FacilitiesSlider from '@/components/Facilities/FacilitiesSlider';

export type Image = {
  image: string;
  title: string;
};

const facilities = [
  {
    image:
      'https://images.unsplash.com/photo-1497465689543-5940d3cede89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Gedung Sekolah',
  },
  {
    image:
      'https://images.unsplash.com/photo-1497465689543-5940d3cede89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Gedung Sekolah',
  },
  {
    image:
      'https://images.unsplash.com/photo-1497465689543-5940d3cede89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Gedung Sekolah',
  },
  {
    image:
      'https://images.unsplash.com/photo-1497465689543-5940d3cede89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Gedung Sekolah',
  },
  {
    image:
      'https://images.unsplash.com/photo-1497465689543-5940d3cede89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Gedung Sekolah',
  },
  {
    image:
      'https://images.unsplash.com/photo-1497465689543-5940d3cede89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    title: 'Gedung Sekolah',
  },
];

const Facilities = () => {
  /** Utilities */
  const theme = useTheme();
  const { Phone, Tablet } = useResponsive();
  const [focusImageIndex, setFocusImageIndex] = useState(0);
  const [showSlider, setShowSlider] = useState(false);

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'));

  /** Function */
  const handleZoomImage = (index: number) => {
    setShowSlider(true);
    setFocusImageIndex(index);
  };

  return (
    <>
      <Box mt={largerThanPhone || Phone ? theme.spacing(12) : theme.spacing(8)}>
        <Box bgcolor={theme.palette.primary.main}>
          <Grid container direction="column">
            <HeaderLayout
              mode="dark"
              title="Fasilitas"
              subtitle="We are a school that empowers students to thrive in academic excellence; personal, social and emotional growth that are needed for success in their live and livelihood."
            >
              <Grid mt={Phone ? 1 : 3} container spacing={3}>
                {facilities?.map((fac, index) => (
                  <Grid
                    xs={Phone ? 12 : Tablet ? 6 : 4}
                    item
                    key={index}
                    mb={Phone ? 2 : 0}
                  >
                    <FacilityImage
                      handleClick={() => handleZoomImage(index)}
                      title="Gedung Sekolah"
                      image={fac.image}
                    />
                  </Grid>
                ))}
              </Grid>
            </HeaderLayout>
          </Grid>
        </Box>
      </Box>
      <FacilitiesSlider
        open={showSlider}
        handleClose={() => setShowSlider(false)}
        image={facilities[focusImageIndex]}
      />
    </>
  );
};

export default Facilities;
