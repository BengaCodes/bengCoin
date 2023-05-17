import {
  CssBaseline,
  TextField,
  ThemeProvider,
  createTheme
} from '@mui/material'
import { useState } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('dark')

  const theme = createTheme({
    palette: {
      mode: themeMode
    },
    typography: {
      fontSize: 14
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <TextField value='Benga Codes!' />
      </div>
    </ThemeProvider>
  )
}

export default App
