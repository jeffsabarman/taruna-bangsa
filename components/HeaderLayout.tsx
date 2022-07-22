import { Grid, Typography, TypographyTypeMap, useTheme } from '@mui/material';
import { useResponsive } from 'helpers/custom-hooks';
import React, { FC, ReactNode } from 'react';
import Container from '@/components/Container';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface HeaderLayoutProps {
  children?: ReactNode;
  title: string;
  subtitle?: string;
  titleProps?: OverridableComponent<TypographyTypeMap<{}, 'span'>>;
  mode?: 'dark' | 'light';
}

const HeaderLayout: FC<HeaderLayoutProps> = ({
  children,
  title,
  subtitle,
  mode = 'light',
}) => {
  const theme = useTheme();
  const { Phone, Tablet, SmallDesktop, Desktop } = useResponsive();
  return (
    <Container
      py={Phone ? theme.spacing(4) : theme.spacing(12)}
      size={Phone ? 'sm' : SmallDesktop ? 'md' : Desktop ? 'lg' : 'xl'}
    >
      <Grid item xs justifyContent="center" alignItems="center">
        <Typography
          variant={Phone ? 'h6' : 'h4'}
          color={mode === 'light' ? 'primary' : 'whitesmoke'}
          textAlign="center"
        >
          {title}
        </Typography>
        {subtitle && (
          <Container
            size={Tablet ? 'xs' : SmallDesktop ? 'sm' : Desktop ? 'lg' : 'xl'}
          >
            <Typography
              variant={Phone ? 'body2' : 'body1'}
              mt={theme.spacing(4)}
              textAlign="center"
              color={mode === 'light' ? 'GrayText' : 'whitesmoke'}
            >
              {subtitle}
            </Typography>
          </Container>
        )}
      </Grid>
      <Grid
        mt={theme.spacing(4)}
        justifyContent="center"
        alignItems="center"
        container
        item
        xs
      >
        {children}
      </Grid>
    </Container>
  );
};

export default HeaderLayout;
