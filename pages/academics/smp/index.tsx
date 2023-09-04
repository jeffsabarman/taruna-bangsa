import {
  Divider,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import React, { useState, useEffect } from 'react'
import sanityClient from 'client'
import { useResponsive } from 'helpers/custom-hooks'
import { Box } from '@mui/system'
import headMasterPic from '@/public/images/nano.png'
//* Components
import HeadMasterTestimony from '@/components/Academics/HeadMasterTestimony'
import Container from '@/components/Container'
import YearGroupSection from '@/components/Academics/YearGroupSection'
import VisionMission from '@/components/Academics/VisionMission'
import SchedulesAndActivities from '@/components/ContactUs/SchedulesAndActivities'
import Teachers from '@/components/Academics/Teachers'
import HeroSection from '@/components/Home/HeroSection'
import LoadingComponent from '@/components/shared/LoadingComponent'
//* Sanity
import { ACADEMIC_SMP } from '@/utils/groq'

const TESTIMONY = [
  'Pendidikan adalah kunci untuk membuka pintu masa depan yang penuh harapan bagi generasi muda kita. Dunia terus berkembang dengan pesat, dan kita dihadapkan pada era globalisasi dan revolusi industri 4.0. Oleh karena itu, penting bagi kita semua untuk menyadari bahwa pembelajaran abad 21 menjadi kebutuhan mendesak dalam persiapan peserta didik untuk menghadapi tuntutan zaman yang semakin kompleks.',
  'Pembelajaran abad 21 mencakup serangkaian keterampilan dan kompetensi yang membantu peserta didik untuk menjadi lebih siap dan adaptif dalam menghadapi perubahan yang cepat. Beberapa keterampilan utama dalam pembelajaran abad 21 antara lain, Keterampilan berpikir kritis (Critical Thinking), Keterampilan Berkomunikasi (Communication), Berpikir Kreatif (Creative) dan Keterampilan Kolaborasi (Collaborative). Selain keterampilan – keterampilan di atas, peserta didik juga perlu dibekali dengan literasi digital, pemecahan masalah (problem solving) dan tentu saja perlu dibekali dengan landasan karakter dan akhlak mulia yang kuat.',
]

const sections = [
  {
    key: 'SMP',
    description:
      'SMP Taruna Bangsa yang berada di bawah naungan Yayasan Pendidikan Taruna Bangsa berkomitmen  untuk mengintegrasikan pembelajaran abad 21 ke dalam kurikulum dan metodologi pembelajarannya. Sebagai sekolah, tugas kami adalah menciptakan lingkungan yang memfasilitasi perkembangan keterampilan abad 21, dimana peserta didik merasa didukung dan diilhami untuk menjadi yang terbaik.',
  },
  {
    key: '',
    description:
      'Kami terus memotivasi para pendidik untuk terus berinovasi dalam mengajar dan mendukung peserta didik dalam mengembangkan keterampilan mereka. Guru harus menjadi contoh inspiratif dan juga teladan bagi mereka dalam menggali potensi dan menghadapi tantangan dengan penuh semangat. Kami juga mengajak peserta didik dalam berbagai aktivitas yang mengembangkan keterampilan abad 21 di luar lingkungan sekolah, serta selalu ikut mendukung dan memotivasi mereka dalam proses belajar.',
  },
  {
    key: '',
    description:
      'SMP Taruna Bangsa adalah tempat yang tepat di mana pembelajaran abad 21 menjadi bagian yang tak terpisahkan dari perjalanan pendidikan setiap peserta didik. Bersama, kita akan membentuk generasi penerus yang berdaya saing, berwawasan luas, dan mampu menghadapi tantangan masa depan dengan penuh keyakinan, keteguhan dan akhlak mulia yang tinggi.',
  },
]

const VISSIONS = [
  'Pengamalan ajaran agamanya dan budi pekerti.',
  'Berbagai bidang pengetahuan, olahraga, dan seni.',
  'Partisipasi pelestarian lingkungan sekolah dan masyarakat.',
]
const MISSIONS = [
  'Meningkatkan penghayatan dan pengamalan terhadap ajaran agama yang dianutnya.',
  'Melaksanakan pembelajaran yang efektif, kreatif, inovatif, dan menyenangkan bagi guru dan siswa.',
  'Meningkatkan semangat dan motivasi berprestasi warga sekolah dalam berkarya.',
  'Membantu siswa mengenali bakat dan mengolahnya untuk meningkatkan prestasi.',
  'Menumbuhkan semangat cinta lingkungan dan berperan dalam pelestarian alam.',
  'Mengamalkan budaya sekolah.',
]

/** Mocked Data */
// const images = [
//   {
//     url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
//     link: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2626&q=80',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
//     link: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2Nob29sfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
//   },
// ]

// const exculImageSets = [
//   {
//     imageSets: {
//       1: {
//         url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//         alt: 'gambar 1',
//       },
//       2: {
//         url: 'https://images.unsplash.com/photo-1554042317-efd62f19bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1291&q=80',
//         alt: 'gambar 2',
//       },
//       3: {
//         url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//         alt: 'gambar 1',
//       },
//       4: {
//         url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//         alt: 'gambar 1',
//       },
//       5: {
//         url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//         alt: 'gambar 1',
//       },
//     },
//   },
//   {
//     imageSets: {
//       1: {
//         url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//         alt: 'gambar 1',
//       },
//       2: {
//         url: 'https://images.unsplash.com/photo-1554042317-efd62f19bc95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1291&q=80',
//         alt: 'gambar 2',
//       },
//       3: {
//         url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//         alt: 'gambar 1',
//       },
//       4: {
//         url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//         alt: 'gambar 1',
//       },
//       5: {
//         url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2344&q=80',
//         alt: 'gambar 1',
//       },
//     },
//   },
// ]

const AcademicSMP = () => {
  /** Utilities */
  const theme = useTheme()

  /** Media Queries */
  const { Phone, SmallDesktop, Desktop, Tablet } = useResponsive()
  const customSmallPhone = useMediaQuery('(max-width:360px)')

  /** State */
  const [schedules, setSchedules] = useState([])
  const [teachers, setTeachers] = useState([])
  const [activities, setActivities] = useState([])
  const [_exculpatories, setExculpatories] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  /** Functions */
  const getAcademicData = async () => {
    setIsLoading(true)
    const academicData = await sanityClient.fetch(ACADEMIC_SMP)
    setTeachers(academicData?.teachers)
    setSchedules(academicData?.scheduleKBM)
    setActivities(academicData?.activities)
    setExculpatories(academicData?.extracurricular)
    setIsLoading(false)
  }

  /** Hooks */
  useEffect(() => {
    getAcademicData()
  }, [])

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
          testimony={TESTIMONY}
          headMasterName="F. Nano Suharno, M.Pd."
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
            visions={VISSIONS}
            missions={MISSIONS}
            visionSub="Terwujudnya peserta didik yang beriman, bermoral, dan unggul dalam
            prestasi. Peserta didik unggul dalam:"
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
                title="Jenis Kegiatan Ekskul SMP"
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
  )
}

export default AcademicSMP
