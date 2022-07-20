import { Box, Grid, Typography } from '@mui/material';
import { useBackgroundTypography } from 'helpers/custom-hooks';
import { ThemeColor } from 'helpers/types';
import React, { FC, useMemo } from 'react';
import { TeacherCarousel, TeacherCarouselItem } from '../Carousel';
import { useResponsive } from 'helpers/custom-hooks';

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

  /** Media Query */
  const { Phone, Tablet } = useResponsive();

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
      <Grid container direction="column" spacing={Phone ? 2 : 3}>
        <Grid item container direction="column">
          <Grid item>
            <Typography
              display="inline-block"
              variant={Phone ? 'subtitle1' : 'h6'}
              color="whitesmoke"
              sx={styles.primaryHeader}
            >
              Guru-Guru
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              display="inline-block"
              variant={Phone ? 'subtitle1' : 'h6'}
              color="whitesmoke"
              sx={getTitleStyle}
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Grid item sx={{ width: '100%', position: 'relative' }}>
          <Box mt={Tablet ? 4 : 8}>
            {Tablet ? (
              <Grid
                container
                spacing={2}
                flexWrap="nowrap"
                style={{ overflow: 'auto' }}
              >
                {teachersList?.map((teacher) => {
                  return (
                    <Grid
                      item
                      // xs={4}
                      key={teacher?.name}
                    >
                      <Box width="14rem">
                        <TeacherCarouselItem
                          teacher={teacher}
                          themeColor={themeColor}
                        />
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            ) : (
              <TeacherCarousel
                teachersList={teachersList}
                themeColor={themeColor}
                paginationBottom={'-4rem'}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Teachers;
