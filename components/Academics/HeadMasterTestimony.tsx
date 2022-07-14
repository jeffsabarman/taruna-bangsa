import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import { ThemeColor } from 'helpers/types';
import Image, { StaticImageData } from 'next/image';
import React, { FC, useMemo } from 'react';
import Container from '../Container';
import { BackwardPolygon } from '../Shapes';

interface HeadMasterTestimonyProps {
  headMasterImage: StaticImageData;
  headMasterName: string;
  headMasterRole: string;
  testimony: string;
  themeColor: ThemeColor;
  inverted?: boolean;
  testimonialSenderRole?: string;
}

const HeadMasterTestimony: FC<HeadMasterTestimonyProps> = ({
  headMasterImage,
  headMasterName,
  headMasterRole,
  testimony,
  themeColor,
  inverted,
  testimonialSenderRole = '{testimonialS}',
}) => {
  /** Utilities */
  const theme = useTheme();
  const styles = {
    yellowHeader: {
      backgroundColor: theme.palette.warning.main,
      p: theme.spacing(1),
    },
    lighblueHeader: {
      backgroundColor: theme.palette.primary.light,
      p: theme.spacing(1),
    },
    redHeader: {
      backgroundColor: theme.palette.secondary.main,
      p: theme.spacing(1),
    },
    greyHeader: {
      backgroundColor: theme.palette.grey[500],
      p: theme.spacing(1),
    },
    primaryHeader: {
      backgroundColor: theme.palette.primary.main,
      p: theme.spacing(1),
    },
    divider: {
      borderWidth: 1.5,
      borderColor: theme.palette.grey[400],
    },
  };

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
      <Grid container spacing={3}>
        {inverted ? (
          <>
            <Grid item xs md={6}>
              <Container py={theme.spacing(4)}>
                <Grid container direction="column" spacing={3}>
                  <Grid container alignItems="flex-end" direction="column" item>
                    <Grid item>
                      <Typography
                        textAlign="right"
                        sx={styles.primaryHeader}
                        display="inline-block"
                        color="whitesmoke"
                        variant="h6"
                      >
                        Pesan dari
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        textAlign="right"
                        sx={getTitleStyle}
                        display="inline-block"
                        color="whitesmoke"
                        variant="h6"
                      >
                        {testimonialSenderRole}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" textAlign="right">
                      {headMasterName}
                    </Typography>
                    <Typography variant="subtitle2" textAlign="right">
                      {headMasterRole}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Divider sx={styles.divider} />
                  </Grid>
                  <Grid item>
                    <Typography
                      color="GrayText"
                      variant="body2"
                      textAlign="right"
                    >
                      {testimony}
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
            <Grid item xs md={6}>
              <Box p={theme.spacing(4)}>
                <Grid container justifyContent="center">
                  <Box position="relative" bottom={0} left={0}>
                    <Image
                      width={400}
                      height={400}
                      src={headMasterImage}
                      alt="Taruna Bangsa Headmaster"
                      style={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: '50%',
                      }}
                      objectFit="cover"
                    />
                    <BackwardPolygon
                      grey={themeColor === 'grey'}
                      primary={themeColor === 'lightblue'}
                      secondary={themeColor === 'red'}
                      style={{ position: 'absolute', left: 10, bottom: 48 }}
                    />
                    <BackwardPolygon
                      grey={themeColor === 'grey'}
                      primary={themeColor === 'lightblue'}
                      secondary={themeColor === 'red'}
                      style={{ position: 'absolute', left: 36, bottom: 48 }}
                    />
                  </Box>
                </Grid>
              </Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs md={6}>
              <Box p={theme.spacing(4)}>
                <Grid container justifyContent="center">
                  <Box position="relative" bottom={0} left={0}>
                    <Image
                      width={400}
                      height={400}
                      src={headMasterImage}
                      alt="Taruna Bangsa Headmaster"
                      style={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: '50%',
                      }}
                      objectFit="cover"
                    />
                    <BackwardPolygon
                      grey={themeColor === 'grey'}
                      primary={themeColor === 'lightblue'}
                      secondary={themeColor === 'red'}
                      style={{ position: 'absolute', left: 10, bottom: 48 }}
                    />
                    <BackwardPolygon
                      grey={themeColor === 'grey'}
                      primary={themeColor === 'lightblue'}
                      secondary={themeColor === 'red'}
                      style={{ position: 'absolute', left: 36, bottom: 48 }}
                    />
                  </Box>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs md={6}>
              <Container py={theme.spacing(4)}>
                <Grid container direction="column" spacing={3}>
                  <Grid container alignItems="flex-end" direction="column" item>
                    <Grid item>
                      <Typography
                        textAlign="right"
                        sx={styles.primaryHeader}
                        display="inline-block"
                        color="whitesmoke"
                        variant="h6"
                      >
                        Pesan dari
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        textAlign="right"
                        sx={getTitleStyle}
                        display="inline-block"
                        color="whitesmoke"
                        variant="h6"
                      >
                        {testimonialSenderRole}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" textAlign="right">
                      {headMasterName}
                    </Typography>
                    <Typography variant="subtitle2" textAlign="right">
                      {headMasterRole}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Divider sx={styles.divider} />
                  </Grid>
                  <Grid item>
                    <Typography
                      color="GrayText"
                      variant="body2"
                      textAlign="right"
                    >
                      {testimony}
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default HeadMasterTestimony;
