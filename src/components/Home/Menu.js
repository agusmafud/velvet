import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import logo from '../../images/logo.svg';
import carrito from '../../images/carrito.svg';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    toolbar: {
        justifyContent:'space-between',
    },
    columna: {
        width: 60,
    },
    logo: {
        height: 41, width: 41,
    },
    carrito: {
        height: 36,
    },
    badge: {
        top: 8,        
        padding: '10px 6px',                 
        border: `2px solid ${theme.palette.primary.dark}`,
        fontSize: 16,
        background: '#fff',
        color: theme.palette.primary.dark,
    }
});

const Menu = ({ classes, unidades }) => {
    return (        
        <AppBar position='sticky' style={{zIndex:500}}>
            <Toolbar className={classes.toolbar}>                
                <div className={classes.columna}>
                    
                </div>
                
                <IconButton                     
                    color='inherit' aria-label="Menú de opciones"
                >
                    <img className={classes.logo} src={logo} alt='Velvet chocolates' />
                </IconButton>                
                
                <div className={classes.columna}>
                    <IconButton                     
                        color='inherit' aria-label="Carrito de compras"
                    >
                        <Badge 
                            invisible={ unidades < 1 } 
                            badgeContent={<b>{unidades}</b>} classes={{ badge: classes.badge}}
                        >
                            <img className={classes.carrito} src={carrito} alt='Carrito de compras' />
                        </Badge>                        
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>                    
    );
};

Menu.propTypes = {
    classes: PropTypes.object.isRequired,    
    unidades: PropTypes.number.isRequired,
};

export default withStyles(styles)(Menu);