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
//* Components
import CardNewsEvent from '@/components/NewsEvents/CardNewsEvent';
import Container from '@/components/Container';
//* Sanity
import sanityClient from 'client';
import { ALL_NEWS_AND_EVENTS, NEWS_AND_EVENTS_COUNT } from '@/utils/groq';

interface NewsAndEventsPageProps {
  newsEvents: {
    _id: string;
    mainImageUrl: string;
    title: string;
    bodySnippet: string;
    publishedAt: string;
    slug: {
      current: string;
    };
  }[];
  newsEventsCount: number;
  error: boolean;
}

export default function NewsAndEventsPage({
  newsEvents,
  newsEventsCount,
  error,
}: NewsAndEventsPageProps) {
  /** Utilities */
  const theme = useTheme();
  const { Phone, SmallDesktop, Desktop } = useResponsive();

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'));
  console.log(newsEvents, '<<< newsEvents');

  return (
    <Box mt={largerThanPhone || Phone ? theme.spacing(12) : theme.spacing(8)}>
      <Container
        py={Phone ? theme.spacing(4) : theme.spacing(8)}
        size={Phone ? 'sm' : SmallDesktop ? 'md' : Desktop ? 'lg' : 'xl'}
      >
        <Grid
          container
          spacing={3}
          // minHeight="100vh"
          // marginTop={theme.spacing(20)}
          // padding={10}
        >
          <Grid item mt={2} mb={4} xs={12}>
            <Typography color="primary" variant="h5">
              Berita & Acara
            </Typography>
          </Grid>
          {newsEvents?.length
            ? newsEvents?.map((data) => (
                <Grid item xs={4} key={data?._id}>
                  <CardNewsEvent
                    imgUrl={data?.mainImageUrl}
                    publishedAt={data?.publishedAt}
                    title={data?.title}
                    body={data?.bodySnippet}
                  />
                </Grid>
              ))
            : null}
        </Grid>
      </Container>
    </Box>
  );
}

export async function getServerSideProps({
  query,
}: {
  query: { page: number };
}) {
  // const { searchText, tag, category, page = 1 } = query;

  // const getAdditionalGroqQuery = () => {
  //   let additionalQuery = "";
  //   if (searchText) {
  //     additionalQuery += `&& (body[].children[].text match "${searchText}" || title match "${searchText}" || description match "${searchText}")`;
  //   }
  //   if (tag) {
  //     additionalQuery += `&& "${tag}" in tags`;
  //   }
  //   if (category) {
  //     additionalQuery += `&& "${category}" in categories[]->title`;
  //   }
  //   return additionalQuery;
  // };

  // ? Pagination
  // TODO: Handle pagination
  // const limitPerPage = 6;
  // const start =
  //   page === "1" && !getAdditionalGroqQuery()
  //     ? page
  //     : (page - 1) * limitPerPage + (getAdditionalGroqQuery() ? 0 : 1);
  // const end = +start + limitPerPage;

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
  let newsEvents;
  let newsEventsCount;
  // let allCategories;
  // let mainBlog = "";
  let error = false;

  try {
    newsEvents = await sanityClient.fetch(ALL_NEWS_AND_EVENTS, {
      today: new Date(),
      // start: +start,
      // end: +end,
    });

    newsEventsCount = await sanityClient.fetch(NEWS_AND_EVENTS_COUNT, {
      today: new Date(),
    });

    // allCategories = await client.fetch(GET_ALL_CATEGORIES);

    // mainBlog = await client.fetch(GET_MAIN_BLOG, { today: new Date() });
  } catch (err) {
    error = true;
  }

  return {
    props: {
      newsEvents,
      newsEventsCount,
      // allCategories,
      // limit: limitPerPage,
      // mainBlog,
      error,
    },
  };
}

// export default NewsAndEventsPage;
