import { Circle as CircleIcon } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import React from 'react';

const ListItem = ({ point }: { point: string }) => (
  <Grid container spacing={2} alignItems="center">
    <Grid item>
      <CircleIcon htmlColor="whitesmoke" style={{ fontSize: '1rem' }} />
    </Grid>
    <Grid item xs>
      <Typography variant="body2" color="whitesmoke">
        {point}
      </Typography>
    </Grid>
  </Grid>
);

export default ListItem;
