import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import RemoveIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';
import AddIcon from '@material-ui/icons/AddBoxRounded';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({      
    accionIzquierda: {      
        transition: 'transform 0.8s',        
        '&:hover': {
            transform: 'scale(1.2)',
        },
        fontSize: 22,
        [theme.breakpoints.up('sm')]: {            
            fontSize: 28,
        },        
    },
    accionDerecha: {      
        transition: 'transform 0.8s',        
        '&:hover': {
            transform: 'scale(1.2)',
        },
        fontSize: 22,
        [theme.breakpoints.up('sm')]: {            
            fontSize: 28,
        },        
    },
    color: {
        color: '#442c2e',        
    },
    unidades: {        
        fontSize: 18,
        marginRight: -7,
        marginLeft: -7,
        [theme.breakpoints.up('sm')]: {
            fontSize: 19,
            marginRight: 0,
            marginLeft: 0,            
        },
    }

});
  

const ContadorProductos = ({classes, producto, unidades, onSumarUnidad, onRestarUnidad}) => {
    return (
        <Grid container direction="row" justify="center" alignItems="center" item xs style={{whiteSpace: 'nowrap'}}>
            <Grid item >
                <Tooltip title={`Restar ${producto.nombre}`}>
                    <IconButton 
                        onClick={() => onRestarUnidad(producto.id)}
                        color='primary' aria-label={`Restar ${producto.nombre}`}
                    >
                        <RemoveIcon className={classes.accionIzquierda}/>
                    </IconButton>
                </Tooltip>
            </Grid>
            <Grid item >
                <Typography align="center" className={classes.unidades} variant="h6" component='p'>
                    <b>{unidades}</b>
                </Typography>
            </Grid>
            <Grid item >
                <Tooltip title={`Sumar ${producto.nombre}`}>
                    <IconButton 
                        onClick={() => onSumarUnidad(producto.id)}
                        color='primary' aria-label={`Sumar ${producto.nombre}`}
                    >
                       <AddIcon className={classes.accionDerecha}/>
                    </IconButton>
                </Tooltip>
            </Grid>                
        </Grid>   
    );
};

ContadorProductos.propTypes = {
    classes: PropTypes.object.isRequired,
    producto: PropTypes.object.isRequired,
    unidades: PropTypes.number.isRequired,
    onSumarUnidad: PropTypes.func.isRequired,
    onRestarUnidad: PropTypes.func.isRequired,
};
  
export default withStyles(styles)(ContadorProductos);