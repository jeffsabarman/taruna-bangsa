import { Grid, CircularProgress, useTheme } from '@mui/material'
import React from 'react'
import { useResponsive } from 'helpers/custom-hooks'

interface LoadingComponentProps {
  themeColor?: 'red' | 'lightblue' | 'grey' | 'white' | 'blue' | 'yellow'
}

const LoadingComponent = ({
  themeColor = 'lightblue',
}: LoadingComponentProps) => {
  const { Phone, Tablet } = useResponsive()
  const theme = useTheme()

  const getColor = () => {
    switch (themeColor) {
      case 'red': {
        return theme.palette.secondary.main
      }
      case 'lightblue': {
        return theme.palette.primary.light
      }
      case 'grey': {
        return theme.palette.grey[500]
      }
      case 'white': {
        return theme.palette.background.paper
      }
      case 'blue': {
        return theme.palette.primary.main
      }
      default: {
        return theme.palette.warning.main
      }
    }
  }

  return (
    <Grid item>
      <CircularProgress
        style={{
          width: Phone ? '3rem' : Tablet ? '4.5rem' : '6rem',
          height: Phone ? '3rem' : Tablet ? '4.5rem' : '6rem',
          color: getColor(),
        }}
      />
    </Grid>
  )
}

export default LoadingComponent
