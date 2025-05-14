import { PropsWithChildren } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import {
  createTheme,
  PaletteOptions,
  StyledEngineProvider,
  ThemeOptions,
  ThemeProvider,
} from '@mui/material/styles'
import componentsOverrides from './componentsOverrides'
import mixins from './mixins'
import { palette } from './palette'
import typography from './typography'

export default function ThemeCustomization({ children }: PropsWithChildren) {
  const themeOptions: ThemeOptions = {
    palette: palette as PaletteOptions,
    mixins: mixins(),
    typography: typography(),
    components: componentsOverrides(),
  }

  const themes = createTheme(themeOptions)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
