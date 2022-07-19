import { Box, Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import React from 'react';
import { PrimaryButton } from '../Button';
import HeaderLayout from '../HeaderLayout';
import NewsEventsCard from '../NewsEventsCard';

type NewsEvent = {
  imageUrl: string;
  caption: string;
};

const NEWS_EVENTS: Array<NewsEvent> = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    caption: 'Happy Chinese New Year',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    caption: 'Happy Chinese New Year',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    caption: 'Happy Chinese New Year',
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    caption: 'Happy Chinese New Year',
  },
];

const NewsAndEvents = () => {
  /** Utilities */
  const theme = useTheme();

  const { Desktop, Phone, Tablet } = useResponsive();
  const customSmallDesktop = useMediaQuery('(max-width:1320px)');

  return (
    <HeaderLayout title="News / Events">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{ mt: Phone ? 0 : theme.spacing(4) }}
      >
        {NEWS_EVENTS?.map(({ imageUrl, caption }, idx) => (
          <Grid
            item
            xs={Phone ? 12 : Desktop ? 6 : 3}
            key={idx}
            container
            justifyContent={'center'}
            sx={{
              mb: Phone ? theme.spacing(2) : Desktop ? theme.spacing(4) : 0,
            }}
          >
            <NewsEventsCard
              variant={idx % 2 === 0 ? 'dark' : 'light'}
              {...{ imageUrl, caption }}
            />
          </Grid>
        ))}
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
            <PrimaryButton disableElevation variant="contained">
              Baca Selengkapnya
            </PrimaryButton>
          </Box>
        </Grid>
      </Grid>
    </HeaderLayout>
  );
};

export default NewsAndEvents;
