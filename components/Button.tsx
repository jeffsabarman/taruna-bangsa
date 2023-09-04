import { styled } from '@mui/material/styles'
import { Button, ButtonProps } from '@mui/material'

export const PrimaryButton = styled(Button)<ButtonProps>(({ theme }) => ({
  textTransform: 'capitalize',
  backgroundColor: theme.palette.primary.light,
  borderRadius: theme.spacing(2),
}))
