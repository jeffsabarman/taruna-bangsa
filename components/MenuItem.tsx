import {
  Button,
  ListItemText,
  Menu,
  MenuList,
  MenuItem as MUIMenuItem,
  useTheme,
  Typography,
  Divider,
  Box,
} from '@mui/material';
import { ACADEMICS_SUBMENU } from 'helpers/constants';
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
  const active = router.pathname === `${href}`;
  const styles = {
    '&.MuiButton-text': {
      fontSize: '1rem',
      color: active ? theme.palette.primary.main : theme.palette.grey[600],
      textTransform: 'capitalize',
      padding: '0.4rem 2rem',
      textAlign: 'center',
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
        sx={{
          mt: theme.spacing(1),
        }}
      >
        <MenuList disableListWrap sx={styles['&.MuiMenuList-root']}>
          {ACADEMICS_SUBMENU.map((submenu) => (
            <Box key={submenu.path}>
              <MUIMenuItem
                onClick={() => router.push(submenu.path)}
                sx={styles['&.MuiMenuItem-root']}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: theme.palette.grey[600],
                  }}
                >
                  {submenu.label}
                </ListItemText>
              </MUIMenuItem>
              <Divider sx={{ padding: 0 }} />
            </Box>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default MenuItem;
