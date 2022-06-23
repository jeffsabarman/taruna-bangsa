import { useMediaQuery, useTheme } from '@mui/material';

export const useResponsive = () => {
  const theme = useTheme();

  const BigDesktop = useMediaQuery(theme.breakpoints.up('xl'));
  const Desktop = useMediaQuery(theme.breakpoints.down('xl'));
  const SmallDesktop = useMediaQuery(theme.breakpoints.down('lg'));
  const Tablet = useMediaQuery(theme.breakpoints.down('md'));
  const Phone = useMediaQuery(theme.breakpoints.down('sm'));

  return { BigDesktop, Desktop, SmallDesktop, Tablet, Phone };
};
