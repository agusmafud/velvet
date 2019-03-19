import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Helmet } from "react-helmet";

import PreviewContainer from './containers/PreviewContainer';
import HomeContainer from './containers/HomeContainer';
import ProductoContainer from './containers/ProductoContainer';
import ProductoAgregadoContainer from './containers/ProductoAgregadoContainer';
import CarritoContainer from './containers/CarritoContainer';
import CheckoutContainer from './containers/CheckoutContainer';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {      
      main: '#8a6284',            
    },
    secondary: {      
      main: '#98ad38',      
    }
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
          <Route path="/next/carrito" component={CarritoContainer} />
          <Route path="/next/checkout" component={CheckoutContainer} />
          <Route path="/next" component={HomeContainer} />
          <Route path="/" component={PreviewContainer} />                    
        </Switch>        

        <Route path="/next/producto/:url" component={ProductoContainer} />
        <Route path="/next" component={ProductoAgregadoContainer} />

      </MuiThemeProvider>
    );
  }
}

export default VelvetApp;