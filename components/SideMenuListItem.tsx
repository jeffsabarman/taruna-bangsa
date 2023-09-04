import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from '@mui/icons-material'
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

interface SideMenuListItemProps {
  label: string
  submenus: {
    label: string
    path: string
  }[]
  onClickSubmenu: () => void
}

const SideMenuListItem = ({
  label,
  submenus,
  onClickSubmenu,
}: SideMenuListItemProps) => {
  /** Utilities */
  const theme = useTheme()
  const styles = {
    listItemText: {
      color: theme.palette.grey['300'],
      padding: theme.spacing(3),
      fontSize: '1.2rem',
    },
    subListItemText: {
      color: theme.palette.grey['300'],
      padding: theme.spacing(1),
      fontSize: '1rem',
      marginLeft: theme.spacing(6),
      marginRight: theme.spacing(4),
    },
  }
  const router = useRouter()

  /** States */
  const [showSubmenu, setShowSubmenu] = useState(false)

  /** Functions */
  const handleNavigate = (path: string) => {
    router.push(path)
    onClickSubmenu()
  }

  return (
    <>
      <ListItemButton
        onClick={() => setShowSubmenu((prev) => !prev)}
        disableRipple
      >
        <ListItemText
          primaryTypographyProps={styles.listItemText}
          primary={label}
        />
        <ListItemIcon>
          {showSubmenu ? (
            <KeyboardArrowUpIcon fontSize="small" htmlColor="whitesmoke" />
          ) : (
            <KeyboardArrowDownIcon fontSize="small" htmlColor="whitesmoke" />
          )}
        </ListItemIcon>
      </ListItemButton>
      <Collapse in={showSubmenu} timeout="auto" unmountOnExit>
        {submenus?.map((submenu) => (
          <List key={submenu?.path} component="div">
            <ListItemButton onClick={() => handleNavigate(submenu.path)}>
              <ListItemText
                primaryTypographyProps={styles.subListItemText}
                primary={submenu.label}
              />
            </ListItemButton>
          </List>
        ))}
      </Collapse>
    </>
  )
}

export default SideMenuListItem
