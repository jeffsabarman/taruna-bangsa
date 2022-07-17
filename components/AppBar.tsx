import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  useTheme,
  Grid,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import Container from '@/components/Container';
import SideDrawer from '@/components/SideDrawer';
import { useResponsive } from 'helpers/custom-hooks';
import Image from 'next/image';
import MenuItem from '@/components/MenuItem';
import { MENU_LIST } from 'helpers/constants';

interface ElevationScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

const ElevationScroll = (props: ElevationScrollProps) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const ElevationAppBar = (props: Partial<ElevationScrollProps>) => {
  /** Utilities */
  const theme = useTheme();
  const { SmallDesktop, Phone } = useResponsive();
  const styles = {
    hamburger: {
      display: { lg: 'none' },
      color: theme.palette.primary.main,
    },
  };

  /** States */
  const [showSideDrawer, setShowSideDrawer] = useState<boolean>(false);

  /** Functions */
  const handleDrawerToggle = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  /** Components */
  const renderMenuList = useMemo(() => {
    return MENU_LIST?.map(({ path, label }) => {
      return (
        <Grid
          key={path}
          item
          sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}
        >
          <MenuItem href={path} label={label} />
        </Grid>
      );
    });
  }, [MENU_LIST]);

  const renderSideDrawer = useMemo(() => {
    return (
      <SideDrawer
        open={showSideDrawer}
        onClose={() => setShowSideDrawer(false)}
      />
    );
  }, [showSideDrawer]);

  return (
    <ElevationScroll {...props}>
      <AppBar sx={{ backgroundColor: theme.palette.background.paper }}>
        <Container
          py={SmallDesktop ? theme.spacing(1) : theme.spacing(3)}
          size={Phone ? 'xs' : SmallDesktop ? 'sm' : 'md'}
        >
          <Toolbar>
            <Grid alignItems="center" container spacing={1}>
              <Grid item>
                <IconButton
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={styles.hamburger}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Link href={'/'} passHref>
                  <Image
                    src="/images/stb-logo.svg"
                    width={Phone ? 200 : 300}
                    height={Phone ? 50 : 100}
                  />
                </Link>
              </Grid>
              <Grid item flexGrow={1} />
              {renderMenuList}
            </Grid>
          </Toolbar>
        </Container>
        {renderSideDrawer}
      </AppBar>
    </ElevationScroll>
  );
};

export default ElevationAppBar;
