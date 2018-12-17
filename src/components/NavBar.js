import React from 'react';
import Toolbar from '@material-ui/core/es/Toolbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

const NavBar = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="title" color="inherit">
        To Do App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default NavBar;
