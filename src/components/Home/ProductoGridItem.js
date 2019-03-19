import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Fade from 'react-reveal/Fade';

const styles = theme => ({
    root: {
        position: 'relative',
        width: '100%',       
        overflow:'hidden',                 
    },  
    imagen: {
        display: 'block',
        width: '100%',
        height: 'auto',
        transition: 'transform 1s',
        '&:hover': {
            transform: 'scale(1.15)',
        },
    },
    overlay: {
        position: 'absolute',
        bottom: 0,                
        background: 'rgba(0, 0, 0, 0.5)',         
        width: '100%',                
        paddingTop: theme.spacing.unit * 1.5,  
        paddingBottom: theme.spacing.unit * 0.5,
        paddingLeft: theme.spacing.unit * 1.5,
        paddingRight: theme.spacing.unit * 1.5, 
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
    },
    badge: {
        width:'100%', 
        marginTop: 8,
        marginLeft:-8    
    },
    titulo: {
        color: '#fff',        
        fontSize: 24,
        margin:'0 auto',
    },
    precio: {
        color: '#fff',
        fontSize: 18,
        letterSpacing: 1.2
    },
    spanBadge: {
        padding: 4, fontSize: 14
    },
    bBadge: {
        marginLeft: 2
    }
});

const ProductosGridItem = ({ classes, producto, unidades }) => {
    return (        
        <Fade duration={1000}>
            <div className={classes.root}>
                <img src={producto.fotos[0].imgPath} alt={producto.nombre} className={classes.imagen}/>    
                                
                <div className={classes.overlay}>
                    
                    <Badge 
                        invisible={ unidades < 1 } 
                        badgeContent={ <span className={classes.spanBadge}>x<b className={classes.bBadge}>{unidades}</b></span> } 
                        color="primary" className={classes.badge}
                    >
                        <Typography variant="h5" align="center" component="h2" className={classes.titulo}>
                            <b>{producto.nombre}</b> <span style={{fontSize: 18}}>{` (${producto.peso} gr)`}</span>
                        </Typography>               
                    </Badge>
                    
                    <Typography variant="h6" align="center" component="p" className={classes.precio}>
                        {`$ ${producto.precio}`}
                    </Typography>
                </div>
                                
                
            </div>            
        </Fade>
    );
}

ProductosGridItem.propTypes = {
    classes: PropTypes.object.isRequired,
    producto: PropTypes.object.isRequired, 
    unidades: PropTypes.number.isRequired,   
};

export default withStyles(styles)(ProductosGridItem);