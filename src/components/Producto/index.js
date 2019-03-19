import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

import BackIcon from '@material-ui/icons/ArrowBackRounded';

import Galeria from './Galeria';
import Descripcion from './Descripcion';
import ContadorProducto from './ContadorProducto';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({  
  dialog: {
    width: '90%',    
    margin: '0 auto',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,    
    zIndex: 999,
  },  
  gridContainer: {
    margin:0, 
    paddingTop: 20
  },
  gridDesktop: {
    paddingLeft: theme.spacing.unit * 2, 
    paddingRight: theme.spacing.unit * 3
  },
  gridMobile: {
    textAlign: 'center',
    marginTop: theme.spacing.unit * 2, 
    paddingLeft: theme.spacing.unit * 2, 
    paddingRight:theme.spacing.unit * 2
  },
  imagenContainer:{    
    overflow: 'hidden',
    textAlign: 'center',
  },
  imagen: {        
    borderRadius: 4,    
    boxShadow: theme.shadows[2],    
    maxWidth: 300,
    maxHeight: 270,
    objectFit: 'cover',                
    [theme.breakpoints.up('md')]: {
      maxWidth: 400,
      maxHeight: 360,
    },  
  },
  volverHeader: {
    margin: 0, 
    padding: theme.spacing.unit * 0.5,
  },
  volverTexto: {
    color:'#442c2e',
    fontSize: 12,    
    textDecoration: 'none',
  },
  volverIcono: {
    color:'#442c2e',
    fontSize: 12,
    marginRight: theme.spacing.unit,
  },  
  interlineado: {
    margin: `0 ${theme.spacing.unit * 2}px`
  }

});

class Producto extends React.Component {  

  handleClose = () => {
    this.props.handleBackClick();
  };

  render() {
    const { classes, producto, unidades, nuevaCantidad, onIncrementarCantidad, onDecrementarCantidad, onFijarUnidades } = this.props;

    return (
      <Dialog
        open
        onClose={this.handleClose}
        scroll='paper'
        fullScreen
        aria-labelledby="aria-title"
        className={classes.dialog}        
      >          
        
        <DialogTitle disableTypography className={classes.volverHeader}>
          <Link to={'/next'} style={{textDecoration: 'none'}}>
            <Button color="secondary" className={classes.volverTexto}>
              <BackIcon fontSize="small" className={classes.volverIcono} />
                Volver
            </Button>
          </Link>
        </DialogTitle>
        
        <DialogContent>

          <Grid container spacing={16} alignItems='center' justify='center' className={classes.gridContainer} >             
            
            {/* DESCRIPCION DESKTOP */}
            <Hidden only={['xs', 'sm']}>
              <Grid container direction='column' item xs={12} md={6} className={classes.gridDesktop} >                  
                  <Descripcion 
                    nombre={producto.nombre}
                    peso={producto.peso}
                    precio={producto.precio}
                    descripcion={producto.descripcion}
                    descripcionBreve={producto.descripcionBreve}               
                  />
              </Grid>
            </Hidden>              
            
            <Grid container direction='column' item xs={12} md={6}>

              {/* GALERIA */}
              <Grid item className={classes.imagenContainer}>
                <Galeria 
                  fotos={producto.fotos}
                />
              </Grid>

              {/* DESCRIPCION MOBILE */}
              <Hidden mdUp>
                <Grid item className={classes.gridMobile} >
                  <Descripcion 
                    nombre= {producto.nombre}
                    peso={producto.peso}
                    precio= {producto.precio}
                    descripcion= {producto.descripcion}
                    descripcionBreve= {producto.descripcionBreve}               
                  />
                </Grid>
              </Hidden>                              
            </Grid>              
          </Grid>
          
        </DialogContent>
      
        <DialogActions>          
          <ContadorProducto 
            producto={producto}
            unidades={unidades}
            nuevaCantidad={nuevaCantidad}
            onIncrementarCantidad={onIncrementarCantidad}
            onDecrementarCantidad={onDecrementarCantidad}
            onFijarUnidades={onFijarUnidades}            
          />              
        </DialogActions>
      
      </Dialog>      
    );
  }
}

Producto.propTypes = {
  classes: PropTypes.object.isRequired,  
  producto: PropTypes.object.isRequired,
  unidades: PropTypes.number.isRequired,
  nuevaCantidad: PropTypes.number.isRequired,
  onIncrementarCantidad: PropTypes.func.isRequired,
  onDecrementarCantidad: PropTypes.func.isRequired,
  onFijarUnidades: PropTypes.func.isRequired, 
  handleBackClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Producto);