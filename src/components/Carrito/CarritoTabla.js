import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';

import CarritoTablaItem from './CarritoTablaItem';

const styles = theme => ({
  root: {
    width: '90%',
    maxWidth: 900,    
    margin: '0 auto',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,  
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing.unit * 3,
      paddingRight: theme.spacing.unit * 3,
    },
  },
  imagen: {
      width: 80, 
      height: 80,
      boxShadow: theme.shadows[1],
      marginRight: theme.spacing.unit * 2,
  },
  encabezado: {
    paddingTop: theme.spacing.unit * 3,          
  },
  item:{
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
  titulo: {
    fontSize: 15,
    [theme.breakpoints.up('sm')]: {
        fontSize: 17,
    },
  },
  bordeEncabezado: {
    borderBottom: '1px solid #eee',
    paddingBottom: theme.spacing.unit * 1.5,
  },
  
});

function CarritoTabla({ classes, carrito, onSumarUnidad, onRestarUnidad, onRemoverProducto }) {
  
  return (
    
      <Paper className={classes.root} square>
        
        <Hidden only={['xs', 'sm']}>  
          <Grid container alignItems='center' className={classes.encabezado}>
            <Grid item xs={8} sm={6}>
              <Typography variant="body1" align="left" style={{paddingLeft: 16}} className={classes.bordeEncabezado}>                  
                Producto
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body1" align="right" className={classes.bordeEncabezado}>                  
                Precio
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="body1" align="center" className={classes.bordeEncabezado}>                  
                Cantidad
              </Typography>
            </Grid>
            <Grid item  xs>
              <Typography variant="body1" align="left" className={classes.bordeEncabezado}>                  
                Total
              </Typography>
            </Grid>
          </Grid>
        </Hidden>

        
          {
            carrito.map((item) =>                      
              <Fade>
                <CarritoTablaItem
                  key={item.id}
                  item={item}
                  onSumarUnidad={onSumarUnidad} 
                  onRestarUnidad={onRestarUnidad}
                  onRemoverProducto={onRemoverProducto}
                />         
              </Fade>
            )
          }                        

      </Paper>
    
  );
}

CarritoTabla.propTypes = {
  classes: PropTypes.object.isRequired,
  carrito: PropTypes.array.isRequired,
  onSumarUnidad: PropTypes.func.isRequired,
  onRestarUnidad: PropTypes.func.isRequired,
  onRemoverProducto: PropTypes.func.isRequired,
};

export default withStyles(styles)(CarritoTabla);