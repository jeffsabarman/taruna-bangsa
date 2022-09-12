import React, { useState } from 'react';
import HeaderLayout from '@/components/HeaderLayout';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import FacilityImage from '@/components/Facilities/FacilityImage';
import FacilitiesSlider from '@/components/Facilities/FacilitiesSlider';
//@ts-ignore
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { FACILITIES } from 'helpers/constants';

export type Image = {
  image: string;
  title: string;
};

const Facilities = () => {
  /** Utilities */
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
    <>
      <Box mt={largerThanPhone || Phone ? theme.spacing(12) : theme.spacing(8)}>
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
