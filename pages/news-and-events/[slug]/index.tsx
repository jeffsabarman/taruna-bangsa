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
//* Components
import CardNewsEvent from '@/components/NewsEvents/CardNewsEvent';
import Container from '@/components/Container';
//* Sanity
import sanityClient from 'client';
import { NEWS_AND_EVENTS_CONTENT } from '@/utils/groq';
import { PortableText } from '@portabletext/react';
import {
  ptComponents,
  contentComponents,
} from '@/components/shared/PortableTextComponent';

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
      px={Phone ? '10vw' : Tablet ? '16vw' : SmallDesktop ? '22vw' : '26vw'}
    >
      {/* <Container
        py={Phone ? theme.spacing(4) : theme.spacing(8)}
        size={Phone ? 'sm' : SmallDesktop ? 'md' : Desktop ? 'lg' : 'xl'}
      > */}
      <Grid
        container
        spacing={2}
        direction="column"
        // minHeight="100vh"
        // marginTop={theme.spacing(20)}
        // padding={10}
      >
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
                  height: Phone ? '44vw' : SmallDesktop ? '34vw' : '28vw',
                  objectFit: 'cover',
                  //   borderRadius: '0.5rem',
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
        {/* {newsEvents?.length
              ? newsEvents?.map((data) => (
                  <Grid item xs={4} key={data?._id} mb={2}>
                    <CardNewsEvent
                      imgUrl={data?.mainImageUrl}
                      publishedAt={data?.publishedAt}
                      title={data?.title}
                      body={data?.bodySnippet}
                    />
                  </Grid>
                ))
              : null} */}
      </Grid>
      {/* </Container> */}
    </Box>
  );
}

export async function getServerSideProps({
  query,
}: {
  query: { slug: string };
}) {
  const { slug = '' } = query;

  // ? Groq Query
  // const GET_ALL_BLOGS = groq`*[${mainQuery} ${getAdditionalGroqQuery()}] | order(publishedAt desc) [$start...$end]{
  //   _id,
  //   title,
  //   "name": author->name,
  //   "imageLink": body[0]{
  //     markDefs [0] {
  //       href
  //     }
  //   },
  //   slug,
  //   publishedAt,
  //   description,
  //   "categories": categories[]->title,
  // }`;

  // const GET_BLOGS_COUNT = groq`count(*[${mainQuery} ${getAdditionalGroqQuery()}])`;

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

// export default NewsAndEventsPage;
