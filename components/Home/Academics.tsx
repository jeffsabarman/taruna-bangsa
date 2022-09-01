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
      'KB dan TK Taruna Bangsa sudah berhasil meluluskan sebanyak 18 angkatan. Setiap saat KB dan TK Taruna Bangsa memperbaiki mutu pendidikannya...',
    color: 'yellow',
    url: '/academics/kb-tk',
  },
  {
    avatar: SD,
    title: 'sd',
    subtitle:
      'SD Taruna Bangsa sudah berhasil meluluskan 17 angkatan.  SD Taruna Bangsa selalu memperbarui kualitas pendidikannya, baik dengan metode maupun fasilitas yang terkini...',
    color: 'red',
    url: '/academics/sd',
  },
  {
    avatar: SMP,
    title: 'smp',
    subtitle:
      'SMP Taruna bangsa merupakan sekolah yang berada di bawah naungan Yayasan Pendidikan Taruna Bangsa. Bersatu dalam keberagaman merupakan nilai...',
    color: 'lightblue',
    url: '/academics/smp',
  },
  {
    avatar: SMA,
    title: 'sma',
    subtitle:
      'SMA Taruna Bangsa merupakan sekolah yang bernaung di bawah Yayasan Pendidikan Taruna Bangsa, yang memiliki motto Mengasah Otak Mengolah Bakat.',
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
