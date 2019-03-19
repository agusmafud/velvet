import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';

import logo from '../../images/logo.svg';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';
import fondo from '../../images/fondo2.png';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({        
    root: {
        backgroundImage: `url(${fondo})`,        
        height: '100%',
        minHeight: 350,
        padding: theme.spacing.unit * 4,        
    },
    logo: {    
        width: 72,                
    },
    red: {
        height: 20,
        marginRight: theme.spacing.unit * 2,        
    },
    tituloNews: {
        fontSize: 15,
        color: '#fff',
        paddingLeft: theme.spacing.unit * 4,
        lineHeight: 1.8, 
    },
    gridGracias: {
        paddingLeft: theme.spacing.unit * 4,
    },
    submit: {        
        
        color: '#fff',
    },
    fullHeight: {
        height:'100%',
    }
});

const Newsletter = ({ classes, newsletter, handleNuevoNewsletter }) => {
    return (
        <Fade duration={1000}>
            <div className={classes.root}>              
                <Grid container direction='row' justify='flex-start' className={classes.fullHeight}>
                                    
                    <Grid container item xs={12}>
                        <Grid item>
                            <img src={logo} alt={"Mustafá Chocolates"} className={classes.logo}/>
                        </Grid>                        

                        {
                            newsletter === '' ?
                                <Grid item xs>                                    
                                    <Typography variant="overline" align="left" color="textPrimary" component="p" className={classes.tituloNews}>
                                        Suscribite a nuestro newsletter y enterate de todas las novedades                                            
                                    </Typography>
                                </Grid>
                            :
                                <Grid item xs className={classes.gridGracias}>
                                    <Typography variant="subtitle1" align="left" component="p" paragraph style={{color: '#fff'}}>
                                        <b>Gracias</b> por suscribirte, {newsletter}.                                        
                                    </Typography>
                                    <Typography variant="overline" align="left" style={{fontSize:12, color: '#fff'}}>
                                        Te informaremos de nuestras novedades y nuevos productos.
                                    </Typography>
                                </Grid>
                        }
                    </Grid>
                    
                    {
                        newsletter === '' &&
                            <Grid container item xs={12}>
                                <Formik
                                    initialValues={{ formNewsletter: ''}}
                                    validate={values => {
                                        let errors = {};
                                        if (!values.formNewsletter) {
                                        errors.formNewsletter = 'Ingresá una dirección de correo electrónico para suscribirte';
                                        } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.formNewsletter)
                                        ) {
                                        errors.formNewsletter = 'Dirección de correo electrónica incorrecta';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        handleNuevoNewsletter(values.formNewsletter);
                                        setSubmitting(false);                                                
                                    }}
                                >
                                    {({                                                
                                        handleSubmit,
                                        isSubmitting,                                            
                                    }) => (
                                        <Form style={{width: '100%'}}> 
                                            <Grid container direction='row' item xs={12} alignItems='center'>
                                                <Grid item xs>
                                                    <Field 
                                                        onKeyPress={ (e) => { if (e.key === 'Enter') {handleSubmit()} }}
                                                        fullWidth type="email" component={TextField} name="formNewsletter" 
                                                        label="Tu dirección de email" 
                                                    />
                                                </Grid>
                                                <Grid item >
                                                    <Button type='submit' disabled={isSubmitting}                                                        
                                                        size='small' fullWidth className={classes.submit}
                                                    >
                                                        OK
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Form>
                                    )}
                                </Formik>                                    
                            </Grid>
                    }
                
                    <Grid container item xs={12} style={{alignSelf: 'flex-end'}}>
                        <Grid item>
                            <img src={facebook} alt={"Mustafá Chocolates"} className={classes.red}/>                           
                        </Grid>
                        <Grid item>
                            <img src={instagram} alt={"Mustafá Chocolates"} className={classes.red}/>
                        </Grid>                    
                        <Grid item xs>
                            <Typography variant="caption" align="right" color="textPrimary" component="p" style={{color: '#fff'}}>
                                Copyright © 2019, Velvet Chocolates.
                            </Typography>                  
                        </Grid>
                    </Grid>

                </Grid>
            </div>
        </Fade>
    );
};

Newsletter.propTypes = {
    classes: PropTypes.object.isRequired,
    newsletter: PropTypes.string.isRequired,
    handleNuevoNewsletter: PropTypes.func.isRequired,
};

export default withStyles(styles)(Newsletter);