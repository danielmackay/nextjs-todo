//import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Footer from './footer';
import AppBarSimple from './appBarSimple';
import React, { useState } from 'react';
//import AppBar from './components/AppBar';
import deepPurple from '@mui/material/colors/deepPurple';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { truncate } from 'fs';
//import { createTheme } from '@mui/material/styles';

export default function Layout({ children }: any) {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      //primary: deepPurple,
      mode: darkMode ? 'dark' : 'light'
    }
  });

  const handleToggleDarkMode = (darkModeValue: boolean) => {
    setDarkMode(darkModeValue);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBarSimple />
        {/* <AppBar darkMode={darkMode} toggleDarkMode={handleToggleDarkMode} /> */}
        <Container maxWidth="md" sx={{my: 16}}>
          <main>{children}</main>
        </Container>
        <Footer />
      </ThemeProvider>

    </>
  )
}