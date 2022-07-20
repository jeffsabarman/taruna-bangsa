import {
  Divider,
  Grid,
  IconButton,
  Typography,
  useTheme,
  Box,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';
import { useResponsive } from 'helpers/custom-hooks';

const Footer = () => {
  const theme = useTheme();

  const { Phone, SmallDesktop, Tablet } = useResponsive();

  return (
    <Grid container direction="column">
      <Divider />
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        py={theme.spacing(4)}
      >
        <Grid
          item
          xs={Tablet ? 12 : SmallDesktop ? 3 : 4}
          container
          justifyContent="center"
        >
          <Image src="/images/stb-logo.svg" width={200} height={80} />
        </Grid>
        <Grid
          item
          container
          // xs={Phone ? 12 : 5}
          xs
          sx={{ py: Phone ? 3 : 0 }}
          alignItems="center"
        >
          <Grid item xs={6} container direction="column">
            <MenuItem href="about-us" label="Tentang Kami" />
            <MenuItem href="why-tb" label="Mengapa STB?" />
            <MenuItem href="academics" label="Akademik" />
          </Grid>
          <Grid item xs={6} container direction="column">
            <MenuItem href="facilities" label="Fasilitas" />
            <MenuItem href="news-and-events" label="Berita & Acara" />
            <MenuItem href="contact-us" label="Hubungi Kami" />
          </Grid>
        </Grid>
        <Grid
          item
          xs={Tablet ? 12 : SmallDesktop ? 3 : 4}
          container
          justifyContent="center"
          spacing={1}
        >
          <Grid item>
            <IconButton
              aria-label=""
              onClick={() =>
                window.open('https://www.instagram.com/tarunabangsasentul/')
              }
            >
              <Instagram />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label=""
              onClick={() =>
                window.open(
                  'https://www.facebook.com/sekolahtarunabangsasentul/',
                )
              }
            >
              <Facebook />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label=""
              onClick={() =>
                window.open(
                  'https://www.youtube.com/c/SekolahTarunaBangsaSentul',
                )
              }
            >
              <YouTube />
            </IconButton>
          </Grid>
          {/* <Grid item>
            <IconButton aria-label="" onClick={() => null}>
              <YouTube />
            </IconButton>
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid
        item
        justifyContent="center"
        alignItems="center"
        py={theme.spacing(3)}
        px={theme.spacing(1)}
      >
        <Typography textAlign="center" component="p" variant="caption">
          © 2021 Hak Cipta Sekolah Taruna Bangsa
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
