import { Grid, Typography, useTheme } from '@mui/material';
import React from 'react';

const RegistrationFlow = () => {
  /** Utilities */
  const theme = useTheme();
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item container xs spacing={1}>
        <Grid item>
          <Typography color="GrayText">1.</Typography>
        </Grid>
        <Grid item xs>
          <Typography color="GrayText">
            Pendaftar mengakses web tarunabangsa.quintal.id/apply untuk
            registrasi awal mendapatkan akses login ke Formulir Pendaftaran
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs spacing={1}>
        <Grid item>
          <Typography color="GrayText">2.</Typography>
        </Grid>
        <Grid item xs>
          <Typography color="GrayText">
            Melakukan pembayaran terlebih dahulu untuk Formulir Pendaftaran
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs spacing={1}>
        <Grid item>
          <Typography color="GrayText">3.</Typography>
        </Grid>
        <Grid item xs>
          <Typography color="GrayText">
            Pengisian Formulir Pendaftaran dan mengirim dokumen pendukung secara
            online melalui web tarunabangsa.quintal.id/apply
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs spacing={1}>
        <Grid item>
          <Typography color="GrayText">4.</Typography>
        </Grid>
        <Grid item xs>
          <Typography color="GrayText">
            Mengikuti Tes Masuk sesuai jadwal yang telah ditentukan (melalui
            perjanjian terlebih dahulu)
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs spacing={1}>
        <Grid item>
          <Typography color="GrayText">5.</Typography>
        </Grid>
        <Grid item xs>
          <Typography color="GrayText">
            Peserta Didik yang diterima akan mendapatkan Surat Pemberitahuan
            Penerimaan Peserta Didik Baru
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs spacing={1}>
        <Grid item>
          <Typography color="GrayText">6.</Typography>
        </Grid>
        <Grid item xs>
          <Typography color="GrayText">
            Peserta Didik yang diterima harus :
          </Typography>
          <Typography mt={theme.spacing(1)} color="GrayText">
            &#x2022; Melengkapi dokumen tambahan
          </Typography>
          <Typography color="GrayText">
            &#x2022; Membayar Biaya Penerimaan Peserta Didik Baru setelah
            menerima no Virtual Account BCA
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default RegistrationFlow;
