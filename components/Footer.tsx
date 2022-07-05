import { Divider, Grid, IconButton, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import MenuItem from '@/components/MenuItem';
import { Facebook, Instagram, YouTube } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        justifyContent="center"
        alignItems="center"
        py={theme.spacing(4)}
      >
        <Grid item xs container justifyContent="center">
          <Image src="/images/stb-logo.svg" width={300} height={100} />
        </Grid>
        <Grid item container xs>
          <Grid item xs container direction="column">
            <MenuItem href="about-us" label="Tentang Kami" />
            <MenuItem href="why-tb" label="Mengapa STB?" />
            <MenuItem href="academics" label="Akademik" />
          </Grid>
          <Grid item xs container direction="column">
            <MenuItem href="facilities" label="Fasilitas" />
            <MenuItem href="news-and-events" label="Berita & Acara" />
            <MenuItem href="contact-us" label="Hubungi Kami" />
          </Grid>
        </Grid>
        <Grid item xs container justifyContent="center" spacing={1}>
          <Grid item>
            <IconButton aria-label="" onClick={() => null}>
              <Instagram />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="" onClick={() => null}>
              <Facebook />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="" onClick={() => null}>
              <YouTube />
            </IconButton>
          </Grid>
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
      >
        <Typography textAlign="center" component="p" variant="caption">
          © 2021 Hak Cipta Sekolah Taruna Bangsa
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
