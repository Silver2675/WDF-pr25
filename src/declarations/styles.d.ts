import { palette } from '@/themes/palette'

declare module '@mui/material/styles' {
  interface Theme {
    palette: Palette & typeof palette
  }
}
