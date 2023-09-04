import { Box, Grid } from '@mui/material'
import { useResponsive } from 'helpers/custom-hooks'
import React from 'react'
import AcademicCard, { Academic } from '../AcademicCard'
import HeaderLayout from '@/components/HeaderLayout'

const ACADEMICS_LIST: Array<Academic> = [
  {
    avatar: '/images/TK.jpg',
    title: 'kb/tk',
    subtitle:
      'KB dan TK Taruna Bangsa sudah berhasil meluluskan sebanyak 18 angkatan. Setiap saat KB dan TK Taruna Bangsa memperbaiki mutu pendidikannya...',
    color: 'yellow',
    url: '/academics/kb-tk',
  },
  {
    avatar: '/images/SD.jpg',
    title: 'sd',
    subtitle:
      'SD Taruna Bangsa sudah berhasil meluluskan 17 angkatan.  SD Taruna Bangsa selalu memperbarui kualitas pendidikannya, baik dengan metode maupun fasilitas yang terkini...',
    color: 'red',
    url: '/academics/sd',
  },
  {
    avatar: '/images/SMP.jpg',
    title: 'smp',
    subtitle:
      'SMP Taruna bangsa merupakan sekolah yang berada di bawah naungan Yayasan Pendidikan Taruna Bangsa. Bersatu dalam keberagaman merupakan nilai...',
    color: 'lightblue',
    url: '/academics/smp',
  },
  {
    avatar: '/images/SMA.jpg',
    title: 'sma',
    subtitle:
      'SMA Taruna Bangsa merupakan sekolah yang bernaung di bawah Yayasan Pendidikan Taruna Bangsa, yang memiliki motto Mengasah Otak Mengolah Bakat.',
    color: 'grey',
    url: '/academics/sma',
  },
]

function Academics() {
  const { SmallDesktop } = useResponsive()

  return (
    <Box>
      <Grid container direction="column">
        <HeaderLayout
          title="Akademik"
          subtitle="Program pembelajaran di Sekolah Taruna Bangsa menggunakan Kurikulum yang berlaku secara Nasional. Kegiatan belajar mengajar dilaksanakan secara aktif dan interakif serta didukung dengan kegiatan praktik/eksperimen baik di dalam kelas maupun di luar kelas."
        >
          <Grid container spacing={4} mt={2}>
            {ACADEMICS_LIST?.map((academic: Academic, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                key={idx}
                mb={SmallDesktop ? 4 : 0}
              >
                <AcademicCard data={academic} />
              </Grid>
            ))}
          </Grid>
        </HeaderLayout>
      </Grid>
    </Box>
  )
}

export default Academics
