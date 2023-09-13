import { Grid, Typography, Box, useTheme, useMediaQuery } from '@mui/material'
import { grey } from '@mui/material/colors'
import { ArrowForwardIos as ArrowIcon } from '@mui/icons-material'
import { styled } from '@mui/material/styles'
import { getShortenText, getFormatDate } from 'helpers'
import { useRouter } from 'next/router'
import { useResponsive } from 'helpers/custom-hooks'
import Image from 'next/legacy/image'
import Link from 'next/link'

const StyledBox = styled(Box)(() => ({
  backgroundColor: grey[100],
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: grey[200],
  },
  height: '100%',
}))

interface CardNewsEventProps {
  imgUrl: string
  publishedAt: string
  imgCaption: string
  title: string
  description: string
  slug: string
}

const CardNewsEvent = ({
  imgUrl,
  publishedAt,
  imgCaption,
  title,
  description,
  slug,
}: CardNewsEventProps) => {
  //* Routing
  const router = useRouter()

  //* Style
  const theme = useTheme()

  //* Media Query
  const { Phone, Desktop } = useResponsive()
  const customSmallDesktop = useMediaQuery('(max-width:1000px)')
  const customPhone = useMediaQuery('(max-width:700px)')
  const customSmallPhone = useMediaQuery('(max-width:400px)')

  return (
    <Link href={`news-and-events/${slug}`} passHref>
      <StyledBox>
        <Grid container direction="column">
          <Grid item>
            <Image
              src={imgUrl}
              alt={imgCaption}
              width={1200}
              height={600}
              objectFit="cover"
            />
          </Grid>
          <Grid container direction="column" spacing={2} p={3} pt={1}>
            <Grid item>
              <Typography
                variant={Phone ? 'caption' : 'caption'}
                fontWeight={600}
                color={grey[600]}
              >
                {getFormatDate(publishedAt)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                color="primary"
                variant={Phone ? 'body1' : 'subtitle1'}
                fontWeight={600}
              >
                {getShortenText(title, 56, 58)}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                {getShortenText(description, 120, 124)}
              </Typography>
            </Grid>
            <Grid
              item
              mt={2}
              mb={1}
              sx={{
                color: theme.palette.primary.light,
                '&:hover': {
                  color: theme.palette.warning.main,
                },
              }}
            >
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Typography
                    variant={Phone ? 'caption' : 'body2'}
                    fontWeight={500}
                  >
                    Baca Lebih
                  </Typography>
                </Grid>
                <Grid
                  item
                  style={{
                    marginTop: Phone ? theme.spacing(0.8) : theme.spacing(0.5),
                  }}
                >
                  <ArrowIcon
                    // fontSize="small"
                    sx={{
                      fontSize: Phone ? '1rem' : '1.2rem',
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </StyledBox>
    </Link>
  )
}

export default CardNewsEvent
