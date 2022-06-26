import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import React from 'react';
import Container from '@/components/Container';
import AcademicCard, { Academic } from '../AcademicCard';

const ACADEMICS_LIST: Array<Academic> = [
  {
    avatar:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2244&q=80',
    title: 'kb/tk',
    subtitle:
      'We are a school that empowers students to thrive in academic excellence; personal, social and emotional growth that are needed for success in their live and livelihood.',
    color: 'yellow',
    url: '/academics/kb-tk',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2244&q=80',
    title: 'sd',
    subtitle:
      'We are a school that empowers students to thrive in academic excellence; personal, social and emotional growth that are needed for success in their live and livelihood.',
    color: 'red',
    url: '/academics/sd',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2244&q=80',
    title: 'smp',
    subtitle:
      'We are a school that empowers students to thrive in academic excellence; personal, social and emotional growth that are needed for success in their live and livelihood.',
    color: 'lightblue',
    url: '/academics/smp',
  },
  {
    avatar:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2244&q=80',
    title: 'sma',
    subtitle:
      'We are a school that empowers students to thrive in academic excellence; personal, social and emotional growth that are needed for success in their live and livelihood.',
    color: 'grey',
    url: '/academics/sma',
  },
];

const Academics = () => {
  const theme = useTheme();
  const { Phone, SmallDesktop, Desktop } = useResponsive();

  return (
    <Box>
      <Grid container direction="column">
        <Container
          py={Phone ? theme.spacing(4) : theme.spacing(12)}
          size={Phone ? 'sm' : SmallDesktop ? 'md' : Desktop ? 'lg' : 'xl'}
        >
          <Grid item xs justifyContent="center" alignItems="center">
            <Typography
              variant={Phone ? 'h6' : 'h4'}
              color="primary"
              textAlign="center"
            >
              Academics
            </Typography>
            <Container size="xl">
              <Typography
                variant={Phone ? 'body2' : 'body1'}
                mt={theme.spacing(4)}
                textAlign="center"
                color="GrayText"
              >
                We are a school that empowers students to thrive in academic
                excellence; personal, social and emotional growth that are
                needed for success in their live and livelihood.
              </Typography>
            </Container>
          </Grid>
          <Grid
            mt={theme.spacing(4)}
            justifyContent="center"
            alignItems="center"
            container
            item
            xs
            spacing={4}
          >
            {ACADEMICS_LIST?.map((academic: Academic, idx) => (
              <Grid item xs={12} sm={6} lg={3} key={idx}>
                <AcademicCard data={academic} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Grid>
    </Box>
  );
};

export default Academics;
