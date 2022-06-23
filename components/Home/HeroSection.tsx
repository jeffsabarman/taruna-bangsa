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
import { useResponsive } from 'helpers/custom-hooks';

const HeroSection: FC = (props) => {
  /** Utilities */
  const theme = useTheme();
  const router = useRouter();
  const { Phone, SmallDesktop, Desktop, Tablet } = useResponsive();
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
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'));
  const _headerVariant = Phone ? 'h6' : SmallDesktop ? 'h5' : 'h4';

  return (
    <Box
      position="relative"
      mt={largerThanPhone || Phone ? theme.spacing(12) : theme.spacing(8)}
      {...props}
    >
      <Grid
        container
        sx={{ height: SmallDesktop ? '60vh' : Desktop ? '80vh' : '90vh' }}
      >
        {largerThanPhone && (
          <Grid
            pl={SmallDesktop ? theme.spacing(4) : theme.spacing(10)}
            item
            container
            xs
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={HeroImage}
              alt="Taruna Bangsa Hero Image"
              width={SmallDesktop ? 400 : 800}
              height={SmallDesktop ? 400 : 800}
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
            size={Phone ? 'sm' : Tablet ? 'md' : SmallDesktop ? 'md' : 'lg'}
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
                  variant={Tablet ? 'body2' : SmallDesktop ? 'body2' : 'body1'}
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
