import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

import { withStyles } from '@material-ui/core/styles';
const styles = (theme) => ({  
    root: {
        textAlign: 'center',
        paddingLeft: theme.spacing.unit * 6,
        paddingRight: theme.spacing.unit * 6,
    },
    subtotal: {
        marginTop: 30,
        marginBottom: 10,
    },
    cta: {
        paddingLeft: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 4,
        paddingTop: theme.spacing.unit * 1.5,
        paddingBottom: theme.spacing.unit * 1.5,
        marginTop: 10,
        marginBottom: 50,
        fontSize: 18,
    }
});

const CarritoResumen = ({ classes, subtotal, onCheckoutClick }) => {
    return (        
        <div className={classes.root}>
            <Typography variant="h5" align="center" className={classes.subtotal}>                  
                Total: <b>{`$${subtotal}`}</b>
            </Typography>
            <Typography variant="caption" align="center" >                  
                Podrás ingresar los datos de envío o elegir la opción de retiro en el siguiente paso
            </Typography>

            <Link to='checkout' style={{textDecoration: 'none'}}>
                <Button size='large' onClick={onCheckoutClick} color="primary" variant='contained' className={classes.cta}>
                    Siguiente paso                                               
                </Button>
            </Link>
        </div>
    );
};

CarritoResumen.propTypes = {
    classes: PropTypes.object.isRequired,
    subtotal: PropTypes.number.isRequired,
    onCheckoutClick: PropTypes.func.isRequired,
};
export default withStyles(styles)(CarritoResumen);