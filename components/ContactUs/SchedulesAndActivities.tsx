import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { PortableText } from '@portabletext/react'
//* Sanity
import { listComponents } from '@/components/shared/PortableTextComponent'

interface SchedulesAndActivitiesProps {
  // schedules: string[];
  schedules: any
  // activities: string[];
  activities: any[]
}

const SchedulesAndActivities = ({
  schedules,
  activities,
}: SchedulesAndActivitiesProps) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Typography color="whitesmoke" variant="subtitle1">
          Jadwal KBM
        </Typography>
        <Box mt={1} color="whitesmoke">
          <PortableText
            value={schedules}
            components={listComponents}
            // components={ptComponents}
          />
          {/* {schedules.map((point, idx) => (
            <ListItem key={idx} point={point} />
          ))} */}
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography color="whitesmoke" variant="subtitle1">
          Jenis Kegiatan
        </Typography>
        <Box mt={1} color="whitesmoke">
          <PortableText
            value={activities}
            components={listComponents}
            // components={ptComponents}
          />
          {/* {activities.map((point, idx) => (
            <ListItem key={idx} point={point} />
          ))} */}
        </Box>
      </Grid>
    </Grid>
  )
}

export default SchedulesAndActivities
