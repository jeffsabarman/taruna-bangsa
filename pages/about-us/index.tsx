import HeadMasterTestimony from '@/components/Academics/HeadMasterTestimony';
import VisionMission from '@/components/Academics/VisionMission';
import { HeroCarousel, TeacherCarousel } from '@/components/Carousel';
import Container from '@/components/Container';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import React, { FC } from 'react';
import headMasterPic from '@/public/images/lingling.png';
import HeaderLayout from '@/components/HeaderLayout';
import Academics from '@/components/Home/Academics';

/** Mocked Data */
const images = [
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
    link: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
  },
  {
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
    link: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
  },
];

const teachers = [
  {
    image:
      'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Mr.John Doe',
    role: 'Wali Kelas TK - A',
  },
  {
    image:
      'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Mr.John Doe',
    role: 'Wali Kelas TK - A',
  },
  {
    image:
      'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Mr.John Doe',
    role: 'Wali Kelas TK - A',
  },
  {
    image:
      'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Mr.John Doe',
    role: 'Wali Kelas TK - A',
  },
];

const AboutUsPage: FC = (props) => {
  /** Utilities */
  const theme = useTheme();
  const { Phone, SmallDesktop, Desktop } = useResponsive();

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <Box
        position="relative"
        mt={largerThanPhone || Phone ? theme.spacing(12) : theme.spacing(8)}
        {...props}
      >
        <Grid
          container
          sx={{ height: SmallDesktop ? '60vh' : Desktop ? '80vh' : '90vh' }}
        >
          <Grid item xs>
            <HeroCarousel enableAutoPlay showArrows={false} images={images} />
          </Grid>
        </Grid>
      </Box>
      <Container
        py={SmallDesktop ? theme.spacing(1) : theme.spacing(4)}
        size={Phone ? 'xs' : SmallDesktop ? 'sm' : 'md'}
      >
        <HeadMasterTestimony
          themeColor="red"
          headMasterImage={headMasterPic}
          testimony="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          headMasterName="Ling Ling Dewi Murniati, S.E."
          headMasterRole="Direktur Eksekutif Sekolah Taruna Bangsa"
          testimonialSenderRole="Direktur Eksekutif STB"
          inverted
        />

        <Container size="lg" my={8}>
          <VisionMission
            themeColor="red"
            vision="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            mission="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </Container>
      </Container>
      <Box bgcolor={theme.palette.primary.main}>
        <Container
          py={SmallDesktop ? theme.spacing(1) : theme.spacing(4)}
          size={Phone ? 'xs' : SmallDesktop ? 'sm' : 'md'}
        >
          <Container size="lg" py={8}>
            <Typography
              variant={Phone ? 'h6' : 'h4'}
              color="whitesmoke"
              textAlign="center"
            >
              Pengurus Yayasan Pendidikan Taruna Bangsa
            </Typography>
            <Box mt={theme.spacing(8)}>
              <TeacherCarousel themeColor="white" teachersList={teachers} />
            </Box>
          </Container>
        </Container>
      </Box>
      <Academics />
    </>
  );
};

export default AboutUsPage;
