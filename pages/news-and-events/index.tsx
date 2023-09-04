import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
  CircularProgress,
} from '@mui/material'
import { useResponsive } from 'helpers/custom-hooks'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
//* Components
//* Sanity
import sanityClient from 'client'
import groq from 'groq'
//* Jotai
import { newsEventsAtom, counterPageAtom, dataCountAtom } from 'pages/_app'
import { useAtom } from 'jotai'
import { NEWS_AND_EVENTS_COUNT } from '@/utils/groq'
import Container from '@/components/Container'
import CardNewsEvent from '@/components/NewsEvents/CardNewsEvent'

// ? For Pagination
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

// ? For Pagination
// export default function NewsAndEventsPage({
//   newsEvents,
//   newsEventsCount,
//   limit,
//   error,
// }: NewsAndEventsPageProps) {

export default function NewsAndEventsPage() {
  /** Utilities */
  const theme = useTheme()
  const { Phone, Tablet, SmallDesktop, Desktop } = useResponsive()

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'))
  const customPhone = useMediaQuery('(max-width:700px)')
  const customSmallDesktop = useMediaQuery('(max-width:1000px)')

  /** State */
  // ? For Load More
  // const [counterPage, setCounterPage] = useState(1);
  // const [newsEventsData, setNewsEventsData] = useState<
  //   {
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
  //   }[]
  // >([]);
  // const [dataCount, setDataCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false)
  const [isClickLoadMore, setIsClickLoadMore] = useState(false)

  /** Jotai */
  const [newsEventsData, setNewsEventsData] = useAtom(newsEventsAtom)
  const [counterPage, setCounterPage] = useAtom(counterPageAtom)
  const [dataCount, setDataCount] = useAtom(dataCountAtom)

  /** Functions */
  // ? For Pagination
  // const handleChangePage = (
  //   event: React.ChangeEvent<unknown>,
  //   value: number,
  // ) => {
  //   // setCurrentPage(value);
  //   router.push(
  //     `/news-and-events?page=${value}`,
  //     // `/blogs?page=${value}${getAdditionalQueryParamsBlog(
  //     //   searchText,
  //     //   router?.query?.category,
  //     //   router?.query?.tag
  //     // )}`
  //   );
  // };

  // ? For Load More
  const getData = async (
    start: number,
    end: number,
    groqAllNewsEvents: any
  ) => {
    setIsLoading(true)
    const newsEvents = await sanityClient.fetch(groqAllNewsEvents, {
      today: new Date(),
      start: +start,
      end: +end,
    })
    setNewsEventsData(newsEventsData.concat(newsEvents))

    if (!dataCount) {
      const newsEventsCount = await sanityClient.fetch(NEWS_AND_EVENTS_COUNT, {
        today: new Date(),
      })
      setDataCount(newsEventsCount)
    }
    setIsLoading(false)
  }

  const handleClickLoadMore = () => {
    setCounterPage(counterPage + 1)
    setIsClickLoadMore(true)
  }

  /** Hooks */
  // ? For Load More
  useEffect(() => {
    // ? Pagination for load more
    const limitPerPage = 6
    const start =
      counterPage === 1 ? +counterPage - 1 : (+counterPage - 1) * limitPerPage
    const end = +start + limitPerPage

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
        `
    if (newsEventsData.length === 0 || isClickLoadMore) {
      getData(start, end, ALL_NEWS_AND_EVENTS)
    }
    setIsClickLoadMore(false)
  }, [counterPage])

  return (
    <Box mt={largerThanPhone || Phone ? theme.spacing(12) : theme.spacing(8)}>
      <Container
        py={Phone ? theme.spacing(4) : theme.spacing(8)}
        size={Phone ? 'sm' : SmallDesktop ? 'md' : Desktop ? 'lg' : 'xl'}
      >
        <Grid
          container
          spacing={Tablet ? 3 : customSmallDesktop ? 6 : Desktop ? 3 : 4}
          px={customSmallDesktop ? 0 : Desktop ? 0 : 8}
          // minHeight="100vh"
          // marginTop={theme.spacing(20)}
          // padding={10}
        >
          <Grid item mt={2} mb={4} xs={12}>
            <Typography color="primary" variant="h5">
              Berita & Acara
            </Typography>
          </Grid>
          {/** // ? For Pagination */}
          {/* {newsEvents?.length
            ? newsEvents?.map((data) => ( */}
          {newsEventsData?.length
            ? newsEventsData?.map((data) => (
                <Grid
                  item
                  xs={customPhone ? 12 : customSmallDesktop ? 6 : 4}
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
            style={{
              marginTop: Phone ? 0 : theme.spacing(2),
              marginBottom: theme.spacing(1),
            }}
          >
            {/** // ? For Pagination */}
            {/* <Pagination
              count={Math.ceil(newsEventsCount / limit)}
              color="primary"
              onChange={handleChangePage}
            /> */}
            <Grid item>
              <Grid
                container
                direction="column"
                spacing={2}
                alignItems="center"
              >
                {isLoading && (
                  <Grid item mb={2}>
                    <CircularProgress
                      style={{
                        color: theme.palette.primary.light,
                        width: Phone ? '3rem' : '4rem',
                        height: Phone ? '3rem' : '4rem',
                      }}
                    />
                  </Grid>
                )}
                <Grid item>
                  {newsEventsData?.length < dataCount && (
                    <Button
                      variant="contained"
                      disableElevation
                      onClick={handleClickLoadMore}
                    >
                      Load More
                    </Button>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

// ? For pagination
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
//   const limitPerPage = 6;
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
