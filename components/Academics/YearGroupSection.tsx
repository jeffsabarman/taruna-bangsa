import { Grid, Typography, useTheme } from '@mui/material'
import { useResponsive } from 'helpers/custom-hooks'

interface YearGroupSectionProps {
  sections: { key: string; description: string }[]
}

const YearGroupSection = ({ sections }: YearGroupSectionProps) => {
  /** Utilities */
  const theme = useTheme()

  const { Phone } = useResponsive()

  return (
    <>
      {sections?.map(({ key, description }) => (
        <Grid
          mb={Phone ? theme.spacing(2) : theme.spacing(4)}
          key={key}
          container
          direction="column"
          spacing={1}
        >
          <Grid item>
            <Typography variant="subtitle1">{key}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="GrayText">
              {description}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </>
  )
}

export default YearGroupSection
