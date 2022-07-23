import { Circle } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import React, { FC, useEffect } from 'react';
import ListItem from '@/components/ListItem';
//* Sanity
import { PortableText } from '@portabletext/react';
import { ptComponents } from '@/components/shared/PortableTextComponent';

interface SchedulesAndActivitiesProps {
  // schedules: string[];
  schedules: any;
  // activities: string[];
  activities: any[];
}

const SchedulesAndActivities: FC<SchedulesAndActivitiesProps> = ({
  schedules,
  activities,
}) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Typography color="whitesmoke" variant="subtitle1">
          Jadwal KBM
        </Typography>
        <Box mt={1}>
          <PortableText value={schedules} components={ptComponents} />
          {/* {schedules.map((point, idx) => (
            <ListItem key={idx} point={point} />
          ))} */}
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography color="whitesmoke" variant="subtitle1">
          Jenis Kegiatan
        </Typography>
        <Box mt={1}>
          <PortableText value={activities} components={ptComponents} />
          {/* {activities.map((point, idx) => (
            <ListItem key={idx} point={point} />
          ))} */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default SchedulesAndActivities;
