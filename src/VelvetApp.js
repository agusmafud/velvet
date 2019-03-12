import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";

import HomeContainer from './containers/HomeContainer';

const theme = createMuiTheme({
  palette: {
    primary: {      
      main: '#8a6284',            
    },
    secondary: {      
      main: '#98ad38',      
    },
    typography: {
      useNextVariants: true,
    },
  },
});

class VelvetApp
 extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>   
        
        <Helmet>          
          <title>Velvet chocolates</title>                    
        </Helmet>   
        
        <CssBaseline />
        
        <Switch>                                                 
          <Route path="/" component={HomeContainer} />
        </Switch>        

      </MuiThemeProvider>
    );
  }
}

export default VelvetApp;