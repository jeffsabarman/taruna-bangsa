import { Box, Divider, Grid, Typography, useTheme } from '@mui/material';
import { ThemeColor } from 'helpers/types';
import Image, { StaticImageData } from 'next/image';
import React, { FC, useMemo } from 'react';
import Container from '../Container';
import { BackwardPolygon } from '../Shapes';
import { useResponsive } from 'helpers/custom-hooks';

interface HeadMasterTestimonyProps {
  headMasterImage: StaticImageData;
  headMasterName: string;
  headMasterRole: string;
  testimony: string;
  themeColor: ThemeColor;
}

const HeadMasterTestimony: FC<HeadMasterTestimonyProps> = ({
  headMasterImage,
  headMasterName,
  headMasterRole,
  testimony,
  themeColor,
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

  /** Media Query */
  const { SmallDesktop, Tablet, Phone } = useResponsive();

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
      <Grid container spacing={SmallDesktop ? 1 : 3}>
        <Grid
          item
          xs={SmallDesktop ? 12 : 6}
          // md={SmallDesktop ? 12 : 6}
        >
          <Box
            // p={SmallDesktop ? theme.spacing(2) : theme.spacing(4)}
            pt={theme.spacing(4)}
          >
            <Grid container justifyContent="center">
              <Box position="relative" bottom={0} left={0}>
                <Image
                  width={Phone ? 320 : Tablet ? 400 : SmallDesktop ? 480 : 400}
                  height={Phone ? 320 : Tablet ? 400 : SmallDesktop ? 480 : 400}
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
        <Grid
          item
          xs={SmallDesktop ? 12 : 6}
          // md={SmallDesktop ? 12 : 6}
        >
          <Container py={theme.spacing(4)} size={Phone ? 'xs' : 'md'}>
            <Grid container direction="column" spacing={3}>
              <Grid
                container
                alignItems={SmallDesktop ? 'flex-start' : 'flex-end'}
                direction="column"
                item
              >
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
                    Kepala Sekolah
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  variant="h6"
                  textAlign={SmallDesktop ? 'left' : 'right'}
                >
                  {headMasterName}
                </Typography>
                <Typography
                  variant="subtitle2"
                  textAlign={SmallDesktop ? 'left' : 'right'}
                >
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
                  textAlign={SmallDesktop ? 'left' : 'right'}
                >
                  {testimony}
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeadMasterTestimony;
