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
    image: 'images/swimming-pool.jpg',
    title: 'Kolam Renang',
    key: 'pool',
  },
  {
    image: 'images/basketball.jpg',
    title: 'Lapangan Basket',
    key: 'basketball',
  },
  {
    image: 'images/biology-lab.jpg',
    title: 'Lab. Biologi',
    key: 'biology',
  },
  {
    image: 'images/robotic-lab.jpg',
    title: 'Lab. Robotic',
    key: 'robotic',
  },
  {
    image: 'images/playground.jpg',
    title: 'Playground',
    key: 'playground',
  },
  {
    image: 'images/open-space.jpg',
    title: 'Ruang Terbuka',
    key: 'open-space',
  },
];

const Facilities = () => {
  /** Utilities */
  const theme = useTheme();
  const { Phone, Tablet } = useResponsive();
  const [focusImageKey, setFocusImageKey] = useState('');
  const [showSlider, setShowSlider] = useState(false);

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'));

  /** Function */
  const handleZoomImage = (key: string) => {
    setShowSlider(true);
    setFocusImageKey(key);
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
                      handleClick={() => handleZoomImage(fac.key)}
                      title={fac.title}
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
        focusImage={focusImageKey}
      />
    </>
  );
};

export default Facilities;
