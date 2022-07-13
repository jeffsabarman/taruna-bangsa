import { Grid } from '@mui/material';
import React from 'react';
import HeaderLayout from '../HeaderLayout';
import { useResponsive } from 'helpers/custom-hooks';

const YoutubeChanel = () => {
  /** Media Query */
  const { Phone, SmallDesktop } = useResponsive();

  return (
    <HeaderLayout title="Subscribe Channel Youtube Kami">
      <Grid item sx={{ mt: Phone ? 0 : SmallDesktop ? 4 : 8 }}>
        <iframe
          src="https://www.youtube.com/embed/kGexUZIDsQI"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            width: '90vw',
            height: Phone ? '50vw' : '45vw',
          }}
        />
      </Grid>
    </HeaderLayout>
  );
};

export default YoutubeChanel;
