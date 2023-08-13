import {
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
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
  testimony: string[];
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

  /** Media Query */
  const { SmallDesktop, Tablet, Phone } = useResponsive();
  const customSmallPhone = useMediaQuery('(max-width:360px)');

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
      <Grid
        container
        direction={
          SmallDesktop ? (inverted ? 'column-reverse' : 'column') : 'row'
        }
        spacing={Phone ? 1 : 3}
      >
        {inverted ? (
          <>
            <Grid item xs md={6}>
              <Container py={theme.spacing(4)} size={Phone ? 'xs' : 'md'}>
                <Grid container direction="column" spacing={3}>
                  <Grid
                    container
                    alignItems="flex-start"
                    direction="column"
                    item
                  >
                    <Grid item>
                      <Typography
                        // textAlign="right"
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
                        // textAlign="right"
                        sx={getTitleStyle}
                        display="inline-block"
                        color="whitesmoke"
                        variant="h6"
                      >
                        {testimonialSenderRole}
                        {/* {headMasterRole} */}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      // textAlign="right"
                    >
                      {headMasterName}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      // textAlign="right"
                    >
                      {headMasterRole}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Divider sx={styles.divider} />
                  </Grid>
                  <Grid item>
                    <Stack mt={3} direction="column" gap={3}>
                      {testimony.map((p, idx) => (
                        <Typography
                          color="GrayText"
                          variant="body2"
                          key={idx}
                          // textAlign="right"
                        >
                          {p}
                        </Typography>
                      ))}
                    </Stack>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
            <Grid item xs md={6}>
              <Box p={theme.spacing(4)}>
                <Grid container justifyContent="center">
                  <Box position="relative" bottom={0} left={0}>
                    <Image
                      width={Phone ? 400 : SmallDesktop ? 450 : 500}
                      height={Phone ? 400 : SmallDesktop ? 450 : 500}
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
                      size={customSmallPhone ? 'sm' : 'md'}
                    />
                    <BackwardPolygon
                      grey={themeColor === 'grey'}
                      primary={themeColor === 'lightblue'}
                      secondary={themeColor === 'red'}
                      style={{ position: 'absolute', left: 36, bottom: 48 }}
                      size={customSmallPhone ? 'sm' : 'md'}
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
                      // width={400}
                      // height={400}
                      width={Phone ? 400 : SmallDesktop ? 450 : 500}
                      height={Phone ? 400 : SmallDesktop ? 450 : 500}
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
                      size={customSmallPhone ? 'sm' : 'md'}
                    />
                    <BackwardPolygon
                      grey={themeColor === 'grey'}
                      primary={themeColor === 'lightblue'}
                      secondary={themeColor === 'red'}
                      style={{ position: 'absolute', left: 36, bottom: 48 }}
                      size={customSmallPhone ? 'sm' : 'md'}
                    />
                  </Box>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs md={6}>
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
                        textAlign={SmallDesktop ? 'left' : 'right'}
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
                        textAlign={SmallDesktop ? 'left' : 'right'}
                        sx={getTitleStyle}
                        display="inline-block"
                        color="whitesmoke"
                        variant="h6"
                      >
                        {/* {testimonialSenderRole} */}
                        {headMasterRole}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="h6"
                      // textAlign="right"
                      textAlign={SmallDesktop ? 'left' : 'right'}
                    >
                      {headMasterName}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      // textAlign="right"
                      textAlign={SmallDesktop ? 'left' : 'right'}
                    >
                      {headMasterRole}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Divider sx={styles.divider} />
                  </Grid>
                  <Stack mt={3} direction="column" gap={3}>
                    {testimony.map((p, idx) => (
                      <Typography
                        color="GrayText"
                        variant="body2"
                        key={idx}
                        // textAlign="right"
                      >
                        {p}
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
              </Container>
            </Grid>
            {/* <Grid item>
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
            </Grid> */}
            {/* </Grid> */}
          </>
        )}
      </Grid>
    </Box>
  );
};

export default HeadMasterTestimony;
