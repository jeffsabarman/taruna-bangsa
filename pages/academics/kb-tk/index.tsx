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
import React, { FC, useEffect, useState } from 'react';
import headMasterPic from '@/public/images/suci.png';
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
import { ACADEMIC_KB_TK } from '@/utils/groq';

const sections = [
  {
    key: 'KB - TK',
    description:
      'KB dan TK Taruna Bangsa sudah berhasil meluluskan sebanyak 18 angkatan. Setiap saat KB dan TK Taruna Bangsa memperbaiki mutu pendidikannya, dengan berbagai pendekatan yang bukan hanya menonjolkan aspek akademis, tetapi juga mengembangkan aspek nonakademis. Pada tahun ajaran ini, KB dan TK Taruna Bangsa  menggunakan kurikulum 2013 menuju merdeka belajar.',
  },
];

const VISSIONS = [
  'Menjadi penyelenggara Pendidikan pra sekolah yang berkualitas dan berdaya saing dalam mendidik putra-putri Indonesia menjadi pelajar Pancasila.',
];
const MISSIONS = [
  'Memupuk budi pekerti peserta didik sesuai nilai-nilai Pancasila.',
  'Membantu tumbuh- kembang anak menjadi cerdas, berani, terampil, dan berprestasi.',
  'Membentuk anak yang beragama dan bermoral, seimbang dalam sosial emosional,berpikir kritis, dan santun dalam bertutur kata.',
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

const AcademicKBTK: FC = (props) => {
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
    const academicData = await sanityClient.fetch(ACADEMIC_KB_TK);
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
          themeColor="yellow"
          headMasterImage={headMasterPic}
          testimony={[
            'KB dan TK merupakan Pendidikan pertama setelah keluarga yang sangat penting bagi perkembangan kemampuan dasar anak berusia 3-6 tahun. Agar kebutuhan bermain anak terpenuhi, maka pembelajaran bermain sambil belajar merupakan prinsip dasar penyelenggaraan Pendidikan pra sekolah di KB dan TK Taruna Bangsa. Melalui bidang pengembangan Nilai agama dan moral, Pancasila, Sosial Emosional, Fisik Motorik, Bahasa, logika,  para lulusan TK B Taruna Bangsa Diharapkan menunjukkan perkembangan kematangan belajar sehingga dapat melanjutkan Pendidikan ke  tingkat sekolah dasar.  Kepada Ibu Bapak orang tua peserta didik KB dan TK Taruna Bangsa mari kita berkerja sama membantu anak-anak kita bertumbuh kembang sesuai kebutuhan dan usia mereka. Semoga dengan bersekolah di KB dan TK Taruna Bangsa anak-anak dapat menapaki masa kanak-kanak yang ceria dan penuh kegembiraan.',
          ]}
          headMasterName="Kristina Suci Retnowati, M.Pd."
          headMasterRole="Kepala KB - TK Taruna Bangsa"
        />
        <Container
          size={Phone ? 'xs' : SmallDesktop ? 'md' : 'lg'}
          mt={Phone ? 4 : 8}
        >
          <YearGroupSection sections={sections} />
        </Container>
        <Container
          size={Phone ? 'xs' : SmallDesktop ? 'md' : 'lg'}
          my={Phone ? 4 : 8}
        >
          <VisionMission
            themeColor="yellow"
            visions={VISSIONS}
            missions={MISSIONS}
          />
        </Container>
      </Container>
      <Box bgcolor={theme.palette.warning.main}>
        <Container
          py={Phone ? theme.spacing(4) : theme.spacing(12)}
          size={Phone ? 'sm' : SmallDesktop ? 'md' : Desktop ? 'lg' : 'xl'}
        >
          <Typography color="whitesmoke" variant="h6">
            Kurikulum
          </Typography>
          <Typography mt={4} color="whitesmoke" variant="body2">
            Kurikulum TK Taruna Bangsa yang mengacu kepada Kurikulum 2013 menuju
            Kurikulum Merdeka. Hal ini dikarenakan kondisi Pandemi Covid-19 yang
            belum sepenuhnya berlalu bahkan ada kemungkinan kita harus hidup
            berdampingan dengannya. Kondisi pandemic yang menyebabkan peserta
            didik harus belajar secara daring menyebabkan berbagai hal yang di
            luar harapan. Oleh karenanya mulai tahun pelajaran 2022/2023 dengan
            keluarnya Surat Edaran dari Menteri Pendidikan Kebudayaan Riset dan
            Teknologi no. 07 Tahun 2022 tercantum aturan baru Pembelajaran Tatap
            Muka 100% bagi wilayah yang berada pada zona level 1 dan 2.
            Kabupaten Bogor pada bulan Juni dan Juli sudah berada pada level 1.
            Maka TK Taruna Bangsa juga menyelenggarakan pembelajaran secara
            Tatap Muka, meskipun jika ada perubahan kondisi penyebaran virus C-
            19 kembali merebak maka kami akan melaksanakan pembelajaran secara
            Online dan Offline dengan memanfaatkan peralatan Hybrid Learning
            yang telah tersedia di setiap ruang kelas.
          </Typography>
          <Typography mt={4} color="whitesmoke" variant="body2">
            Mengacu ke situasi kondisi maka kurikulum TK Taruna Bangsa pada
            tahun pelajaran 2022/2023 masih mengimplementasikan Kurikulum 2013
            penyesuaian dengan Kurikulum Merdeka. Kurikulum 2013 penyesuaian
            dengan Kurikulum Merdeka. Merupakan pengembangan dari ke delapan
            Standar Nasional Pendidikan Anak Usia Dini, yakni Standar Tingkat
            Pencapaian Perkembangan anak, Standar Isi, Standar Proses, Standar
            Penilaian, Standar PTK, Standar Sarana Prasarana, Standar
            Pengelolaan, dan Standar Pembiayaan dalam rangka peningkatan mutu
            Pendidikan yang menitikberatkan kepada pembentukan profil pelajar
            Pancasila yang beriman, bertakwa,kepada Tuhan YME dan berakhlak
            mulia. berkebinekaan global, bergotong royong, mandiri, bernalar
            kritis, kreatif.
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
                title="Jenis Kegiatan Ekskul KB-TK"
                exculpatories={exculpatories}
                exculImageSets={exculImageSets}
                themeColor="white"
              />
            )}
          </Box> */}
        </Container>
      </Box>
      <Container
        py={SmallDesktop ? theme.spacing(2) : theme.spacing(4)}
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
                <LoadingComponent themeColor="yellow" />
              </Box>
            </Grid>
          ) : (
            <Teachers
              themeColor="yellow"
              title="KB - TK Taruna Bangsa"
              teachersList={teachers}
            />
          )}
        </Container>
      </Container>
    </>
  );
};

export default AcademicKBTK;
