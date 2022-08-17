import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import React from 'react';
import { getFormatDate } from 'helpers';
import { grey } from '@mui/material/colors';
//* Sanity
import sanityClient from 'client';
import { NEWS_AND_EVENTS_CONTENT } from '@/utils/groq';
import { PortableText } from '@portabletext/react';
import { contentComponents } from '@/components/shared/PortableTextComponent';

interface NewsAndEventsPageProps {
  newsEventsContent: {
    _id: string;
    body: any;
    title: string;
    mainImageUrl: string;
    mainImageCaption: string;
    publishedAt: string;
  };
  error: boolean;
}

export default function NewsAndEventsPage({
  newsEventsContent,
  error,
}: NewsAndEventsPageProps) {
  /** Utilities */
  const theme = useTheme();
  const { Phone, SmallDesktop, Tablet, Desktop } = useResponsive();

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box
      mt={largerThanPhone || Phone ? theme.spacing(12) : theme.spacing(8)}
      py={theme.spacing(6)}
      px={Phone ? '10vw' : Tablet ? '16vw' : SmallDesktop ? '22vw' : '24vw'}
    >
      <Grid container spacing={2} direction="column">
        <Grid item mt={2}>
          <Typography variant="body2" fontWeight={600} color={grey[600]}>
            {getFormatDate(newsEventsContent?.publishedAt)}
          </Typography>
        </Grid>
        <Grid item mb={4} xs={12}>
          <Typography
            color="primary"
            variant={Phone ? 'h6' : 'h5'}
            lineHeight="2.4rem"
          >
            {newsEventsContent?.title}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item width="100%">
              <img
                src={newsEventsContent?.mainImageUrl}
                style={{
                  width: '100%',
                  height: Phone ? '44vw' : SmallDesktop ? '34vw' : '30vw',
                  objectFit: 'cover',
                }}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption" sx={{ color: grey[500] }}>
                {newsEventsContent?.mainImageCaption}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <PortableText
            value={newsEventsContent?.body}
            components={contentComponents}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export async function getServerSideProps({
  query,
}: {
  query: { slug: string };
}) {
  const { slug = '' } = query;

  // ? Default Value
  let newsEventsContent;
  let error = false;

  try {
    newsEventsContent = await sanityClient.fetch(NEWS_AND_EVENTS_CONTENT, {
      slug,
    });
  } catch (err) {
    error = true;
  }

  return {
    props: {
      newsEventsContent,
      error,
    },
  };
}
