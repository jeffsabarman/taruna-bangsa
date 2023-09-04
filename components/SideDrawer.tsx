import React, { FC, useMemo } from 'react'
import Drawer from '@mui/material/Drawer'
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { ACADEMICS_SUBMENU, MENU_LIST } from 'helpers/constants'
import SideMenuListItem from './SideMenuListItem'

interface IDrawerProps {
  open: boolean
  onClose: () => void
}

const SideDrawer = ({ open, onClose }: IDrawerProps) => {
  /** Utilities */
  const theme = useTheme()
  const router = useRouter()
  const smallFrame = useMediaQuery(theme.breakpoints.down('sm'))
  const styles = {
    listContainer: {
      width: smallFrame ? '100vw' : '40vw',
      background: theme.palette.primary.dark,
      height: '100%',
    },
    listItemText: {
      color: theme.palette.grey['300'],
      padding: theme.spacing(1),
      marginLeft: theme.spacing(2),
      fontSize: '1.2rem',
    },
  }

  /** Functions */
  const handleNavigate = (path: string) => {
    router.push(path)
    onClose()
  }

  /** Components */
  const renderMenuItem = useMemo(() => {
    return MENU_LIST?.map(({ path, label }) => {
      return label === 'Akademik' ? (
        <SideMenuListItem
          submenus={ACADEMICS_SUBMENU}
          key={path}
          label="Akademik"
          onClickSubmenu={onClose}
        />
      ) : (
        <ListItemButton key={path} onClick={() => handleNavigate(path)}>
          <ListItemText
            primaryTypographyProps={styles.listItemText}
            primary={label}
          />
        </ListItemButton>
      )
    })
  }, [MENU_LIST])

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
        {renderMenuItem}
      </List>
    </Drawer>
  )
}

export default SideDrawer
