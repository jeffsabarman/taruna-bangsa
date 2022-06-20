import React, { FC } from 'react';
import Drawer from '@mui/material/Drawer';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { MENU_LIST } from './AppBar';
import { Close as CloseIcon } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface IDrawerProps {
  open: boolean;
  onClose: () => void;
}

const SideDrawer: FC<IDrawerProps> = ({ open, onClose }) => {
  /** Utilities */
  const theme = useTheme();
  const router = useRouter();
  const smallFrame = useMediaQuery(theme.breakpoints.down('sm'));
  const styles = {
    listContainer: {
      width: smallFrame ? '100vw' : '40vw',
      background:
        'radial-gradient(circle, rgba(0,51,255,1) 0%, rgba(0,25,128,1) 100%)',
      height: '100%',
    },
    listItemText: {
      color: theme.palette.grey['300'],
      padding: theme.spacing(3),
      textAlign: 'center' as 'center',
      fontSize: '1.2rem',
    },
  };

  /** Functions */
  const handleNavigate = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <List sx={styles.listContainer}>
        <ListItem>
          <ListItemButton onClick={onClose}>
            <CloseIcon sx={{ color: theme.palette.grey['300'] }} />
          </ListItemButton>
        </ListItem>
        {MENU_LIST.map(({ path, label }) => (
          <ListItem key={path} disablePadding>
            <ListItemButton onClick={() => handleNavigate(path)}>
              <ListItemText
                primaryTypographyProps={styles.listItemText}
                primary={label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideDrawer;
