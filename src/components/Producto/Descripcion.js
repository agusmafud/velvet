import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Fade from 'react-reveal/Fade';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({      
    velvet: {
        marginBottom: theme.spacing.unit * 0.5,
        [theme.breakpoints.up('sm')]: {
            marginBottom: theme.spacing.unit * 2,
        }, 
    },
    nombre: {
        fontSize: 26,
        [theme.breakpoints.up('sm')]: {
            fontSize: 34,
        },
    },
    precio: {
        fontSize: 18, 
        color: '#fff', 
        margin: '0 auto', 
        marginBottom: theme.spacing.unit * 3, 
        padding: '21px 4px',
        [theme.breakpoints.up('sm')]: {
            fontSize: 22,
            marginBottom: theme.spacing.unit * 4,
        },
    },    
    textoConservar: {        
        marginTop: theme.spacing.unit * 3,        
        paddingLeft: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        fontStyle: 'italic',
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing.unit * 2,
            padding: 0,
        },
    }    
});

const Descripcion = ({ classes, nombre, peso, precio, descripcion, descripcionBreve}) => {
    return (
        <React.Fragment>
            <Fade>                
                <Typography variant="overline" align="center" color='primary' component="h1" id="aria-title" className={classes.velvet}>
                    VELVET chocolates
                </Typography>                  
                <Typography variant="h4" align="center" component="h2" gutterBottom className={classes.nombre}>
                    {nombre} <span style={{fontSize: 18}}>{` (${peso}gr)`}</span>
                </Typography>    
                </Fade>           
        
                <Chip label={`$ ${precio}`} color='primary' className={classes.precio} />                        
                <Fade>
                <Typography variant="body1" align="justify" paragraph style={{fontWeight: 600}}>
                    {descripcionBreve}                    
                </Typography>                  
                <Typography variant="body1" align="justify" paragraph> 
                    {descripcion}
                </Typography>
                <Typography variant="body2" align="justify" className={classes.textoConservar} >
                    Todos los productos son realizados a pedido y carecen de conservante, por lo tanto mantenelos en un lugar fresco, seco, y alejado de los olores fuertes (una cava de vinos es ideal).
                </Typography>                            
            </Fade>
        </React.Fragment>
    );
};

Descripcion.propTypes = {
    classes: PropTypes.object.isRequired,
    nombre: PropTypes.string.isRequired,
    peso: PropTypes.number.isRequired,
    precio: PropTypes.number.isRequired,
    descripcion: PropTypes.string.isRequired,
    descripcionBreve: PropTypes.string.isRequired,
};

export default withStyles(styles)(Descripcion);