import {
  Box,
  Grid,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { PrimaryButton } from '../Button';
import HeaderLayout from '../HeaderLayout';
import { styled } from '@mui/material/styles';
import { useResponsive } from 'helpers/custom-hooks';
import LoadingComponent from '../shared/LoadingComponent';
//* Sanity
import sanityClient from 'client';
import { INSTAGRAM_POSTS } from '@/utils/groq';

const StyledImage = styled('img')(({ theme }) => ({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  borderRadius: '0.3rem',
  '&:hover': {
    cursor: 'pointer',
  },
}));

const SocialMedia = () => {
  const theme = useTheme();

  //* Media Query
  const { Phone } = useResponsive();
  const customPhone = useMediaQuery('(max-width:480px)');

  //* State
  const [instagramPosts, setInstagramPosts] = useState<
    { _id: string; image: string; link: string; postTitle: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  //* Functions
  const getInstagramPosts = async () => {
    setIsLoading(true);
    const data = await sanityClient.fetch(INSTAGRAM_POSTS);
    setInstagramPosts(data);
    setIsLoading(false);
  };

  //* Hooks
  useEffect(() => {
    getInstagramPosts();
  }, []);

  return (
    <Box bgcolor={theme.palette.primary.main}>
      <HeaderLayout mode="dark" title="Ikuti Sosial Media Kami">
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          px={customPhone ? theme.spacing(4) : Phone ? theme.spacing(12) : 0}
        >
          {isLoading ? (
            <LoadingComponent />
          ) : instagramPosts?.length ? (
            instagramPosts.map((post) => (
              <Grid item key={post._id} xs={Phone ? 12 : 4}>
                <StyledImage
                  src={post.image}
                  alt={post.postTitle}
                  onClick={() => window.open(post.link)}
                />
              </Grid>
            ))
          ) : null}
        </Grid>
        <Grid item mt={Phone ? 4 : 6} mb={2}>
          <PrimaryButton
            disableElevation
            variant="contained"
            onClick={() =>
              window.open('https://www.instagram.com/tarunabangsasentul/')
            }
          >
            Lihat Lebih Banyak
          </PrimaryButton>
        </Grid>
      </HeaderLayout>
    </Box>
  );
};

export default SocialMedia;
