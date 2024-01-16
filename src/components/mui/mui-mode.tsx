import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'

export const MuiMode = () => {
  const theme = useTheme()
  return (
    <Typography
      component="h1"
      role="heading"
    >{`${theme.palette.mode} mode`}</Typography>
  )
}
