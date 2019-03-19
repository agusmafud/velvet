import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
   header: {
        paddingTop: theme.spacing.unit * 4, 
        paddingBottom: theme.spacing.unit , 
        paddingLeft: theme.spacing.unit * 2, 
        paddingRight: theme.spacing.unit * 2, 
        [theme.breakpoints.up(600)]: {
            paddingTop: 40,
            paddingBottom: theme.spacing.unit * 2, 
        },
    },    
});

const CarritoVacio = ({classes}) => {
    return (        
        <Typography component='h2' variant="h4" align="center" className={classes.header}>                  
            Carrito de compras
        </Typography>

    );
};

CarritoVacio.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CarritoVacio);