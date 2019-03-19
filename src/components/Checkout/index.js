import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import { Formik, Field, Form } from 'formik';
import { TextField, RadioGroup } from 'formik-material-ui';

import FormReview from './FormReview';
import CarritoVacio from '../Carrito/CarritoVacio';
import Menu from '../Home/Menu';
import { getMontoCarrito, getUnidadesCarrito } from '../../helpers/carritoHelpers';

import withStyles from '@material-ui/core/styles/withStyles';

import Fade from 'react-reveal/Fade';

const styles = theme => ({    
    grid: {
        marginRight: theme.spacing.unit * 2, 
        marginLeft: theme.spacing.unit * 2
    },
    paper: {        
        margin: '0 auto', 
        marginTop: theme.spacing.unit * 4,
        marginBottom: theme.spacing.unit * 6,
        padding: `${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 4}px`,        
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            width: 600,                    
            padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 8}px`,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        margin: '0 auto',
        marginTop: theme.spacing.unit * 2,        
        marginBottom: theme.spacing.unit * 2,
        justifyContent: 'center',      
    },
    button: {                
        paddingLeft: theme.spacing.unit * 4,
        paddingRight: theme.spacing.unit * 4,
        paddingTop: theme.spacing.unit * 1.5,
        paddingBottom: theme.spacing.unit * 1.5,
        fontSize: 18
    },

    radioGroup: {
        flexDirection:'row', alignItems: 'center', justifyContent: 'center',
    },
    botonOpcion: {
        textTransform:'none', 
        marginBottom: theme.spacing.unit * 1.5, 
        padding:`${theme.spacing.unit * 1.5}px ${theme.spacing.unit * 2}px`
    },
    gridHoras: {
        marginTop: theme.spacing.unit * 2, 
        marginBottom: theme.spacing.unit * 4
    }
  });
  
const steps = ['Tus datos', 'Entrega', 'Revisá tu pedido'];

const calcularMes = () => {
    let mes = new Date().getMonth();    
    switch (mes) {
        case 0: return 'Enero'
        case 1: return 'Febrero'
        case 2: return 'Marzo'
        case 3: return 'Abril'
        case 4: return 'Mayo'
        case 5: return 'Junio'
        case 6: return 'Julio'
        case 7: return 'Agosto'
        case 8: return 'Septiembre'
        case 9: return 'Octubre'
        case 10: return 'Noviembre'
        case 11: return 'Diciembre'
        default: return ''
    }
}

const calcularDiaSemana = dia => {
    let tomorrow = new Date();
        
    tomorrow.setDate(tomorrow.getDate() + dia + 1);
    let diaSemana = tomorrow.getDay();
    let diaNumero = tomorrow.getDate();

    switch (diaSemana) {
        case 0: return `Domingo ${diaNumero}`
        case 1: return `Lunes ${diaNumero}`
        case 2: return `Martes ${diaNumero}`
        case 3: return `Miércoles ${diaNumero}`
        case 4: return `Jueves ${diaNumero}`
        case 5: return `Viernes ${diaNumero}`
        case 6: return `Sábado ${diaNumero}`
    
        default: return `${diaNumero} - ${calcularMes()}`
    }    
}

const renderEntrega = (delay) => {    
    let timestamp = new Date();
    timestamp.setDate(timestamp.getDate() + parseInt(delay));  
    return timestamp.toLocaleDateString("es-ES",{weekday: "long", month: "long", day: "numeric"});
}

const isRequired = value => {
    let error;
    if (!value) {
        error = 'Campo requerido';
    } 
    return error;
};

const validateEmail = value => {
    let error;
    if (!value) {
        error = 'Campo requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Dirección de email inválida';
    }
    return error;
};

const validateTel = value => {
    let error;
    if (!value) {
        error = 'Campo requerido';
    } else if (!/^\d*$/.test(value)) {
        error = 'Número de teléfono incorrecto';
    } else if (value < 10000 || value > 999999999999) {
        error = 'Número de teléfono incorrecto';
    }
    return error;
};

const validarPaso1 = (values, isValid, validationStep, errors, handleNext, handleNextValidationStep, setFieldTouched) => {            
    if (validationStep === 0) handleNextValidationStep();    
    
    setFieldTouched('name', true);
    setFieldTouched('email', true);
    setFieldTouched('tel', true);

    if (isValid || (values.name !== '' && values.email !== '' && values.tel !== '' && !errors.name && !errors.email && !errors.tel) ) {
        handleNext();
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }
}

const validarPaso2 = (values, isValid, validationStep, errors, handleNext, handleNextValidationStep, setFieldTouched) => {            
    if (validationStep === 1) handleNextValidationStep();
    
    setFieldTouched('entregaDia', true);
    setFieldTouched('entregaHora', true);
    setFieldTouched('entregaDireccion', true);
    setFieldTouched('entregaReceptor', true);

    if (!values.entregaDia) {
        scrollToDiasSelect();
    } else if (!values.entregaHora) {
        scrollToHorasSelect();
    } else if (isValid || 
    (values.entregaHora !== '' && values.entregaDia !== '' && values.entregaDireccion !== '' && values.entregaReceptor !== '' &&
    !errors.entregaHora && !errors.entregaDia && !errors.entregaDireccion && !errors.entregaReceptor) ) {
        handleNext();
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }
}

const scrollToDiasSelect = () => {    
    let element = document.getElementById("diasSelect");   
    element.scrollIntoView({block: "start", behavior: "smooth"});
}

const scrollToHorasSelect = () => {    
    let element = document.getElementById("horasSelect");   
    element.scrollIntoView({block: "start", behavior: "smooth"});
}


const Checkout = ({ classes, activeStep, validationStep, carrito, 
    handleNext, handleBack, handleNextValidationStep, handleSubmit,
    usuario, direcciones, handleRemoverDireccion, handleHomeClick
}) => {
    return (
        <React.Fragment>            

            <Menu                            
                unidades={getUnidadesCarrito(carrito)}
            />                         
              
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} className={classes.grid}>
                    <Fade>
                        <Paper className={classes.paper}>
                            
                            <Typography component="h2" variant="h4" align="center">
                                Finalizar compra
                            </Typography>
                            
                            { 
                                (carrito.length === 0) &&
                                <CarritoVacio 
                                    handleHomeClick={handleHomeClick}
                                />
                            }
                            
                            { 
                                (carrito.length > 0) &&
                                <React.Fragment>
                                                                    
                                    <Stepper activeStep={activeStep} className={classes.stepper} > 
                                        {
                                            steps.map(label => (
                                                <Step key={label}>
                                                    <StepLabel>{label}</StepLabel>
                                                </Step>
                                            ))
                                        }
                                    </Stepper>

                                    <Formik
                                        initialValues=
                                            {{ name: usuario.name, email: usuario.email, tel: usuario.tel, entregaDia: '', entregaHora: '', entregaDireccion: '', entregaReceptor: '' }}
                                                                            
                                        onSubmit={(values, { setSubmitting }) => {                                                                                                                                                                                
                                            let newCarrito = carrito.reduce( (acc, item) => {
                                                return [ ...acc, {id: item.id, nombre: item.nombre, cantidad: item.cantidad, precio: item.precio }]
                                            }, []);
                                            let newPedido = {
                                                ...values,
                                                status: 0,
                                                mensaje: '',
                                                montoTotal: getMontoCarrito(carrito),
                                                unidadesCarrito: getUnidadesCarrito(carrito),
                                                carrito: newCarrito                                            
                                            };                                                                                
                                            handleSubmit(newPedido);
                                            setSubmitting(false);                                                        
                                        }}
                                        render={({ values, isValid, errors, status, isSubmitting, setFieldTouched, setFieldValue }) => (
                                            <Form>                            
                                                {
                                                    activeStep === 0 && (
                                                        <Grid container spacing={24}>
                                                            <Grid item xs={12}>                                                                      
                                                                <Field                                                                 
                                                                    onKeyPress={ 
                                                                        (e) => {
                                                                            if (e.key === 'Enter') {                                                                            
                                                                                validarPaso1(values, isValid, validationStep, errors, handleNext, handleNextValidationStep, setFieldTouched)
                                                                            }
                                                                        }
                                                                    }
                                                                    variant='outlined' fullWidth type="text" component={TextField} name="name" 
                                                                    validate={isRequired} label="Tu nombre"
                                                                />                                                                                                                                                    
                                                            </Grid>

                                                            <Grid item xs={12}>                                                                
                                                                <Field 
                                                                    onKeyPress={ 
                                                                        (e) => {
                                                                            if (e.key === 'Enter') {                                                                            
                                                                                validarPaso1(values, isValid, validationStep, errors, handleNext, handleNextValidationStep, setFieldTouched)
                                                                            }
                                                                        }
                                                                    }                                                                
                                                                    variant='outlined' fullWidth type="tel" minLength='5' maxLength='12' component={TextField} 
                                                                    name="tel" validate={validateTel} 
                                                                    label="Número de celular" placeholder="Número de celular"
                                                                    InputProps={{
                                                                        startAdornment: <InputAdornment position="start">(15) </InputAdornment>,
                                                                    }}
                                                                />                                                                
                                                            </Grid>

                                                            <Grid item xs={12}>                                                                
                                                                <Field                                                                 
                                                                    onKeyPress={ 
                                                                        (e) => {
                                                                            if (e.key === 'Enter') {                                                                            
                                                                                validarPaso1(values, isValid, validationStep, errors, handleNext, handleNextValidationStep, setFieldTouched)
                                                                            }
                                                                        }
                                                                    }
                                                                    variant='outlined' fullWidth type="email" component={TextField} name="email" 
                                                                    validate={validateEmail} label="Correo electrónico"                                                                
                                                                />                                                                                                            
                                                            </Grid>
                                                                                                                    
                                                            <div className={classes.buttons}>
                                                                <Button
                                                                    variant="contained"
                                                                    size='large'
                                                                    color="primary"
                                                                    onClick={() => validarPaso1(values, isValid, validationStep, errors, handleNext, handleNextValidationStep, setFieldTouched)}                                            
                                                                    className={classes.button}
                                                                >
                                                                    Continuar
                                                                </Button>
                                                            </div>
                                                        </Grid>
                                                    )
                                                }
                                                {
                                                    activeStep === 1 && (
                                                        <Grid container spacing={24}>                                                                                                        
                                                            <Grid item xs={12} style={{border: '1px solid #e3e3e3', borderRadius: 4}}>

                                                                <Typography variant="subtitle1" align='justify' paragraph>
                                                                    Los pedidos se retiran en el barrio de <b>Colegiales</b> (Cramer y Santos Dumont).
                                                                </Typography>
                                                                <Typography variant="subtitle1" align='justify' gutterBottom>
                                                                    También se realizan envíos sólo a los barrios de <b>Colegiales</b> - <b>Belgrano</b> -  <b>Nuñez</b> -  <b>Cañitas</b> - <b>Coghlan</b> y <b>Villa Urquiza</b>.
                                                                </Typography>                                                            
                                                                                                                                                                                         
                                                            </Grid>
                                                        
                                                            <Grid id='horasSelect' item xs={12} className={classes.gridHoras} >
                                                                {
                                                                    (validationStep === 2) && errors.entregaHora ?
                                                                        <Typography variant="subtitle2" align='center' gutterBottom style={{fontSize: 20, color: 'red'}}>
                                                                            Elegí una forma de entrega
                                                                        </Typography>
                                                                    :
                                                                        <Typography variant="subtitle2" align='center' gutterBottom style={{fontSize: 20}}>
                                                                            Elegí una forma de entrega
                                                                        </Typography>
                                                                }

                                                                <Field name="entregaHora" validate={isRequired} component={RadioGroup} className={classes.radioGroup} >                                                                
                                                                    <FormControlLabel
                                                                        value="1"
                                                                        control=
                                                                        {
                                                                            <Radio 
                                                                                icon={ 
                                                                                    <Button 
                                                                                        className={classes.botonOpcion}
                                                                                        style={{                                                                                        
                                                                                            color: (validationStep === 2) && errors.entregaHora ? 'red' :'',
                                                                                            borderColor: (validationStep === 2) && errors.entregaHora ? 'red' :''
                                                                                        }}
                                                                                    variant="outlined">8:00 a 12:00 hs</Button>                                                                                
                                                                                }
                                                                                checkedIcon={                                                                                    
                                                                                    <Button className={classes.botonOpcion} variant="contained" color='primary'>8:00 a 12:00 hs</Button>                                                                                
                                                                                }
                                                                                
                                                                            />
                                                                        }                                                                    
                                                                    />
                                                                    <FormControlLabel
                                                                        value="2"
                                                                        control=
                                                                        {
                                                                            <Radio 
                                                                                icon={ 
                                                                                    <Button
                                                                                        className={classes.botonOpcion}
                                                                                        style={{                                                                                        
                                                                                            color: (validationStep === 2) && errors.entregaHora ? 'red' :'',
                                                                                            borderColor: (validationStep === 2) && errors.entregaHora ? 'red' :''
                                                                                        }}
                                                                                    variant="outlined">12:00 a 16:00 hs</Button>                                                                                
                                                                                }
                                                                                checkedIcon={                                                                                    
                                                                                    <Button className={classes.botonOpcion} variant="contained" color='primary'>12:00 a 16:00 hs</Button>                                                                                
                                                                                }
                                                                                
                                                                            />
                                                                        }                                                                    
                                                                    />
                                                                    <FormControlLabel
                                                                        value="3"
                                                                        control=
                                                                        {
                                                                            <Radio 
                                                                                icon={ 
                                                                                    <Button 
                                                                                        className={classes.botonOpcion}
                                                                                        style={{                                                                                        
                                                                                            color: (validationStep === 2) && errors.entregaHora ? 'red' :'',
                                                                                            borderColor: (validationStep === 2) && errors.entregaHora ? 'red' :''
                                                                                        }}
                                                                                    variant="outlined">16:00 a 20:00 hs</Button>                                                                                
                                                                                }
                                                                                checkedIcon={                                                                                    
                                                                                    <Button className={classes.botonOpcion} variant="contained" color='primary'>16:00 a 20:00 hs</Button>                                                                                
                                                                                }
                                                                                
                                                                            />
                                                                        }                                                                    
                                                                    />
                                                                </Field>
                                                            </Grid>

                                                            { direcciones.length > 0 &&                                                        
                                                                <Grid item container xs={12}>
                                                                    <Grid item xs={12} sm={4}>
                                                                        <Typography variant="caption" align='center'>
                                                                            Direcciones utilizadas anteriormente:
                                                                        </Typography>
                                                                    </Grid>
                                                                    <Grid item container xs={12} sm={8}>
                                                                        {
                                                                            direcciones.map((direccion, index) => (
                                                                                <Grid item key={index}>                                                                            
                                                                                    <Chip                                                                                                                        
                                                                                        label={direccion}
                                                                                        onClick={() => setFieldValue('entregaDireccion', direccion)}
                                                                                        onDelete={() => handleRemoverDireccion(direccion)} 
                                                                                        style={{margin: '0 4px'}}  
                                                                                        color={direccion === values.entregaDireccion ? 'primary' : 'default'} 
                                                                                    />
                                                                                </Grid>
                                                                            ))
                                                                        }
                                                                    </Grid>

                                                                </Grid>                                                        
                                                            }
                                                            
                                                            
                                                            
                                                            <Grid item xs={12}>
                                                                <Field 
                                                                    onKeyPress={ 
                                                                        (e) => {
                                                                            if (e.key === 'Enter') {                                                                            
                                                                                validarPaso2(values, isValid, validationStep, errors, handleNext, handleNextValidationStep, setFieldTouched)
                                                                            }
                                                                        }
                                                                    }
                                                                    fullWidth type="text" component={TextField} name="entregaDireccion" 
                                                                    validate={isRequired} label="Dirección de entrega"
                                                                />
                                                            </Grid>
                                                            
                                                            <Grid item xs={12}>
                                                                <Field 
                                                                    onKeyPress={ 
                                                                        (e) => {
                                                                            if (e.key === 'Enter') {                                                                            
                                                                                validarPaso2(values, isValid, validationStep, errors, handleNext, handleNextValidationStep, setFieldTouched)
                                                                            }
                                                                        }
                                                                    }
                                                                    fullWidth type="text" component={TextField} name="entregaReceptor" 
                                                                    helperText="Indicanos si otra persona va a recibir el pedido" label="Nombre de la persona que lo recibe"
                                                                />
                                                            </Grid>

                                                            <div className={classes.buttons}>                                                                                        
                                                                <Button size='small' onClick={() => handleBack()} className={classes.button} style={{fontSize: 12}}>
                                                                    Atrás
                                                                </Button>                                                
                                                                <Button
                                                                    size='large'
                                                                    variant="contained"
                                                                    color="primary"
                                                                    onClick={() => validarPaso2(values, isValid, validationStep, errors, handleNext, handleNextValidationStep, setFieldTouched)}                                            
                                                                    className={classes.button}
                                                                >
                                                                    Continuar
                                                                </Button>
                                                            </div>                                        
                                                        </Grid>                                          
                                                    )
                                                }
                                                {
                                                    activeStep === 2 && (
                                                        <React.Fragment>
                                                            <FormReview 
                                                                values={values} 
                                                                carrito={carrito} 
                                                                montoCarrito={getMontoCarrito(carrito)}
                                                                unidadesCarrito={getUnidadesCarrito(carrito)} 
                                                                fechaEntrega={renderEntrega(values.entregaDia)}
                                                            />      
                                                            {status && status.msg && <div>{status.msg}</div>}

                                                            {isSubmitting && <LinearProgress />}

                                                            <div className={classes.buttons}>                                                                                        
                                                                <Button size='small' onClick={() => handleBack()} className={classes.button} style={{fontSize: 12}}>
                                                                    Atrás
                                                                </Button>                                                
                                                                <Button                                                
                                                                    size='large'
                                                                    type="submit"
                                                                    disabled={isSubmitting}
                                                                    variant="contained"
                                                                    color="primary"                                                
                                                                    className={classes.button}
                                                                >
                                                                    Confirmar pedido
                                                                </Button>
                                                            </div>   
                                                                                                                            
                                                        </React.Fragment>
                                                    )
                                                }                            
                                                                        
                                            </Form>
                                        )}
                                    />
                                </React.Fragment>
                            }            
                        </Paper>
                    </Fade>
                </Grid>
            </Grid>
            
        </React.Fragment>
    );
};

Checkout.propTypes = {
    activeStep: PropTypes.number.isRequired,
    validationStep: PropTypes.number.isRequired,
    carrito: PropTypes.array.isRequired,
    handleNext: PropTypes.func.isRequired,
    handleBack: PropTypes.func.isRequired,
    handleNextValidationStep: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,    
    usuario: PropTypes.object.isRequired,
    direcciones: PropTypes.array.isRequired,    
    handleRemoverDireccion: PropTypes.func.isRequired,
    handleHomeClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(Checkout);