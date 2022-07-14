import {
  Button,
  ListItemText,
  Menu,
  MenuList,
  MenuItem as MUIMenuItem,
  useTheme,
  Typography,
  Divider,
} from '@mui/material';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';

interface MenuItemProps extends LinkProps {
  label: string;
}

const MenuItem: FC<MenuItemProps> = ({ label, href, ...props }) => {
  /** Utilities */
  const theme = useTheme();
  const router = useRouter();
  const active = router.pathname === `/${href}`;
  const styles = {
    '&.MuiButton-text': {
      fontSize: '1rem',
      color: active ? theme.palette.primary.main : theme.palette.grey[600],
      textTransform: 'capitalize',
      padding: '0.4rem 2rem',
      '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.paper,
      },
    },
    '&.MuiMenuItem-root': {
      minWidth: 200,
    },
    '&.MuiMenuList-root': {
      backgroundColor: theme.palette.background.paper,
      outline: 'none',
      padding: 0,
    },
  };
  /** States */
  const [anchorEl, setAnchorEl] = useState(null);

  /** Functions */
  const handleClick = (event: any) => {
    if (label === 'Akademik') {
      if (anchorEl !== event.currentTarget) {
        setAnchorEl(event.currentTarget);
      }
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Link href={href} passHref {...props}>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onMouseOver={handleClick}
          size="small"
          sx={styles['&.MuiButton-text']}
          variant="text"
        >
          {label}
        </Button>
      </Link>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        sx={{ mt: theme.spacing(1) }}
      >
        <MenuList disableListWrap sx={styles['&.MuiMenuList-root']}>
          <MUIMenuItem
            onClick={() => router.push('/academics/kb-tk')}
            sx={styles['&.MuiMenuItem-root']}
          >
            <ListItemText>KB/TK</ListItemText>
          </MUIMenuItem>
          <Divider />
          <MUIMenuItem onClick={() => router.push('/academics/sd')}>
            <ListItemText>SD</ListItemText>
          </MUIMenuItem>
          <Divider />
          <MUIMenuItem onClick={() => router.push('/academics/smp')}>
            <ListItemText>SMP</ListItemText>
          </MUIMenuItem>
          <Divider />
          <MUIMenuItem onClick={() => router.push('/academics/sma')}>
            <ListItemText>SMA</ListItemText>
          </MUIMenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default MenuItem;
