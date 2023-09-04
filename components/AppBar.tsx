import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  useTheme,
  Grid,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Link from 'next/link'
import React, { useMemo, useState } from 'react'
import { useResponsive } from 'helpers/custom-hooks'
import Image from 'next/image'
import { MENU_LIST } from 'helpers/constants'
import Container from '@/components/Container'
import SideDrawer from '@/components/SideDrawer'
import MenuItem from '@/components/MenuItem'

interface ElevationScrollProps {
  window?: () => Window
  children: React.ReactElement
}

const ElevationScroll = (props: ElevationScrollProps) => {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

function ElevationAppBar(props: Partial<ElevationScrollProps>) {
  /** Utilities */
  const theme = useTheme()
  const { SmallDesktop, Desktop, Phone } = useResponsive()
  const styles = {
    hamburger: {
      display: { lg: 'none' },
      color: theme.palette.primary.main,
      marginRight: theme.spacing(3),
    },
  }

  /** States */
  const [showSideDrawer, setShowSideDrawer] = useState<boolean>(false)

  /** Functions */
  const handleDrawerToggle = () => {
    setShowSideDrawer((prevState) => !prevState)
  }

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
      )
    })
  }, [])

  const renderSideDrawer = useMemo(() => {
    return (
      <SideDrawer
        open={showSideDrawer}
        onClose={() => setShowSideDrawer(false)}
      />
    )
  }, [showSideDrawer])

  return (
    <ElevationScroll {...props}>
      <AppBar sx={{ backgroundColor: theme.palette.background.paper }}>
        <Container
          py={Phone ? 0 : SmallDesktop ? theme.spacing(1) : theme.spacing(2)}
          size={Phone ? 'xs' : SmallDesktop ? 'sm' : 'md'}
        >
          <Toolbar>
            <Grid alignItems="center" container spacing={Desktop ? 0 : 1}>
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
                <Link href="/" passHref>
                  <Image
                    style={{ cursor: 'pointer' }}
                    src="/images/stb-logo.svg"
                    width={Phone ? 140 : 160}
                    height={80}
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
  )
}

export default ElevationAppBar
