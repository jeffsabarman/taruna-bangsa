import { Box, Grid, useMediaQuery, useTheme } from '@mui/material'
import { useResponsive } from 'helpers/custom-hooks'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import sanityClient from 'client'
import { PrimaryButton } from '../Button'
import HeaderLayout from '../HeaderLayout'
import NewsEventsCard from '../NewsEventsCard'
import LoadingComponent from '../shared/LoadingComponent'
//* Sanity
import { NEWS_AND_EVENTS_HOME } from '@/utils/groq'

// const NEWS_EVENTS: Array<NewsEvent> = [
//   {
//     imageUrl:
//       'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//     caption: 'Happy Chinese New Year',
//   },
//   {
//     imageUrl:
//       'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//     caption: 'Happy Chinese New Year',
//   },
//   {
//     imageUrl:
//       'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//     caption: 'Happy Chinese New Year',
//   },
//   {
//     imageUrl:
//       'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//     caption: 'Happy Chinese New Year',
//   },
// ];

type NewsEvent = {
  _id: string
  imageUrl: string
  caption: string
}

function NewsAndEvents() {
  /** Utilities */
  const theme = useTheme()
  const router = useRouter()

  /** Media Query */
  const { Desktop, Phone, Tablet } = useResponsive()
  const customPhone = useMediaQuery('(max-width:715px)')

  /** State */
  const [newsEvents, setNewsEvents] = useState<NewsEvent[]>([])
  const [isLoading, setIsLoading] = useState(false)

  /** Functions */
  const getNewsEvents = async () => {
    setIsLoading(true)
    const newsEventsData = await sanityClient.fetch(NEWS_AND_EVENTS_HOME)
    setNewsEvents(
      newsEventsData.map((data: NewsEvent) => {
        return {
          ...data,
        }
      })
    )
    setIsLoading(false)
  }

  /** Hooks */
  useEffect(() => {
    getNewsEvents()
  }, [])

  return (
    <HeaderLayout title="News / Events">
      <Grid
        container
        justifyContent="center"
        // alignItems="center"
        spacing={4}
        sx={{ mt: Phone ? 0 : theme.spacing(3) }}
      >
        {isLoading ? (
          <Grid item>
            <LoadingComponent />
          </Grid>
        ) : (
          newsEvents?.map(({ imageUrl, caption, _id }, idx) => (
            <Grid
              item
              xs={customPhone ? 12 : Desktop ? 6 : 3}
              key={_id}
              container
              justifyContent="center"
              sx={{
                mb: Phone ? theme.spacing(2) : Desktop ? theme.spacing(4) : 0,
              }}
            >
              <NewsEventsCard
                variant={idx % 2 === 0 ? 'dark' : 'light'}
                {...{ imageUrl, caption }}
              />
            </Grid>
          ))
        )}
        <Grid item xs={12} container justifyContent="center">
          <Box
            mt={
              Phone
                ? theme.spacing(2)
                : Tablet
                ? theme.spacing(4)
                : theme.spacing(8)
            }
            mb={Phone ? theme.spacing(2) : 0}
          >
            <PrimaryButton
              disableElevation
              variant="contained"
              onClick={() => router.push('/news-and-events')}
            >
              Baca Selengkapnya
            </PrimaryButton>
          </Box>
        </Grid>
      </Grid>
    </HeaderLayout>
  )
}

export default NewsAndEvents
