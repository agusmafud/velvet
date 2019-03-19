import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Fade from 'react-reveal/Fade';

import fondo from '../../images/fondo1.png';
import soon from '../../images/soon.jpeg';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    root: {                                            
        paddingTop: theme.spacing.unit * 5,       
        paddingBottom: theme.spacing.unit * 5,      
        textAlign: 'center',  
        backgroundImage: `url(${fondo})`,  
        height: '100vh',      
    },    
    soonImagen: {
        boxShadow: theme.shadows[1],
        borderRadius: 4,
        width: '90%',
        maxWidth: 400,
        marginBottom: theme.spacing.unit * 2, 
    }
    
});

const Hero = ({ classes }) => {
    return (
        <div className={classes.root}>

            <Fade cascade duration={3500}>
                <div>                                    
                    <img src={soon} className={classes.soonImagen} alt='Proximamente, Velvet chocolates' />
                    <Typography  variant="h4" align="center" component="h1" paragraph style={{color: '#fff'}}>
                        Próximamente...
                    </Typography>
                </div>                
            </Fade>

        </div>
    );
};

Hero.propTypes = {
    classes: PropTypes.object.isRequired,    
};

export default withStyles(styles)(Hero);