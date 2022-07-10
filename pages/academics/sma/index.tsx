import HeadMasterTestimony from '@/components/Academics/HeadMasterTestimony';
import { HeroCarousel } from '@/components/Carousel';
import {
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import { useResponsive } from 'helpers/custom-hooks';
import React, { FC } from 'react';
import headMasterPic from '@/public/images/joanita.png';
import Container from '@/components/Container';
import YearGroupSection from '@/components/Academics/YearGroupSection';
import VisionMission from '@/components/Academics/VisionMission';
import SchedulesAndActivities from '@/components/ContactUs/SchedulesAndActivities';
import Exculpatories from '@/components/ContactUs/Exculpatories';
import Teachers from '@/components/Academics/Teachers';

const sections = [
  {
    key: 'SMA',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

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

const schedules = [
  'KB : Senin - Jumat : 10.00 - 12.00 WIB',
  'TK : Senin - Jumat : 08.00 - 11.30 WIB',
];

const activities = [
  'Field trip / karyawisata',
  'Kunjungan belajar',
  'Pemeriksaan gigi',
  'Aktivitas di luar kelas (membatik, menanam)',
  'Perayaan HUT RI dan Hari Besar Nasional (Kartini, Sumpah Pemuda, dll)',
  'Kegiatan akhir semester',
  'Porseni',
];

const exculpatories = [
  'Seni : Fashion & Modeling, Modern Dance, Balet, Lukis, Keyboard, Gitar, Vocal',
  'Bahasa : Bahasa Inggris, Bahasa Mandarin',
  'Olahraga : Futsal, Renang, Anggar',
  'Keterampilan : Bakery',
];

const exculImageSets = [
  {
    imageSets: {
      1: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
      2: 'https://images.unsplash.com/photo-1554042317-efd62f19bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1291&q=80',
      3: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
      4: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
      5: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
    },
  },
  {
    imageSets: {
      1: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
      2: 'https://images.unsplash.com/photo-1554042317-efd62f19bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1291&q=80',
      3: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
      4: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
      5: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
    },
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

const AcademicSMA: FC = (props) => {
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
          themeColor="grey"
          headMasterImage={headMasterPic}
          testimony="Untuk mewujudkan peserta didik yang berbudi pekerti luhur, unggul dalam prestasi, berwawasan lingkungan, menguasai iptek, dan kompetitif dalam era globalisasi, SMA Taruna Bangsa terus meningkatkan mutu sekolah, sehingga menjadi sekolah unggulan, semakin dikenal, dan mendapat kepercayaan dari  masyarakat dan pemerintah. Bimbingan guru-guru yang handal dan berkualitas, menghantarkan putra-putri SMA Taruna Bangsa meraih berbagai prestasi bidang akademik dan non akademik, baik tingkat kabupaten, tingkat provinsi, tingkat nasional, maupun internasional. Setiap tahunnya, lulusan SMA Taruna Bangsa selalu ada yang diterima di Perguruan Tinggi Negeri (PTN), baik melalui jalur SNMPTN, jalur prestasi, maupun jalur SBMPTN.
          Mari bergabung bersama SMA Taruna Bangsa, maju bersama mencerdaskan bangsa."
          headMasterName="Joanita Dewi Riris K., S.Pd."
          headMasterRole="Kepala SMA Taruna Bangsa"
        />
        <Container size="lg" mt={8}>
          <YearGroupSection sections={sections} />
        </Container>
        <Container size="lg" my={8}>
          <VisionMission
            themeColor="grey"
            vision="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            mission="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </Container>
      </Container>
      <Box bgcolor={theme.palette.grey[500]}>
        <Container
          py={Phone ? theme.spacing(4) : theme.spacing(12)}
          size={Phone ? 'sm' : SmallDesktop ? 'md' : Desktop ? 'lg' : 'xl'}
        >
          <Typography color="whitesmoke" variant="h6">
            Kurikulum
          </Typography>
          <Typography mt={4} color="whitesmoke" variant="body2">
            Kami percaya bahwa program akademik yang baik dikombinasikan dengan
            kurikulum sosial-emosional yang mendukung mengarah pada kesuksesan
            siswa. Program akademik Sekolah Taruna Bangsa mencerminkan praktik
            sesuai kurikulum yg berlaku dengan instruksi berbasis standar;
            kurikulum berbasis penelitian; penilaian reguler; pekerjaan rumah;
            dan peluang pengayaan yang memperluas cakrawala.
          </Typography>

          <Box mt={4}>
            <Divider sx={{ borderWidth: 1, borderColor: 'whitesmoke' }} />
          </Box>
          <Box mt={4}>
            <SchedulesAndActivities
              activities={activities}
              schedules={schedules}
            />
          </Box>
          <Box mt={4}>
            <Divider sx={{ borderWidth: 1, borderColor: 'whitesmoke' }} />
          </Box>
          <Box mt={4}>
            <Exculpatories
              title="Jenis Kegiatan Ekskul KB-TK"
              exculpatories={exculpatories}
              exculImageSets={exculImageSets}
            />
          </Box>
        </Container>
      </Box>
      <Container
        py={SmallDesktop ? theme.spacing(1) : theme.spacing(4)}
        size={Phone ? 'xs' : SmallDesktop ? 'sm' : 'md'}
      >
        <Container size="lg" py={8}>
          <Teachers
            themeColor="grey"
            title="SMA Taruna Bangsa"
            teachersList={teachers}
          />
        </Container>
      </Container>
    </>
  );
};

export default AcademicSMA;
