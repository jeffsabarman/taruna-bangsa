import {
  Box,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Pagination,
  Button,
} from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import React, { useEffect, useState } from 'react';
//* Components
import CardNewsEvent from '@/components/NewsEvents/CardNewsEvent';
import Container from '@/components/Container';
//* Sanity
import sanityClient from 'client';
import groq from 'groq';
import { NEWS_AND_EVENTS_COUNT } from '@/utils/groq';
import { useRouter } from 'next/router';

// interface NewsAndEventsPageProps {
//   newsEvents: {
//     _id: string;
//     mainImageUrl: string;
//     title: string;
//     description: string;
//     mainImageCaption: string;
//     // bodySnippet: any;
//     publishedAt: string;
//     slug: {
//       current: string;
//     };
//   }[];
//   newsEventsCount: number;
//   limit: number;
//   error: boolean;
// }

export default function NewsAndEventsPage() {
  //   {
  //   newsEvents,
  //   newsEventsCount,
  //   limit,
  //   error,
  // }: NewsAndEventsPageProps

  /** Utilities */
  const router = useRouter();
  const { page } = router?.query;
  const theme = useTheme();
  const { Phone, Tablet, SmallDesktop, Desktop } = useResponsive();

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'));
  const customPhone = useMediaQuery('(max-width:700px)');

  /** State */
  const [counterPage, setCounterPage] = useState(1);
  const [newsEventsData, setNewsEventsData] = useState<
    {
      _id: string;
      mainImageUrl: string;
      title: string;
      description: string;
      mainImageCaption: string;
      // bodySnippet: any;
      publishedAt: string;
      slug: {
        current: string;
      };
    }[]
  >([]);
  const [dataCount, setDataCount] = useState(0);

  /** Functions */
  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    // setCurrentPage(value);
    router.push(
      `/news-and-events?page=${value}`,
      // `/blogs?page=${value}${getAdditionalQueryParamsBlog(
      //   searchText,
      //   router?.query?.category,
      //   router?.query?.tag
      // )}`
    );
  };

  const getData = async (
    start: number,
    end: number,
    groqAllNewsEvents: any,
  ) => {
    const newsEvents = await sanityClient.fetch(groqAllNewsEvents, {
      today: new Date(),
      start: +start,
      end: +end,
    });
    setNewsEventsData(newsEventsData.concat(newsEvents));

    if (!dataCount) {
      const newsEventsCount = await sanityClient.fetch(NEWS_AND_EVENTS_COUNT, {
        today: new Date(),
      });
      setDataCount(newsEventsCount);
    }
  };

  /** Hooks */

  useEffect(() => {
    // ? Pagination for load more
    const limitPerPage = 6;
    const start =
      counterPage === 1 ? +counterPage - 1 : (+counterPage - 1) * limitPerPage;
    const end = +start + limitPerPage;

    const ALL_NEWS_AND_EVENTS = groq`
        *[_type == "newsEvents" && !(_id in path('drafts.**'))  && isVisible == true && publishedAt < $today ] | order(publishedAt desc) [$start...$end] {
          _id,
          title,
          slug,
          description,
          "mainImageUrl": mainImage.asset->url,
          "mainImageCaption": mainImage.caption,
          publishedAt,
        }
        `;

    getData(start, end, ALL_NEWS_AND_EVENTS);
  }, [counterPage]);

  return (
    <Box mt={largerThanPhone || Phone ? theme.spacing(12) : theme.spacing(8)}>
      <Container
        py={Phone ? theme.spacing(4) : theme.spacing(8)}
        size={Phone ? 'sm' : SmallDesktop ? 'md' : Desktop ? 'lg' : 'xl'}
      >
        <Grid
          container
          spacing={Tablet ? 3 : Desktop ? 6 : 4}
          // minHeight="100vh"
          // marginTop={theme.spacing(20)}
          // padding={10}
        >
          <Grid item mt={2} mb={4} xs={12}>
            <Typography color="primary" variant="h5">
              Berita & Acara
            </Typography>
          </Grid>
          {/* {newsEvents?.length
            ? newsEvents?.map((data) => ( */}
          {newsEventsData?.length
            ? newsEventsData?.map((data) => (
                <Grid
                  item
                  xs={customPhone ? 12 : Desktop ? 6 : 4}
                  key={data?._id}
                  mb={2}
                >
                  <CardNewsEvent
                    imgUrl={data?.mainImageUrl}
                    publishedAt={data?.publishedAt}
                    title={data?.title}
                    description={data?.description}
                    imgCaption={data?.mainImageCaption}
                    // body={data?.bodySnippet}
                    slug={data?.slug?.current}
                  />
                </Grid>
              ))
            : null}
          <Grid
            item
            container
            justifyContent="center"
            style={{ marginTop: theme.spacing(4) }}
          >
            {/* <Pagination
              count={Math.ceil(newsEventsCount / limit)}
              color="primary"
              onChange={handleChangePage}
            /> */}
            {newsEventsData?.length < dataCount && (
              <Button
                variant="contained"
                disableElevation
                onClick={() => setCounterPage(counterPage + 1)}
              >
                Load More
              </Button>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// export async function getServerSideProps({
//   query,
// }: {
//   query: { page: number };
// }) {
//   // const { searchText, tag, category, page = 1 } = query;
//   const { page = '1' } = query;

//   // ? Default Value
//   let newsEvents;
//   let newsEventsCount;
//   // let allCategories;
//   // let mainBlog = "";
//   let error = false;

//   // ? Pagination
//   const limitPerPage = 1;
//   const start = page === '1' ? +page - 1 : (+page - 1) * limitPerPage;
//   const end = +start + limitPerPage;

//   try {
//     const ALL_NEWS_AND_EVENTS = groq` // TODO: Add pagination
//       *[_type == "newsEvents" && !(_id in path('drafts.**'))  && isVisible == true && publishedAt < $today ] | order(publishedAt desc) [$start...$end] {
//         _id,
//         title,
//         slug,
//         description,
//         "mainImageUrl": mainImage.asset->url,
//         "mainImageCaption": mainImage.caption,
//         publishedAt,
//       }
//       `;

//     newsEvents = await sanityClient.fetch(ALL_NEWS_AND_EVENTS, {
//       today: new Date(),
//       start: +start,
//       end: +end,
//     });

//     newsEventsCount = await sanityClient.fetch(NEWS_AND_EVENTS_COUNT, {
//       today: new Date(),
//     });
//   } catch (err) {
//     error = true;
//   }

//   return {
//     props: {
//       newsEvents,
//       newsEventsCount,
//       // allCategories,
//       limit: limitPerPage,
//       // mainBlog,
//       error,
//     },
//   };
// }
