import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import HeadShake from 'react-reveal/HeadShake';

import RemoveIcon from '@material-ui/icons/IndeterminateCheckBoxRounded';
import AddIcon from '@material-ui/icons/AddBoxRounded';
import BackIcon from '@material-ui/icons/ArrowBackRounded';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({      
    accion: {      
        transition: 'transform 0.8s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
        fontSize: 34,
        [theme.breakpoints.up('sm')]: {
            fontSize: 36,
        },        
    },
    hint: {
        textTransform:'uppercase', 
        width: 'auto', 
        paddingLeft: 8
    },
    botonCta: {
        fontSize: 16,
        letterSpacing: 1.15,
        paddingTop: 6,
        paddingBottom: 6,
        width: 150,
        borderRadius: 0,
        transition: 'transform 0.8s',
        '&:hover': {
            transform: 'scale(1.05)',
        },    
        [theme.breakpoints.up('sm')]: {
            paddingTop: 12,
            paddingBottom: 12,
        },        
    }
});
  
class ContadorProducto extends React.Component {      
        
    render() {
      const { classes, producto, unidades, nuevaCantidad, onIncrementarCantidad, onDecrementarCantidad, onFijarUnidades } = this.props;
  
      return (
        <Grid container direction="row" justify="center" alignItems="center" style={{borderTop: '1px solid #8a6284', marginTop: -4, paddingTop: 4, paddingRight:16}}>

            
            <Grid container direction="row" justify="flex-end" alignItems="center" item xs={6} style={{paddingRight: 4}}>
                <Grid item >
                    
                    <Tooltip title={`Restar ${producto.nombre}`}>
                        <Flip left>
                            <IconButton 
                                onClick={onDecrementarCantidad}
                                color='primary' aria-label={`Restar ${producto.nombre}`}
                            >
                                <RemoveIcon className={classes.accion}/>
                            </IconButton>
                        </Flip>
                    </Tooltip>
                </Grid>
                <Grid item >                
                    <Flip left>
                        <Typography align="center" variant="h6">
                            <b>{nuevaCantidad}</b>
                        </Typography>
                    </Flip>
                </Grid>
                <Grid item >
                
                    <Tooltip title={`Sumar ${producto.nombre}`}>
                        <Flip left>
                            <IconButton 
                                onClick={onIncrementarCantidad}
                                color='primary' aria-label={`Sumar ${producto.nombre}`}
                            >
                                <AddIcon className={classes.accion}/>
                            </IconButton>
                        </Flip>
                    </Tooltip>
                </Grid>                
            </Grid>    
            
            
            <Grid container item xs={6}>
                {
                    (unidades !== nuevaCantidad) ?
                        <Fade>
                            <Button onClick={() => onFijarUnidades(producto,nuevaCantidad, unidades)} color="primary" variant='contained' className={classes.botonCta}>
                                {
                                    unidades === 0 ?
                                    'Agregar'
                                    :
                                    'Actualizar'
                                }                                                
                            </Button>                        
                        </Fade>
                    :
                         (unidades === 0) && 
                            <HeadShake delay={500}>
                                <Grid container direction="row" justify="center" alignItems="center" item style={{paddingTop: 6}} >
                                    <Grid item>
                                        <BackIcon fontSize="small" color='primary'/>
                                    </Grid>
                                    <Grid item xs>
                                        <Typography align="left" color='primary' variant="caption" className={classes.hint} >
                                            <b>Sumá tu huevo aquí</b>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </HeadShake>                        
                }
            </Grid>
            
            

        </Grid>
      );
    }
}

ContadorProducto.propTypes = {
    classes: PropTypes.object.isRequired,
    producto: PropTypes.object.isRequired,
    unidades: PropTypes.number.isRequired,
    nuevaCantidad: PropTypes.number.isRequired,
    onIncrementarCantidad: PropTypes.func.isRequired,
    onDecrementarCantidad: PropTypes.func.isRequired,
    onFijarUnidades: PropTypes.func.isRequired,
};
  
export default withStyles(styles)(ContadorProducto);