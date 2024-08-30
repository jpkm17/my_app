import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//import blue from '@material-ui/core/colors/blue';

import App from './App';
import './index.css'

import {deepPurple, indigo} from '@material-ui/core/colors/';



const theme = createMuiTheme({
  palette: {
    primary:{
      main: indigo[900],
    },
    secondary:{
      main: deepPurple[900],
    }
  },
})

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);