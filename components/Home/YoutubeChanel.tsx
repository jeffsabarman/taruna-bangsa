import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import HeaderLayout from '../HeaderLayout';
import { useResponsive } from 'helpers/custom-hooks';
import LoadingComponent from '../shared/LoadingComponent';
//* Sanity
import sanityClient from 'client';
import { YOUTUBE_EMBED } from '@/utils/groq';

const YoutubeChanel = () => {
  /** State */
  const [youtubeEmbedLink, setYoutubeEmbedLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  /** Functions */
  const getYoutubeEmbed = async () => {
    setIsLoading(true);
    const youtubeEmbed = await sanityClient.fetch(YOUTUBE_EMBED);
    setYoutubeEmbedLink(youtubeEmbed?.link);
    setIsLoading(false);
  };

  /** Hooks */
  useEffect(() => {
    getYoutubeEmbed();
  }, []);

  /** Media Query */
  const { Phone, SmallDesktop } = useResponsive();

  return (
    <HeaderLayout title="Subscribe Channel Youtube Kami">
      {isLoading ? (
        <Grid item>
          <LoadingComponent />
        </Grid>
      ) : (
        <Grid item sx={{ mt: Phone ? 0 : SmallDesktop ? 4 : 0 }}>
          <iframe
            // src="https://www.youtube.com/embed/kGexUZIDsQI"
            src={youtubeEmbedLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: Phone ? '90vw' : '80vw',
              height: Phone ? '50vw' : '45vw',
            }}
          />
        </Grid>
      )}
    </HeaderLayout>
  );
};

export default YoutubeChanel;
