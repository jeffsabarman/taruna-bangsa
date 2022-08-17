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
import React, { FC, useState, useEffect } from 'react';
import headMasterPic from '@/public/images/fabiana.png';
//* Components
import Container from '@/components/Container';
import YearGroupSection from '@/components/Academics/YearGroupSection';
import VisionMission from '@/components/Academics/VisionMission';
import SchedulesAndActivities from '@/components/ContactUs/SchedulesAndActivities';
import Exculpatories from '@/components/ContactUs/Exculpatories';
import Teachers from '@/components/Academics/Teachers';
import HeroSection from '@/components/Home/HeroSection';
import LoadingComponent from '@/components/shared/LoadingComponent';
//* Sanity
import sanityClient from 'client';
import { ACADEMIC_SMP } from '@/utils/groq';

const sections = [
  {
    key: 'SMP',
    description:
      'SMP Taruna bangsa merupakan sekolah yang berada di bawah naungan Yayasan Pendidikan Taruna Bangsaa. Bersatu dalam keberagaman merupakan nilai yang dijunjung oleh kami selaku sekolah swasta nasional umum yang tidak berlatar belakang agama, golongan, ataupun etnis tertentu. SMP Taruna bangsa mempersiapkan peserta didik untuk menemukan potensi dan minat, juga memperlengkapi mereka untuk siap menempuh pendidikan lebih lanjut. Kami mendorong peserta didik untuk berproses dalam pendidikan dan mencapai prestasi secara akadamis. Kami juga menanamkan pendidikan karakter melalui budaya sekolah. Sehingga peserta didik bukan hanya cakap secara akademis tetapi juga memiliki karakter dan sikap yang terpuji. Hal ini sejalan dengan tujuan pendidikan yaitu untuk mempertajam kecerdasan, memperkukuh kemauan dan memperhalus perasaan. Kami berkomitmen untuk memperlengkapi dan membimbing peserta didik dalam menyongsong masa depan dan membawa pengaruh bagi banyak orang melalui perilaku yang mengispirasi. Memperlengkapi peserta didik agar cakap dalam berpikir secara kritis, cakap dalam pemecahan masalah, cakap dalam berkomunikasi, mampu mengembangkan kreativitas, menciptakan inovasi dan terampil dalam kolaborasi. Kami mengucapkan terima kasih kepada Bapak/Ibu orangtua yang telah mempercayakan pendidikan putra dan putrinya di SMP taruna bangsa Kami mengajak Bapak/Ibu selaku orang tua peserta didik untuk mendaftarkan putra dan putrinya untuk bergabung di SMP Taruna Bangsa dan bergandengan tangan menjalin kerja sama dalam mendampingi anak-anak.',
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

// const schedules = [
//   'KB : Senin - Jumat : 10.00 - 12.00 WIB',
//   'TK : Senin - Jumat : 08.00 - 11.30 WIB',
// ];

// const activities = [
//   'Field trip / karyawisata',
//   'Kunjungan belajar',
//   'Pemeriksaan gigi',
//   'Aktivitas di luar kelas (membatik, menanam)',
//   'Perayaan HUT RI dan Hari Besar Nasional (Kartini, Sumpah Pemuda, dll)',
//   'Kegiatan akhir semester',
//   'Porseni',
// ];

// const exculpatories = [
//   'Seni : Fashion & Modeling, Modern Dance, Balet, Lukis, Keyboard, Gitar, Vocal',
//   'Bahasa : Bahasa Inggris, Bahasa Mandarin',
//   'Olahraga : Futsal, Renang, Anggar',
//   'Keterampilan : Bakery',
// ];

// const exculImageSets = [
//   {
//     imageSets: {
//       1: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//       2: 'https://images.unsplash.com/photo-1554042317-efd62f19bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1291&q=80',
//       3: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//       4: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//       5: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//     },
//   },
//   {
//     imageSets: {
//       1: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//       2: 'https://images.unsplash.com/photo-1554042317-efd62f19bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1291&q=80',
//       3: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//       4: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//       5: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//     },
//   },
// ];

// const teachers = [
//   {
//     image:
//       'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
//     name: 'Mr.John Doe',
//     role: 'Wali Kelas TK - A',
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
//     name: 'Mr.John Doe',
//     role: 'Wali Kelas TK - A',
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
//     name: 'Mr.John Doe',
//     role: 'Wali Kelas TK - A',
//   },
//   {
//     image:
//       'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
//     name: 'Mr.John Doe',
//     role: 'Wali Kelas TK - A',
//   },
// ];

const exculImageSets = [
  {
    imageSets: {
      1: {
        url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
        alt: 'gambar 1',
      },
      2: {
        url: 'https://images.unsplash.com/photo-1554042317-efd62f19bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1291&q=80',
        alt: 'gambar 2',
      },
      3: {
        url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
        alt: 'gambar 1',
      },
      4: {
        url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
        alt: 'gambar 1',
      },
      5: {
        url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
        alt: 'gambar 1',
      },
    },
  },
  {
    imageSets: {
      1: {
        url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
        alt: 'gambar 1',
      },
      2: {
        url: 'https://images.unsplash.com/photo-1554042317-efd62f19bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1291&q=80',
        alt: 'gambar 2',
      },
      3: {
        url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
        alt: 'gambar 1',
      },
      4: {
        url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
        alt: 'gambar 1',
      },
      5: {
        url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
        alt: 'gambar 1',
      },
    },
  },
];

const AcademicSMP: FC = (props) => {
  /** Utilities */
  const theme = useTheme();

  /** Media Queries */
  const { Phone, SmallDesktop, Desktop, Tablet } = useResponsive();
  const customSmallPhone = useMediaQuery('(max-width:360px)');

  /** State */
  const [schedules, setSchedules] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [exculpatories, setExculpatories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /** Functions */
  const getAcademicData = async () => {
    setIsLoading(true);
    const academicData = await sanityClient.fetch(ACADEMIC_SMP);
    setTeachers(academicData?.teachers);
    setSchedules(academicData?.scheduleKBM);
    setActivities(academicData?.activities);
    setExculpatories(academicData?.extracurricular);
    setIsLoading(false);
  };

  /** Hooks */
  useEffect(() => {
    getAcademicData();
  }, []);

  return (
    <>
      <HeroSection />
      <Container
        py={SmallDesktop ? theme.spacing(1) : theme.spacing(4)}
        size={Phone ? 'xs' : SmallDesktop ? 'sm' : 'md'}
      >
        <HeadMasterTestimony
          themeColor="lightblue"
          headMasterImage={headMasterPic}
          testimony="Perkembangan dan perubahan dunia pendidikan di Indonesia tidak terlepas dari pengaruh perubahan global, perkembangan ilmu pengetahuan dan teknologi, serta seni dan budaya. Perkembangan dan perubahan tersebut menuntut perubahan dan peningkatan di bidang pendidikan dalam menyiapkan peserta didik untuk mewujudkan Sumber Daya Manusia yang berbudi pekerti luhur, berbudaya, berwawasan lingkungan, unggul dalam prestasi serta kompetitif dalam dunia global. Mari kita belajar dengan giat dan selalu bersemangat.
          Bergabunglah bersama SMP Taruna Bangsa."
          headMasterName="Fabiana, S.T."
          headMasterRole="Kepala SMP Taruna Bangsa"
        />
        <Container
          size={Phone ? 'xs' : SmallDesktop ? 'md' : 'lg'}
          mt={Phone ? 4 : 8}
        >
          <YearGroupSection sections={sections} />
        </Container>
        <Container
          my={Phone ? 4 : 8}
          size={Phone ? 'xs' : SmallDesktop ? 'md' : 'lg'}
        >
          <VisionMission
            themeColor="lightblue"
            vision="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            mission="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </Container>
      </Container>
      <Box bgcolor={theme.palette.primary.light}>
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
            {isLoading ? (
              <Grid item container justifyContent="center">
                <Box mt={3} mb={3}>
                  <LoadingComponent themeColor="white" />
                </Box>
              </Grid>
            ) : (
              <SchedulesAndActivities
                activities={activities}
                schedules={schedules}
              />
            )}
          </Box>
          <Box mt={4}>
            <Divider sx={{ borderWidth: 1, borderColor: 'whitesmoke' }} />
          </Box>
          <Box mt={4}>
            {isLoading ? (
              <Grid item container justifyContent="center">
                <Box mt={3} mb={3}>
                  <LoadingComponent themeColor="white" />
                </Box>
              </Grid>
            ) : (
              <Exculpatories
                title="Jenis Kegiatan Ekskul SMP"
                exculpatories={exculpatories}
                exculImageSets={exculImageSets}
                themeColor="white"
              />
            )}
          </Box>
        </Container>
      </Box>
      <Container
        py={SmallDesktop ? theme.spacing(1) : theme.spacing(4)}
        size={Phone ? 'xs' : SmallDesktop ? 'sm' : 'md'}
      >
        <Container
          size={
            customSmallPhone ? 'xs' : Phone ? 'sm' : SmallDesktop ? 'md' : 'lg'
          }
          pr={Tablet ? '0 !important' : '2rem'}
          py={Phone ? 4 : 8}
        >
          {isLoading ? (
            <Grid item container justifyContent="center">
              <Box mt={3} mb={3}>
                <LoadingComponent themeColor="lightblue" />
              </Box>
            </Grid>
          ) : (
            <Teachers
              themeColor="lightblue"
              title="SMP Taruna Bangsa"
              teachersList={teachers}
            />
          )}
        </Container>
      </Container>
    </>
  );
};

export default AcademicSMP;
