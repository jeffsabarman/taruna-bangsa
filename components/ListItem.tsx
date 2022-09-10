import { Circle as CircleIcon } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useResponsive } from 'helpers/custom-hooks';

const ListItem = ({ point }: { point: string }) => {
  const { Phone } = useResponsive();
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <CircleIcon
          htmlColor="whitesmoke"
          // // @ts-ignore
          // fontSize="20"
          sx={{ fontSize: Phone ? '0.8rem' : '1rem' }}
        />
      </Grid>
      <Grid item xs>
        <Typography variant="body2" color="whitesmoke">
          {point}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ListItem;
