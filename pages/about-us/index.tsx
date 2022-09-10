import HeadMasterTestimony from '@/components/Academics/HeadMasterTestimony';
import VisionMission from '@/components/Academics/VisionMission';
import {
  HeroCarousel,
  TeacherCarousel,
  TeacherCarouselItem,
} from '@/components/Carousel';
import Container from '@/components/Container';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useBackgroundTypography, useResponsive } from 'helpers/custom-hooks';
import React, { FC, useEffect, useState } from 'react';
import headMasterPic from '@/public/images/lingling.png';
import HeaderLayout from '@/components/HeaderLayout';
import Academics from '@/components/Home/Academics';
import HeroSection from '@/components/Home/HeroSection';

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

const VISSIONS = [
  'Terwujudnya sekolah yang berkarakter Pancasila, Unggul, dan Berprestasi.',
];

const MISSIONS = [
  'Menumbuh-kembangkan karakter warga sekolah sesuai dengan nilai-nilai Pancasila.',
  'Membentuk pribadi yang siap bersaing dalam era globalisasi.',
  'Memotivasi warga sekolah untuk berprestasi dalam segala bidang.',
];

const AboutUsPage: FC = (props) => {
  /** Utilities */
  const theme = useTheme();
  const { Phone, Tablet, SmallDesktop, Desktop } = useResponsive();
  const styles = useBackgroundTypography();

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'));
  const SmallLaptop = useMediaQuery('(max-width:1020px)');

  return (
    <>
      <HeroSection />
      <Container
        py={SmallDesktop ? theme.spacing(1) : theme.spacing(4)}
        size={Phone ? 'xs' : SmallDesktop ? 'sm' : 'md'}
      >
        <HeadMasterTestimony
          themeColor="red"
          headMasterImage={headMasterPic}
          testimony="Selamat datang di situs web Taruna Bangsa.
          Salam sejahtera untuk kita semua.
          Yayasan Pendidikan Taruna Bangsa bergerak di bidang pendidikan, mulai dari jenjang KB, TK, SD, SMP dan SMA. Kami terus mengupayakan peningkatan sarana dan prasarana, serta kualitas tenaga pendidik dan kependidikan yang sesuai dengan perkembangan teknologi dan informasi, sehingga mampu bersaing dan menghasilkan lulusan yang berkualitas dalam karakter, pengetahuan, dan keterampilan.
          Berpedoman pada visi dan misi Yayasan Pendidikan Taruna Bangsa, serta motto Sekolah Taruna Bangsa: “Mengasah Otak Mengolah Bakat”,  dan berpegang teguh pada nilai-nilai karakter Pelajar Pancasila, kami berusaha menjadikan peserta didik Taruna Bangsa menjadi pribadi siap bersaing di era globalisasi dan berprestasi di bidangnya.
          Terima kasih dan Salam Sehat"
          headMasterName="Ling Ling Dewi Murniati, S.E."
          headMasterRole="Direktur Eksekutif Sekolah Taruna Bangsa"
          testimonialSenderRole="Direktur Eksekutif STB"
          inverted
        />

        <Container
          size={Phone ? 'xs' : SmallDesktop ? 'md' : 'lg'}
          my={SmallDesktop ? 6 : 8}
        >
          <VisionMission
            themeColor="red"
            visions={VISSIONS}
            missions={MISSIONS}
          />
        </Container>
        <Container size={Phone ? 'xs' : SmallDesktop ? 'md' : 'lg'}>
          <Grid container alignItems="flex-start" direction="column">
            <Typography
              sx={{
                ...styles.primaryHeader,
              }}
              color="whitesmoke"
              display="inline-block"
              variant="subtitle1"
            >
              Nilai-Nilai
            </Typography>
            <Typography
              sx={{
                ...styles.redHeader,
              }}
              color="whitesmoke"
              display="inline-block"
              variant="subtitle1"
            >
              Sekolah Taruna Bangsa
            </Typography>
          </Grid>
          <Container size="xs" mt={4}>
            <Grid container spacing={1} xs direction="column">
              <Grid
                direction="row"
                alignItems={SmallDesktop ? 'flex-start' : 'center'}
                container
                spacing={1}
              >
                <Grid item>
                  <Typography component="span" variant="h4">
                    &#183;
                  </Typography>
                </Grid>
                <Grid item xs ml={2} mt={1}>
                  <Typography variant="body2" color="GrayText">
                    Kami merayakan proses pembelajaran dan penemuan dengan penuh
                    semangat serta berupaya berkontribusi untuk menjadi pemimpin
                    masa depan.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                direction="row"
                alignItems={SmallDesktop ? 'flex-start' : 'center'}
                container
                spacing={1}
                mt={1}
              >
                <Grid item>
                  <Typography component="span" variant="h4">
                    &#183;
                  </Typography>
                </Grid>
                <Grid item xs ml={2} mt={1}>
                  <Typography variant="body2" color="GrayText">
                    Kami menumbuhkan pemikiran kritis, rasa ingin tahu serta
                    mengutamakan sikap pemecahan masalah.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                direction="row"
                alignItems={SmallDesktop ? 'flex-start' : 'center'}
                container
                spacing={1}
                mt={1}
              >
                <Grid item>
                  <Typography component="span" variant="h4">
                    &#183;
                  </Typography>
                </Grid>
                <Grid item xs ml={2} mt={1}>
                  <Typography variant="body2" color="GrayText">
                    Kami membangun hubungan harmonis yang berakar pada
                    integritas diri, rasa saling menghormati dan komunikasi
                    terbuka.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                direction="row"
                alignItems={SmallDesktop ? 'flex-start' : 'center'}
                container
                spacing={1}
                mt={1}
              >
                <Grid item>
                  <Typography component="span" variant="h4">
                    &#183;
                  </Typography>
                </Grid>
                <Grid item xs ml={2} mt={1}>
                  <Typography variant="body2" color="GrayText">
                    Kami mendukung inklusivitas, memelihara pemberdayaan untuk
                    menciptakan dampak positif bagi masyarakat kita.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Container>
      {/** //* ADMINISTRATOR */}
      {/* <Box bgcolor={theme.palette.primary.main}>
        <Container
          py={SmallDesktop ? theme.spacing(1) : theme.spacing(4)}
          // pr={Tablet ? '0 !important' : '2rem'}
          size={Phone ? 'xs' : SmallDesktop ? 'md' : Desktop ? 'lg' : 'xl'}
        >
          <Container
            size={'xs'}
            py={Phone ? 4 : 8}
            pr={Tablet ? '0 !important' : '2rem'}
          >
            <Typography
              variant={Phone ? 'subtitle1' : Tablet ? 'h6' : 'h4'}
              color="whitesmoke"
              textAlign="center"
              // pr={Phone ? '2rem' : 0}
            >
              Pengurus Yayasan Pendidikan Taruna Bangsa
            </Typography>
            <Box
              mt={Phone ? theme.spacing(4) : theme.spacing(8)}
              position="relative"
            >
              {SmallLaptop ? (
                <>
                  <Grid
                    container
                    spacing={2}
                    flexWrap="nowrap"
                    style={{ overflow: 'auto' }}
                  >
                    {administrators?.map((administrator) => {
                      return (
                        <Grid
                          item
                          // xs={4}
                          key={administrator?._id}
                        >
                          <Box width="14rem" mr={1}>
                            <TeacherCarouselItem
                              teacher={administrator}
                              themeColor="white"
                            />
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                  <SwipeArrow color={grey[200]} />
                </>
              ) : (
                <TeacherCarousel
                  themeColor="white"
                  teachersList={administrators}
                  paginationBottom={'-3rem'}
                />
              )}
            </Box>
          </Container>
        </Container>
      </Box> */}
      <Academics />
    </>
  );
};

export default AboutUsPage;
