import {
  Grid,
  Typography,
  TypographyTypeMap,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useResponsive } from 'helpers/custom-hooks'
import React, { FC, ReactNode } from 'react'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import Container from '@/components/Container'

interface HeaderLayoutProps {
  children?: ReactNode
  title: string
  subtitle?: string
  titleProps?: OverridableComponent<TypographyTypeMap<object, 'span'>>
  mode?: 'dark' | 'light'
}

const HeaderLayout: FC<HeaderLayoutProps> = ({
  children,
  title,
  subtitle,
  mode = 'light',
}) => {
  const theme = useTheme()
  const { Phone, Tablet, SmallDesktop, Desktop } = useResponsive()
  const customSmallPhone = useMediaQuery('(max-width:350px)')

  return (
    <Container
      py={
        Phone ? theme.spacing(4) : Tablet ? theme.spacing(8) : theme.spacing(12)
      }
      size={Phone ? 'sm' : SmallDesktop ? 'md' : Desktop ? 'lg' : 'xl'}
    >
      <Grid item xs justifyContent="center" alignItems="center">
        <Typography
          variant={Phone ? 'h6' : Tablet ? 'h5' : 'h4'}
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
        mt={
          Phone
            ? theme.spacing(4)
            : Tablet
            ? theme.spacing(6)
            : theme.spacing(8)
        }
        justifyContent="center"
        alignItems="center"
        container
        item
        xs
      >
        {children}
      </Grid>
    </Container>
  )
}

export default HeaderLayout
