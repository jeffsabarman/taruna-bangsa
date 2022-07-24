import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import HeaderLayout from '../HeaderLayout';
import { useResponsive } from 'helpers/custom-hooks';
//* Sanity
import sanityClient from 'client';
import { YOUTUBE_EMBED } from '@/utils/groq';

const YoutubeChanel = () => {
  /** State */
  const [youtubeEmbedLink, setYoutubeEmbedLink] = useState('');

  /** Functions */
  const getYoutubeEmbed = async () => {
    const youtubeEmbed = await sanityClient.fetch(YOUTUBE_EMBED);
    setYoutubeEmbedLink(youtubeEmbed?.link);
  };

  /** Hooks */
  useEffect(() => {
    getYoutubeEmbed();
  }, []);

  //   return (
  //     <HeaderLayout title="Subscribe Channel Youtube Kami">
  //       <Grid item>
  //         <iframe
  //           width="560"
  //           height="315"
  //           // src="https://www.youtube.com/embed/W_EBn918k4E"
  //           src={youtubeEmbedLink}

  // const YoutubeChanel = () => {

  /** Media Query */
  const { Phone, SmallDesktop } = useResponsive();

  return (
    <HeaderLayout title="Subscribe Channel Youtube Kami">
      <Grid item sx={{ mt: Phone ? 0 : SmallDesktop ? 4 : 8 }}>
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
    </HeaderLayout>
  );
};

export default YoutubeChanel;
