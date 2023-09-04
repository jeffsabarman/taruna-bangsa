import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import { useResponsive } from 'helpers/custom-hooks'
import { getShortenText } from 'helpers'

interface NewsEventsCardProps {
  imageUrl: string
  caption: string
  variant?: 'dark' | 'light'
}

const NewsEventsCard = ({
  imageUrl,
  caption,
  variant,
}: NewsEventsCardProps) => {
  /** Utilities */
  const theme = useTheme()
  const { Phone } = useResponsive()
  const customSmallPhone = useMediaQuery('(max-width:360px)')

  return (
    <Box
      borderRadius={theme.spacing(4)}
      overflow="hidden"
      bgcolor={
        variant === 'dark'
          ? theme.palette.primary.main
          : theme.palette.primary.light
      }
      maxWidth={customSmallPhone ? '100%' : Phone ? '20rem' : '22rem'}
      width="100%"
      // sx={{ minWidth: '18rem', maxWidth: '22rem' }}
      // sx={{ width: customSmallDesktop ? '20rem' : '100%' }}
    >
      <Box position="relative">
        <img
          src={imageUrl}
          style={{ width: '100%', objectFit: 'cover', height: '16rem' }}
          alt="news"
        />
      </Box>
      <Box py={theme.spacing(2)} px={theme.spacing(3)}>
        <Typography
          // variant={Phone ? 'subtitle1' : 'h6'}
          variant="subtitle1"
          color="whitesmoke"
        >
          {getShortenText(caption, 34, 36)}
        </Typography>
      </Box>
    </Box>
  )
}

export default NewsEventsCard
