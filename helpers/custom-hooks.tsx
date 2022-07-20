import { useMediaQuery, useTheme } from '@mui/material';

export const useResponsive = () => {
  const theme = useTheme();

  const BigDesktop = useMediaQuery(theme.breakpoints.up('xl')); // ? > 1536px
  const Desktop = useMediaQuery(theme.breakpoints.down('xl')); // ? < 1536px
  const SmallDesktop = useMediaQuery(theme.breakpoints.down('lg')); // ? 1200px
  const Tablet = useMediaQuery(theme.breakpoints.down('md')); // ? 900px
  const Phone = useMediaQuery(theme.breakpoints.down('sm')); // ? 600px

  return { BigDesktop, Desktop, SmallDesktop, Tablet, Phone };
};

export const useBackgroundTypography = () => {
  /** Utilities */
  const theme = useTheme();
  const styles = {
    yellowHeader: {
      backgroundColor: theme.palette.warning.main,
      p: theme.spacing(1),
    },
    lighblueHeader: {
      backgroundColor: theme.palette.primary.light,
      p: theme.spacing(1),
    },
    redHeader: {
      backgroundColor: theme.palette.secondary.main,
      p: theme.spacing(1),
    },
    greyHeader: {
      backgroundColor: theme.palette.grey[500],
      p: theme.spacing(1),
    },
    primaryHeader: {
      backgroundColor: theme.palette.primary.main,
      p: theme.spacing(1),
    },
    divider: {
      borderWidth: 1.5,
      borderColor: theme.palette.grey[400],
    },
  };
  return styles;
};
