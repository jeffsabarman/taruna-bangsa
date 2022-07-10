import { Circle } from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import React, { FC } from 'react';
import ListItem from '@/components/ListItem';

interface SchedulesAndActivitiesProps {
  schedules: string[];
  activities: string[];
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
        <Box mt={3}>
          {schedules.map((point, idx) => (
            <ListItem key={idx} point={point} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography color="whitesmoke" variant="subtitle1">
          Jenis Kegiatan
        </Typography>
        <Box mt={3}>
          {activities.map((point, idx) => (
            <ListItem key={idx} point={point} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default SchedulesAndActivities;
