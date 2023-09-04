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
import HeadMasterTestimony from '@/components/Academics/HeadMasterTestimony'
import headMasterPic from '@/public/images/karsi.png'
//* Components
import Container from '@/components/Container'
import YearGroupSection from '@/components/Academics/YearGroupSection'
import VisionMission from '@/components/Academics/VisionMission'
import SchedulesAndActivities from '@/components/ContactUs/SchedulesAndActivities'
import Teachers from '@/components/Academics/Teachers'
import HeroSection from '@/components/Home/HeroSection'
import LoadingComponent from '@/components/shared/LoadingComponent'
//* Sanity
import { ACADEMIC_SD } from '@/utils/groq'

const sections = [
  {
    key: 'SD',
    description:
      'Sampai dengan tahun 2023 SD Taruna Bangsa telah berhasil  meluluskan sebanyak 19 angkatan. Dengan didukung fasilitas yang lengkap, SD Taruna Bangsa selalu mengasah dan mengembangkan potensi peserta didik, sehingga mampu berprestasi di berbagai bidang (baik akademik maupun nonakademik) dan berbagai tingkatan (baik lokal, nasional, maupun internasional). Selain fasilitas yang lengkap, adanya pendidik yang kompeten, program ekstrakurikuler yang sesuai bakat dan minat, bimbingan konseling yang terarah, serta lingkungan yang nyaman, sangat mendukung dalam membentuk peserta didik yang unggul dan memiliki karakter sesuai dengan nilai-nilai profil pelajar Pancasila. Pada tahun ajaran 2023/2024 SD Taruna Bangsa menerapkan kurikulum merdeka untuk kelas 1 dan IV, sedangkan kelas II, III, V, dan VI menerapkan kurikulum 2013 menuju merdeka belajar.',
  },
]

const TESTIMONY = [
  'Pendidikan dasar adalah pondasi penting dalam membentuk pribadi yang berkualitas dan masa depan yang cerah bagi generasi muda kita. Di SD Taruna Bangsa kami berkomitmen untuk memberikan pendidikan yang berkualitas dan berpusat pada siswa. Kami percaya bahwa setiap anak memiliki potensi yang unik dan kami akan berusaha untuk mendukung setiap siswa dalam mengembangkan bakat, pengetahuan, dan keterampilan mereka. Kami akan memberikan lingkungan belajar yang aman, nyaman, dan kondusif, di mana setiap siswa dapat tumbuh secara akademis, sosial, dan emosional.',
  'Kami mengakui bahwa pendidikan adalah usaha bersama antara sekolah, orang tua, dan siswa. Oleh karena itu, kami mengundang orang tua untuk terlibat aktif dalam pendidikan anak-anak mereka. Kolaborasi antara sekolah dan rumah sangat penting dalam menciptakan lingkungan belajar yang sukses dan mendukung perkembangan holistik siswa.',
  'Kami akan terus berupaya untuk meningkatkan kualitas pendidikan kami melalui pengembangan kurikulum yang relevan, metode pengajaran yang inovatif, serta pemanfaatan teknologi pendidikan terbaru. Kami juga akan terus mengembangkan staf kami melalui pelatihan dan pengembangan profesional agar mereka dapat memberikan yang terbaik bagi siswa.',
  'Kami percaya bahwa pendidikan adalah kunci untuk masa depan yang lebih baik. Mari bersama-sama bekerja keras, berkolaborasi, dan mendukung visi dan misi kami dalam memberikan pendidikan yang bermakna bagi setiap siswa di SD Taruna Bangsa.',
]

const VISSIONS = [
  'Menjadi Satuan Pendidikan Dasar  yang unggul dalam mempersiapkan generasi emas Indonesia yang taqwa, cerdas dan berkarakter Pancasila.',
]

const MISSIONS = [
  'Mengembangkan kecerdasan akademis, emosional, dan spiritual.',
  'Mempersiapkan peserta didik dalam menyongsong era globalisasi.',
  'Membentuk pribadi peserta didik yang religius, jujur, disiplin, santun, bertanggung jawab, berkebinekaan global, bergotong royong, mandiri, bernalar kritis, kreatif, dan cinta tanah air.',
]

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

const AcademicSD = () => {
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
    const academicData = await sanityClient.fetch(ACADEMIC_SD)
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
          themeColor="red"
          headMasterImage={headMasterPic}
          testimony={TESTIMONY}
          headMasterName="Karsi, S.Pd."
          headMasterRole="Kepala SD Taruna Bangsa"
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
            themeColor="red"
            visions={VISSIONS}
            missions={MISSIONS}
          />
        </Container>
      </Container>
      <Box bgcolor={theme.palette.secondary.main}>
        <Container
          py={Phone ? theme.spacing(4) : theme.spacing(12)}
          size={Phone ? 'sm' : SmallDesktop ? 'md' : Desktop ? 'lg' : 'xl'}
        >
          <Typography color="whitesmoke" variant="h6">
            Kurikulum
          </Typography>
          <Typography mt={4} color="whitesmoke" variant="body2">
            SD Taruna Bangsa mengembangan Kurikulum 2013 menuju Kurikulum
            Merdeka. Hal ini dikarenakan kondisi Pandemi Covid-19 yang belum
            sepenuhnya berlalu karenanya dengan tujuan membentuk profil pelajar
            Pancasila yang beriman, bertakwa,kepada Tuhan YME dan berakhlak
            mulia. berkebinekaan global, bergotong royong, mandiri, bernalar
            kritis, kreatif . Dengan tetap berpedoman kepada standar nasional
            pendidikan untuk menjamin pencapaian tujuan pendidikan nasional.
            Standar Nasional Pendidikan terdiri atas standar isi, proses,
            standar kompetensi lulusan, standar pendidik dan tenaga
            kependidikan, standar sarana dan prasarana, standar pengelolaan,
            standar pembiayaan, dan standar penilaian pendidikan. Empat dari
            kedelapan standar nasional pendidikan tersebut, yaitu Standar Isi
            (SI), Standar Kompetensi Lulusan (SKL), Standar Proses, dan Standar
            Penilaian merupakan acuan utama bagi satuan pendidikan dalam
            mengembangkan kurikulum.
          </Typography>
          <Typography mt={4} color="whitesmoke" variant="body2">
            Kebutuhan kompetensi abad 21. Pada abad ini, kemampuan kreativitas
            dan komunikasi akan menjadi sangat penting. Sejalan dengan itu,
            rumusan kompetensi sikap, pengetahuan, dan keterampilan yang
            dipergunakan dalam Kurikulum 2013 mengedepankan pentingnya
            kreativitas dan komunikasi. Sejalan dengan itu, kompetensi yang
            diharapkan dari seorang lulusan SD Taruna Bangsa memiliki kemampuan
            pikir dan tindak yang produktif dan kreatif dalam ranah abstrak dan
            konkret. Kemampuan tersebut diperjelas dalam kompetensi inti yang
            salah satunya adalah menyajikan pengetahuan dalam bahasa yang jelas,
            logis dan sistematis, dalam karya yang estetis, atau dalam tindakan
            yang mencerminkan perilaku anak sehat, beriman, berakhlak mulia.
            Kompetensi tersebut dirancang untuk dicapai melalui proses
            pembelajaran berbasis penemuan (discovery based learning) melalui
            kegiatan-kegiatan berbentuk tugas (project based learning) yang
            mencakup proses-proses mengamati, menanya, mencoba, menalar, dan
            mengkomunikasikan
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
                title="Jenis Kegiatan Ekskul SD"
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
                <LoadingComponent themeColor="red" />
              </Box>
            </Grid>
          ) : (
            <Teachers
              themeColor="red"
              title="SD Taruna Bangsa"
              teachersList={teachers}
            />
          )}
        </Container>
      </Container>
    </>
  )
}

export default AcademicSD
