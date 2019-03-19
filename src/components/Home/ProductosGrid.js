import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";

import { getCantidadCarrito } from '../../helpers/carritoHelpers';
import ProductoGridItem from './ProductoGridItem';
import Newsletter from './Newsletter';

const styles = () => ({
    root: {
        padding: 2,
        width: '100%',
    },  
    padding: {
        padding: 2,
    },    
});

const ProductosGrid = ({ classes, productos, carrito, newsletter, handleNuevoNewsletter }) => {
  return (            
    <Grid container justify="center" className={classes.root}>        
        {                
            productos.map((producto) =>            
                <Grid key={producto.id} item xs={12} sm={6} md={4} className={classes.padding}>
                    <Link to={`next/producto/${producto.url}`}>
                        <ProductoGridItem 
                            producto={producto}        
                            unidades={getCantidadCarrito(carrito, producto.id)} 
                        />
                    </Link>
                </Grid>                
            )            
        }     

        <Grid item xs={12} sm={6} md={4} className={classes.padding}>
            <Newsletter 
                newsletter={newsletter}
                handleNuevoNewsletter={handleNuevoNewsletter} 
            />            
        </Grid>    
                                
    </Grid>    
  );
}

ProductosGrid.propTypes = {
    classes: PropTypes.object.isRequired,
    productos: PropTypes.array.isRequired,
    carrito: PropTypes.array.isRequired,
    newsletter: PropTypes.string.isRequired,
    handleNuevoNewsletter: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProductosGrid);