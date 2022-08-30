import { Box, Grid, Typography, useTheme } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import React from 'react';
import AcademicCard, { Academic } from '../AcademicCard';
import HeaderLayout from '@/components/HeaderLayout';
import TK from '@/public/images/TK.jpg';
import SD from '@/public/images/SD.jpg';
import SMA from '@/public/images/SMA.jpg';
import SMP from '@/public/images/SMP.jpg';

const ACADEMICS_LIST: Array<Academic> = [
  {
    avatar: TK,
    title: 'kb/tk',
    subtitle:
      'We are a school that empowers students to thrive in academic excellence; personal, social and emotional growth that are needed for success in their live and livelihood.',
    color: 'yellow',
    url: '/academics/kb-tk',
  },
  {
    avatar: SD,
    title: 'sd',
    subtitle:
      'We are a school that empowers students to thrive in academic excellence; personal, social and emotional growth that are needed for success in their live and livelihood.',
    color: 'red',
    url: '/academics/sd',
  },
  {
    avatar: SMP,
    title: 'smp',
    subtitle:
      'We are a school that empowers students to thrive in academic excellence; personal, social and emotional growth that are needed for success in their live and livelihood.',
    color: 'lightblue',
    url: '/academics/smp',
  },
  {
    avatar: SMA,
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
        <HeaderLayout
          title="Akademik"
          subtitle="Program pembelajaran di Sekolah Taruna Bangsa menggunakan Kurikulum yang berlaku secara Nasional. Kegiatan belajar mengajar dilaksanakan secara aktif dan interakif serta didukung dengan kegiatan praktik/eksperimen baik di dalam kelas maupun di luar kelas."
        >
          <Grid container spacing={4}>
            {ACADEMICS_LIST?.map((academic: Academic, idx) => (
              <Grid item xs={12} sm={6} lg={3} key={idx}>
                <AcademicCard data={academic} />
              </Grid>
            ))}
          </Grid>
        </HeaderLayout>
      </Grid>
    </Box>
  );
};

export default Academics;
