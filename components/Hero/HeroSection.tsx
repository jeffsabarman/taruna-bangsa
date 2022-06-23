import { ArrowForward, ArrowRightAlt } from '@mui/icons-material';
import {
  Box,
  BoxProps,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { FC } from 'react';
import Container from '../Container';
import Image from 'next/image';
import HeroImage from '../../public/images/hero-dev.jpg';
import { useRouter } from 'next/router';

interface HeroSectionProps extends BoxProps {}

const HeroSection: FC = (props) => {
  /** Utilities */
  const theme = useTheme();
  const router = useRouter();
  const styles = {
    ctaBtn: {
      backgroundColor: theme.palette.primary.light,
      borderRadius: theme.shape.borderRadius,
      textTransform: 'capitalize',
      px: theme.spacing(3),
    },
    blueHeader: {
      backgroundColor: theme.palette.primary.dark,
      p: theme.spacing(1),
    },
    readHeader: {
      backgroundColor: theme.palette.secondary.main,
      p: theme.spacing(1),
    },
  };

  /** Media Queries */
  const largeFrame = useMediaQuery(theme.breakpoints.down('xl'));
  const mediumFrame = useMediaQuery(theme.breakpoints.down('lg'));
  const smallFrame = useMediaQuery(theme.breakpoints.down('md'));
  const extraSmallFrame = useMediaQuery(theme.breakpoints.down('sm'));
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'));
  const _headerVariant = extraSmallFrame ? 'h6' : mediumFrame ? 'h5' : 'h4';

  return (
    <Box
      position="relative"
      mt={
        largerThanPhone || extraSmallFrame
          ? theme.spacing(12)
          : theme.spacing(8)
      }
      {...props}
    >
      <Grid
        container
        sx={{ height: mediumFrame ? '60vh' : largeFrame ? '80vh' : '90vh' }}
      >
        {largerThanPhone && (
          <Grid
            pl={mediumFrame ? theme.spacing(4) : theme.spacing(10)}
            item
            container
            xs
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={HeroImage}
              alt="Taruna Bangsa Hero Image"
              width={mediumFrame ? 400 : 800}
              height={mediumFrame ? 400 : 800}
            />
          </Grid>
        )}
        <Grid
          item
          container
          md={6}
          lg={7}
          xl={6}
          justifyContent="center"
          alignItems="center"
        >
          <Container
            size={
              extraSmallFrame
                ? 'sm'
                : smallFrame
                ? 'md'
                : mediumFrame
                ? 'md'
                : 'lg'
            }
          >
            <Grid container direction="column">
              <Grid item>
                <Typography
                  display="inline-block"
                  sx={styles['blueHeader']}
                  color="whitesmoke"
                  variant={_headerVariant}
                >
                  Lorem ipsum dolor
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  display="inline-block"
                  sx={styles['readHeader']}
                  color="whitesmoke"
                  variant={_headerVariant}
                >
                  amet, consectetur
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  display="inline-block"
                  sx={styles['blueHeader']}
                  color="whitesmoke"
                  variant={_headerVariant}
                >
                  adipisicing elit
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant={
                    smallFrame ? 'body2' : mediumFrame ? 'body2' : 'body1'
                  }
                  color="GrayText"
                  sx={{ my: theme.spacing(4) }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  endIcon={<ArrowRightAlt />}
                  variant="contained"
                  sx={styles['ctaBtn']}
                  disableElevation
                  onClick={() => router.push('/contact-us')}
                >
                  Contact us
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
