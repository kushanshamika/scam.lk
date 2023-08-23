import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import logo from "../images/logo.png";


export default function Navbar() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box
            component="img"
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            alt="The house from the offer."
            src={logo}
            width="200px"
        />
        <Box
            component="img"
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            alt="The house from the offer."
            src={logo}
            width="150px"
        />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
