import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import Link from 'next/link'
import { margin } from '@mui/system';

interface NavLink {
  text: string;
  url: string;
}

let links: NavLink[] = [
  {
    text: 'Todos',
    url: '/'
  },
  {
    text: 'Lists',
    url: '/lists'
  },
  // {
  //   text: 'About',
  //   url: '/about'
  // }
]

const AppBarSimple = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0} sx={{backgroundColor: '#27272f'}}>
        <Container maxWidth="md">
          <Toolbar>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {links.map(l =>
                <Button key={l.text} sx={{ color: '#fff', mx: 2 }}>
                  <Link href={l.url}><a>{l.text}</a></Link>
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default AppBarSimple;