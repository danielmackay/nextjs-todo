import Footer from './footer';
import AppBarSimple from './appBarSimple';
import React  from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers';

export default function Layout({ children }: any) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#776be7'
      },
      background: {
        default: '#32333d',
        paper: '#373740'
      },
      text: {
        primary: '#ffffffb2'
      },
      error: {
        main: '#f64e62'
      },
      mode: 'dark'
    },

  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <CssBaseline />
          <AppBarSimple />
          <Container maxWidth="md" sx={{ my: 16 }}>
            <main>{children}</main>
          </Container>
          <Footer />
        </LocalizationProvider>
      </ThemeProvider>

    </>
  )
}