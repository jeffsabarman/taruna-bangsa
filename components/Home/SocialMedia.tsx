import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import { PrimaryButton } from '../Button';
import HeaderLayout from '../HeaderLayout';
import PostCard from '../SocialMedia/PostCard';

const SocialMedia = () => {
  const theme = useTheme();

  return (
    <Box bgcolor={theme.palette.primary.main}>
      <HeaderLayout mode="dark" title="Ikuti Sosial Media Kami">
        <Grid container justifyContent="center" alignItems="center">
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={4}
            my={3}
          >
            <Grid item>
              <PostCard />
            </Grid>
            <Grid item>
              <PostCard />
            </Grid>
            <Grid item>
              <PostCard />
            </Grid>
          </Grid>
          <PrimaryButton sx={{ mt: 3 }} disableElevation variant="contained">
            Lihat Lebih Banyak
          </PrimaryButton>
        </Grid>
      </HeaderLayout>
    </Box>
  );
};

export default SocialMedia;
