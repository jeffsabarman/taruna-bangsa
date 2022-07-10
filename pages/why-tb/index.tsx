import Academics from '@/components/Home/Academics';
import WhyTb from '@/components/Home/WhyTb';
import { Box, Divider, Grid, useMediaQuery, useTheme } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import React from 'react';

const WhyTBPages = () => {
  /** Utilities */
  const theme = useTheme();
  const { Phone, SmallDesktop, Desktop } = useResponsive();

  /** Media Queries */
  const largerThanPhone = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box mt={largerThanPhone || Phone ? theme.spacing(12) : theme.spacing(8)}>
      <WhyTb />
      <Academics />
    </Box>
  );
};

export default WhyTBPages;
