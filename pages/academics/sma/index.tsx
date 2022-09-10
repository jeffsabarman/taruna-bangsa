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
import headMasterPic from '@/public/images/joanita.png';
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
import { ACADEMIC_SMA } from '@/utils/groq';

const sections = [
  {
    key: 'SMA',
    description:
      'SMA Taruna Bangsa merupakan sekolah yang bernaung di bawah Yayasan Pendidikan Taruna Bangsa, yang memiliki motto Mengasah Otak Mengolah Bakat.',
  },
  {
    key: '',
    description:
      'Sesuai dengan visi SMA Taruna Bangsa, untuk mewujudkan Peserta Didik yang Berbudi Pekerti Luhur, Berkarakter Pelajar Pancasila, Unggul dalam Prestasi, Berwawasan Lingkungan, Menguasai Iptek, dan Kompetitif dalam Era Globalisasi, kami selalu memotivasi dan mendampingi peserta didik selama berproses dalam kegiatan pembelajaran, baik melalui pembelajaran intrakurikuler, ekstrakurikuler, maupun pendidikan karakter. Sehingga peserta didik SMA Taruna Bangsa menjadi pribadi yang dewasa, mandiri, kreatif, dan penuh semangat menghadapi dalam tantangan untuk berkompetisi secara positif, serta siap melanjutkan pendidikan ke jenjang yang lebih tinggi.',
  },
  {
    key: '',
    description:
      'Bimbingan guru-guru yang handal dan berkualitas, menghantarkan putra-putri SMA Taruna Bangsa meraih berbagai prestasi bidang akademik maupun non akademik, baik tingkat kabupaten, tingkat provinsi, tingkat nasional, maupun internasional. Setiap tahunnya, lulusan SMA Taruna Bangsa selalu ada yang diterima di Perguruan Tinggi Negeri (PTN), baik melalui jalur SNMPTN, jalur prestasi, maupun jalur SBMPTN. Selain itu lulusan SMA Taruna Bangsa ada juga yang melanjutkan di Perguruan Tinggi swasta favorit, baik di Indonesia maupun di Luar Negeri.',
  },
];

const VISSIONS = [
  'Terwujudnya Peserta Didik yang Berbudi Pekerti Luhur, Berkarakter  Pelajar Pancasila, Unggul dalam Prestasi, Berwawasan Lingkungan, Menguasai Iptek, dan Kompetitif dalam Era Globalisasi.',
];

const MISSIONS = [
  'Menumbuh-kembangkan karakter peserta didik yang religius, jujur, disiplin, santun, bertanggung jawab, berkebinekaan global, bergotong royong, mandiri, bernalar kritis, kreatif, dan cinta tanah air.',
  'Mengembangkan pembelajaran yang aktif, kreatif, dan inovatif.',
  'Membudayakan kepedulian terhadap lingkungan dalam setiap kegiatan.',
  'Mengembangkan bidang iptek berdasarkan minat, bakat, dan potensi peserta didik.',
  'Mewujudkan peserta didik yang tangguh guna meningkatkan daya saing bangsa di era globalisasi.',
];

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

const AcademicSMA: FC = (props) => {
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
    const academicData = await sanityClient.fetch(ACADEMIC_SMA);
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
          themeColor="grey"
          headMasterImage={headMasterPic}
          testimony="Untuk mewujudkan peserta didik yang berbudi pekerti luhur, unggul dalam prestasi, berwawasan lingkungan, menguasai iptek, dan kompetitif dalam era globalisasi, SMA Taruna Bangsa terus meningkatkan mutu sekolah, sehingga menjadi sekolah unggulan, semakin dikenal, dan mendapat kepercayaan dari  masyarakat dan pemerintah. Bimbingan guru-guru yang handal dan berkualitas, menghantarkan putra-putri SMA Taruna Bangsa meraih berbagai prestasi bidang akademik dan non akademik, baik tingkat kabupaten, tingkat provinsi, tingkat nasional, maupun internasional. Setiap tahunnya, lulusan SMA Taruna Bangsa selalu ada yang diterima di Perguruan Tinggi Negeri (PTN), baik melalui jalur SNMPTN, jalur prestasi, maupun jalur SBMPTN.
          Mari bergabung bersama SMA Taruna Bangsa, maju bersama mencerdaskan bangsa."
          headMasterName="Joanita Dewi Riris K., S.Pd."
          headMasterRole="Kepala SMA Taruna Bangsa"
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
            themeColor="grey"
            visions={VISSIONS}
            missionSub="Untuk mewujudkan Visi yang telah dirumuskan, SMA Taruna Bangsa menetapkan misi sebagai berikut :"
            missions={MISSIONS}
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
            SMA Taruna Bangsa menggunakan Kurikulum yang berlaku secara
            nasional, yaitu Kurikulum Merdeka untuk kelas X dan Kurikulum 2013
            yang disederhanakan/diadaptasi secara mandiri untuk kelas XI dan
            XII. Dalam Kurikulum Merdeka, pembelajaran dibagi mejadi dua
            kegiatan utama: Pembelajaran Intrakurikuler Proyek Penguatan Profil
            Pelajar Pancasila Dalam Kurikulum 2013, pembelajaran mengarah pada
            pengetahuan, keterampilan, dan sikap/karakter, yang dikembangkan
            dalam kehidupan sehari-hari.
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
          {/* <Box mt={4}>
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
                title="Jenis Kegiatan Ekskul SMA"
                exculpatories={exculpatories}
                exculImageSets={exculImageSets}
                themeColor="white"
              />
            )}
          </Box> */}
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
                <LoadingComponent themeColor="grey" />
              </Box>
            </Grid>
          ) : (
            <Teachers
              themeColor="grey"
              title="SMA Taruna Bangsa"
              teachersList={teachers}
            />
          )}
        </Container>
      </Container>
    </>
  );
};

export default AcademicSMA;
