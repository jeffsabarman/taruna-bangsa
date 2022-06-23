import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
  Grid,
  Button,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link, { LinkProps } from 'next/link';
import React, { FC, useMemo, useState } from 'react';
import Container from '@/components/Container';
import SideDrawer from '@/components/SideDrawer';
import { useRouter } from 'next/router';

interface ElevationScrollProps {
  window?: () => Window;
  children: React.ReactElement;
}

interface MenuItemProps extends LinkProps {
  label: string;
}

type MenuItem = {
  path: string;
  label: string;
};

const MenuItem: FC<MenuItemProps> = ({ label, href, ...props }) => {
  /** Utilities */
  const theme = useTheme();
  const router = useRouter();
  const active = router.pathname === `/${href}`;
  const styles = {
    '&.MuiButton-text': {
      fontSize: '1rem',
      color: active ? theme.palette.primary.dark : theme.palette.grey[600],
      textTransform: 'capitalize',
      padding: '1rem 2rem',
      borderRadius: active ? 0 : null,
      borderBottom: active ? '2px solid' : null,
      '&:hover': {
        boxShadow: `inset 20rem 0 0 0 ${theme.palette.primary.dark}`,
        color: theme.palette.background.paper,
        borderBottom: null,
        borderRadius: 2,
      },
    },
  };

  return (
    <Link href={href} passHref {...props}>
      <Button size="small" sx={styles['&.MuiButton-text']} variant="text">
        {label}
      </Button>
    </Link>
  );
};

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

export const MENU_LIST: Array<MenuItem> = [
  {
    path: 'about-us',
    label: 'About Us',
  },
  {
    path: 'why-tb',
    label: 'Why TB?',
  },
  {
    path: 'academics',
    label: 'Academics',
  },
  {
    path: 'facilities',
    label: 'Facilities',
  },
  {
    path: 'news-and-events',
    label: 'News & events',
  },
  {
    path: 'contact-us',
    label: 'Contact Us',
  },
];

const ElevationAppBar = (props: Partial<ElevationScrollProps>) => {
  /** Utilities */
  const theme = useTheme();
  const mediumFrame = useMediaQuery(theme.breakpoints.down('lg'));
  const smallFrame = useMediaQuery(theme.breakpoints.down('sm'));
  const styles = {
    hamburger: {
      display: { lg: 'none' },
      color: theme.palette.primary.dark,
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
    return MENU_LIST.map(({ path, label }) => {
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
  }, []);

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
          py={mediumFrame ? theme.spacing(1) : theme.spacing(3)}
          size={smallFrame ? 'xs' : mediumFrame ? 'sm' : 'md'}
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
                  <Typography
                    style={{ cursor: 'pointer' }}
                    variant="h6"
                    color="primary.dark"
                  >
                    LOGO
                  </Typography>
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
