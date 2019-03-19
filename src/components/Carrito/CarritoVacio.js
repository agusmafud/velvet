import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
   titulo: {        
        fontSize: 14,
        marginTop: theme.spacing.unit * 6
    },
    container: {
        width: '100%',
        textAlign:'center',
        marginBottom: theme.spacing.unit * 3
    },
    button: {
        paddingTop: theme.spacing.unit * 1.5,
        paddingBottom: theme.spacing.unit * 1.5,
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3        
    }
});

const CarritoVacio = ({ classes, handleHomeClick }) => {
    return (
        <React.Fragment>
            <Typography variant="caption" align="center" className={classes.titulo} paragraph>
                Tu carrito de compras está vacío
            </Typography>
            <div className={classes.container}>
                <Button 
                    onClick={handleHomeClick}
                    variant="contained" color='primary' className={classes.button}
                >
                    Continuar comprando aquí
                </Button>
            </div>
        </React.Fragment>
    );
};

CarritoVacio.propTypes = {
    classes: PropTypes.object.isRequired,
    handleHomeClick: PropTypes.func.isRequired,
};
export default withStyles(styles)(CarritoVacio);