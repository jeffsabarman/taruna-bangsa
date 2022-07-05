import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import { PrimaryButton } from '../Button';
import HeaderLayout from '../HeaderLayout';

const SocialMedia = () => {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.primary.main}>
      <HeaderLayout mode="dark" title="Ikuti Sosial Media Kami">
        <Grid container justifyContent="center" alignItems="center">
          <PrimaryButton disableElevation variant="contained">
            Lihat Lebih Banyak
          </PrimaryButton>
        </Grid>
      </HeaderLayout>
    </Box>
  );
};

export default SocialMedia;
