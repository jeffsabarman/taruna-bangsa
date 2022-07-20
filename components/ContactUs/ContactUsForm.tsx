import {
  Alert,
  AlertColor,
  Grid,
  Snackbar,
  Typography,
  useTheme,
} from '@mui/material';
import React, { ChangeEvent, FormEventHandler, useState } from 'react';
import { PrimaryButton } from '@/components/Button';
import HeaderLayout from '../HeaderLayout';
import { useResponsive } from 'helpers/custom-hooks';
import { StyledTextField } from '@/components/TextField';
import emailjs from '@emailjs/browser';

const ContactUsForm = () => {
  const theme = useTheme();
  const { Phone, Tablet, SmallDesktop } = useResponsive();
  const [emailForm, setEmailForm] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
  });
  const [alert, setAlert] = useState<{
    show: boolean;
    severity: AlertColor | undefined;
    message: string;
  }>({
    show: false,
    severity: undefined,
    message: '',
  });

  const SERVICE_ID = process.env.EMAIL_SERVICE_ID || '';
  const TEMPLATE_ID = process.env.EMAIL_TEMPLATE_ID || '';
  const USER_ID = process.env.EMAIL_USER_ID || '';

  /** Functions */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailForm({ ...emailForm, [name]: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { title, email, message } = emailForm;
    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { title, email, message },
        USER_ID,
      );
      if (response) {
        setAlert({
          show: true,
          severity: 'success',
          message: 'Pesan Anda berhasil dikirim!',
        });
        setEmailForm({ name: '', email: '', title: '', message: '' });
      }
    } catch (error) {
      setAlert({
        show: true,
        severity: 'error',
        message: 'Terjadi kesalahan dalam mengirim pesan, silakan coba lagi.',
      });
    }
  };

  const handleCloseAlert = () => {
    setAlert({ show: false, severity: undefined, message: '' });
  };

  return (
    <Grid container direction="column" spacing={Phone ? 2 : 3}>
      <Snackbar
        open={alert?.show}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alert.severity}
          sx={{ width: '100%' }}
        >
          {alert?.message}
        </Alert>
      </Snackbar>
      <Grid item>
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={3} mt={3}>
            <Grid item xs>
              <StyledTextField
                variant="filled"
                fullWidth
                label="Nama"
                name="name"
                color="secondary"
                onChange={handleChange}
                value={emailForm.name}
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
                onChange={handleChange}
                value={emailForm.email}
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
                onChange={handleChange}
                value={emailForm.title}
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
                onChange={handleChange}
                inputProps={{
                  style: {
                    marginTop: theme.spacing(3),
                  },
                }}
                value={emailForm.message}
                multiline
                required
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end" mt={theme.spacing(3)}>
            <Grid item>
              <PrimaryButton type="submit" variant="contained">
                Kirim Pesan
              </PrimaryButton>
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
          <Grid mt={Tablet ? 1 : 3} container spacing={Tablet ? 3 : 4}>
            <Grid item xs={12} md={6}>
              <Typography
                variant={SmallDesktop ? 'body2' : 'body1'}
                color="whitesmoke"
              >
                Jalan Raya Babakan Madang No. 101 Sentul, Bogor 16810
              </Typography>
              <Typography
                variant={SmallDesktop ? 'body2' : 'body1'}
                color="whitesmoke"
              >
                Jawa Barat
              </Typography>
            </Grid>
            <Grid item direction="column" container xs={12} md={6}>
              <Typography
                variant={SmallDesktop ? 'body2' : 'body1'}
                color="whitesmoke"
              >
                Phone : (021) 8795 1016
              </Typography>
              <Typography
                variant={SmallDesktop ? 'body2' : 'body1'}
                color="whitesmoke"
              >
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
