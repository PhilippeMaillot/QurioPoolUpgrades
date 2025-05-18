'use client'

import { AppBar, Toolbar, Typography, Button, Container, CssBaseline } from '@mui/material'
import Link from 'next/link'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../theme' // assure-toi de créer ce fichier comme indiqué plus bas

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Qurio Viewer
              </Typography>
              <Button color="inherit" component={Link} href="/">Accueil</Button>
              <Button color="inherit" component={Link} href="/armours">Armures</Button>
              <Button color="inherit" component={Link} href="/augmentations">Augmentations</Button>
              <Button color="inherit" component={Link} href="/skills">Talents</Button>
            </Toolbar>
          </AppBar>

          <Container sx={{ mt: 4 }}>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  )
}
