import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';

import fondo from '../../images/fondo1.png';
import fondoTemporada from '../../images/fondo2.png';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    root: {                                           
        paddingTop: theme.spacing.unit * 10,
        paddingBottom: theme.spacing.unit * 10,                
        /* CENTRADO VERTICAL */
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',           
        backgroundImage: `url(${fondo})`,        
    },   
    textoContainer: {                      
        width: '80%',
        minWidth: 300,
        [theme.breakpoints.up('lg')]: {
            width: '65%',
        },
        textAlign: 'center',        
    },                
    lineaUno: {        
        marginBottom: theme.spacing.unit * 3,
        color: '#fff',
        textShadow: '2px 2px 2px #444',
        fontSize: 22,
        [theme.breakpoints.up('sm')]: {
            fontSize: 24,
        },
    },
    linea: {
        marginBottom: theme.spacing.unit * 3,
        textShadow: '2px 2px 2px #444',
        color: '#fff',
        fontSize: 18,
        [theme.breakpoints.up('sm')]: {
            fontSize: 20,
        },
    },
    temporada: {                                           
        marginTop: theme.spacing.unit * 0.5,
        paddingTop: theme.spacing.unit * 3,
        paddingBottom: theme.spacing.unit * 3,                      
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',           
        backgroundImage: `url(${fondoTemporada})`,        
    },       
    lineaTemporada: {
        margin: 0,        
        color: '#fff',     
        lineHeight: 1.3,   
        textShadow: '2px 2px 2px #444',
    }
});

const Claim = ({ classes }) => {
    return (                
        <React.Fragment>
            <div className={classes.root}>          
                <Fade bottom cascade duration={2000}>                    
                    <div className={classes.textoContainer}>    
                        <Typography variant="subtitle1" align="center" gutterBottom component="h2" className={classes.lineaUno}>
                            El chocolate es uno de los sabores más sublimes y difícil de resistir para el hombre.                         
                        </Typography>
                        <Typography variant="subtitle1" align="center" gutterBottom component="h2" className={classes.linea}>                       
                            <b>VELVET</b> es chocolate artesanal, con una pizca de arte y pinceladas de sabor. Ninguna pieza es igual a otra.                        
                        </Typography>
                        <Typography variant="subtitle1" align="center" component="h2" className={classes.linea} style={{marginBottom: 0}}>
                            Sentí el placer del chocolate deshaciéndose en tu boca.
                        </Typography>                                                
                    </div>                
                </Fade>                
            </div> 
            
            <div className={classes.temporada}>
                <Tada duration={2000}>
                    <div className={classes.textoContainer}>                    
                        <Typography variant="h3" align="center" gutterBottom component="h2" className={classes.lineaTemporada}>
                            <b>Huevos de Pascuas</b>
                        </Typography>                                                                
                    </div>
                </Tada>
            </div>               
        </React.Fragment>
    );
};

Claim.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Claim);