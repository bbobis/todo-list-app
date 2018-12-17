import React, { Fragment } from 'react';
import { render } from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';

render(
  <Fragment>
    <CssBaseline />
    <App />
  </Fragment>,
  document.getElementById('root')
);
