import { Grid, TextField, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { PrimaryButton } from '@/components/Button';
import HeaderLayout from '../HeaderLayout';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiFilledInput-root': {
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(1),
  },
  '& .MuiFilledInput-inputMultiline': {
    backgroundColor: theme.palette.background.default,
  },
}));

const ContactUsForm = () => {
  const theme = useTheme();

  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <form action="">
          <Grid container direction="column" spacing={3} mt={3}>
            <Grid item xs>
              <StyledTextField
                variant="filled"
                fullWidth
                label="Nama"
                name="name"
                color="secondary"
                required
              />
            </Grid>
            <Grid item xs>
              <StyledTextField
                variant="filled"
                fullWidth
                label="E-mail"
                name="email"
                color="secondary"
                type="email"
                required
              />
            </Grid>
            <Grid item xs>
              <StyledTextField
                variant="filled"
                fullWidth
                label="Judul"
                name="title"
                color="secondary"
                required
              />
            </Grid>
            <Grid item xs>
              <StyledTextField
                variant="filled"
                fullWidth
                label="Pesan Anda"
                name="message"
                color="secondary"
                rows={5}
                inputProps={{
                  style: {
                    marginTop: theme.spacing(3),
                  },
                }}
                multiline
                required
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" mt={theme.spacing(3)}>
            <Grid item>
              <PrimaryButton variant="contained">Kirim Pesan</PrimaryButton>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <HeaderLayout title="Hubungi Kami" mode="dark">
          <Grid mt={3} container spacing={4}>
            <Grid item xs={6}>
              <Typography color="whitesmoke">
                Jalan Raya Babakan Madang No. 101 Sentul, Bogor 16810
              </Typography>
              <Typography color="whitesmoke">Jawa Barat</Typography>
            </Grid>
            <Grid item container justifyContent="flex-end" xs={6}>
              <Typography color="whitesmoke">
                Phone : (021) 8795 1016
              </Typography>
              <Typography color="whitesmoke">
                Email : ppdb@taruna-bangsa.com
              </Typography>
            </Grid>
          </Grid>
        </HeaderLayout>
      </Grid>
    </Grid>
  );
};

export default ContactUsForm;
