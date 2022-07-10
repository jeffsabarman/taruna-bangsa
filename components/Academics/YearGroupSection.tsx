import { Grid, Typography, useTheme } from '@mui/material';
import React, { FC } from 'react';

interface YearGroupSectionProps {
  sections: { key: string; description: string }[];
}

const YearGroupSection: FC<YearGroupSectionProps> = ({ sections }) => {
  /** Utilities */
  const theme = useTheme();
  return (
    <>
      {sections?.map(({ key, description }) => (
        <Grid
          mb={theme.spacing(8)}
          key={key}
          container
          direction="column"
          spacing={3}
        >
          <Grid item>
            <Typography variant="subtitle1">{key}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="GrayText">
              {description}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default YearGroupSection;
