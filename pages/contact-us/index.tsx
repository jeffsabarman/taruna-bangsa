import ContactUsForm from '@/components/ContactUs/ContactUsForm';
import RegistrationFlow from '@/components/ContactUs/RegistrationFlow';
import HeaderLayout from '@/components/HeaderLayout';
import {
  Box,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import React from 'react';

const ContactUs = () => {
  /** Utilities */
  const theme = useTheme();
  const { Phone, SmallDesktop, Desktop } = useResponsive();

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box mt={largerThanPhone || Phone ? theme.spacing(12) : theme.spacing(8)}>
      <Grid container direction="column">
        <HeaderLayout title="Alur Pendaftaran Online">
          <RegistrationFlow />
        </HeaderLayout>
        <Box bgcolor={theme.palette.primary.main}>
          <Grid container direction="column">
            <HeaderLayout
              mode="dark"
              title="Hubungi Kami Untuk Informasi Lebih Lanjut"
            >
              <Grid container>
                <Grid item xs>
                  <ContactUsForm />
                </Grid>
              </Grid>
            </HeaderLayout>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default ContactUs;
