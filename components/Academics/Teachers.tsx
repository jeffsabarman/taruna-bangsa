import { Box, Grid, Typography } from '@mui/material';
import { useBackgroundTypography } from 'helpers/custom-hooks';
import { ThemeColor } from 'helpers/types';
import React, { FC, useMemo } from 'react';
import { TeacherCarousel } from '../Carousel';

export type TeacherItem = {
  image: string;
  name: string;
  role: string;
};

interface TeachersProps {
  themeColor: ThemeColor;
  title: string;
  teachersList: TeacherItem[];
}

const Teachers: FC<TeachersProps> = ({ themeColor, title, teachersList }) => {
  const styles = useBackgroundTypography();

  /** Functions */
  const getTitleStyle = useMemo(() => {
    switch (themeColor) {
      case 'red':
        return styles.redHeader;
      case 'lightblue':
        return styles.lighblueHeader;
      case 'grey':
        return styles.greyHeader;

      default:
        return styles.yellowHeader;
    }
  }, [themeColor]);

  return (
    <Box>
      <Grid container direction="column" spacing={3}>
        <Grid item container direction="column">
          <Grid item>
            <Typography
              display="inline-block"
              variant="h6"
              color="whitesmoke"
              sx={styles.primaryHeader}
            >
              Guru-Guru
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              display="inline-block"
              variant="h6"
              color="whitesmoke"
              sx={getTitleStyle}
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Box mt={8}>
          <TeacherCarousel
            teachersList={teachersList}
            themeColor={themeColor}
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Teachers;
