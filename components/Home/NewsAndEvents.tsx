import { Grid, useTheme } from '@mui/material';
import React from 'react';
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

  return (
    <HeaderLayout title="News / Events" subtitle="">
      <Grid
        container
        xs
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{ mt: theme.spacing(4) }}
      >
        {NEWS_EVENTS?.map(({ imageUrl, caption }, idx) => (
          <Grid item key={idx}>
            <NewsEventsCard
              variant={idx % 2 === 0 ? 'dark' : 'light'}
              {...{ imageUrl, caption }}
            />
          </Grid>
        ))}
      </Grid>
    </HeaderLayout>
  );
};

export default NewsAndEvents;
