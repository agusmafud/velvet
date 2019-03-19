import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
const styles = (theme) => ({            
    cta: {
        fontSize:16, 
        margin: 0, 
        padding: 0, 
        color: theme.palette.secondary.light,
    }
});

const ProductoAgregado = ({ classes, unidades, monto, mensaje, show, onCarritoClick, onClose }) => {
    return (
        <Snackbar                            
            open={show}
            autoHideDuration={5000}
            onClose={onClose}            
            ContentProps={{
                'aria-describedby': 'aria-label',
            }}
            message={
                <div>
                    <Typography variant="body2" align="left" id="aria-label" style={{color: '#fff'}}>  
                        {mensaje}
                    </Typography>
                    <Typography variant="caption" align="left" style={{color: '#fff'}}>                  
                        {`Total: ${unidades} huevos ($${monto})`}
                    </Typography>                        
                </div>                    
            }
            action={                    
                unidades > 0 &&
                    <Link to={`next/carrito`} style={{textDecoration: 'none'}}>
                        <Button size="small" onClick={onCarritoClick} className={classes.cta}>
                            Ver carrito
                        </Button>                                        
                    </Link>
            }
        />
    );
};


ProductoAgregado.propTypes = {  
    classes: PropTypes.object.isRequired,
    unidades: PropTypes.number.isRequired,
    monto: PropTypes.number.isRequired,
    mensaje: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,    
    onCarritoClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(ProductoAgregado);