import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from "react-helmet";
import { withRouter, Prompt } from 'react-router-dom';

import { connect } from 'react-redux';
import { getCarrito, getUsuario, getDirecciones } from '../redux/selectors';  
import { addPedido, nuevoUsuario, nuevaDireccion, removerDireccion } from "../redux/actions";
import Checkout from '../components/Checkout';
  

class CheckoutContainer extends React.Component {    
    
    state = { activeStep: 0, validationStep: 0, exitConfirmation: true }

    componentDidMount() {        
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }

    handleNext = () => {                    
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };
    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };
    handleNextValidationStep = () => {                    
        this.setState(state => ({
            validationStep: state.validationStep + 1,
        }));
    };
    
    handleRemoverDireccion = direccionARemover => {
        this.props.removerDireccion(direccionARemover);
    }

    handleSubmit = (newPedido) => {        
        let nuevoUsuario = {
            name: newPedido.name,
            email: newPedido.email,
            tel: newPedido.tel,
        };        
        this.props.nuevoUsuario(nuevoUsuario);
        if (!this.props.direcciones.includes(newPedido.entregaDireccion)) {
            this.props.nuevaDireccion(newPedido.entregaDireccion);
        }                   
        
        this.setState(
            { exitConfirmation: false },
            () => this.props.addPedido(newPedido).then(
                reference => this.props.history.push(`/gracias/${reference}`),            
                error => console.log('Error Firebase')
            )
        );        
    }

    handleHomeClick = () => {        
        this.setState(
            { exitConfirmation: false },
            () => this.props.history.push('/')
        );        
    }

    render() {        

        return (
            <React.Fragment>            
            
                <Helmet>            
                    <title>Checkout</title>                    
                </Helmet>

                {
                    (this.props.carrito.length > 0) &&
                        <Prompt
                            when={this.state.exitConfirmation}
                            message="¿Seguro que querés volver atrás y abandonar tu compra?"
                        />
                }                

                <Checkout 
                    activeStep={this.state.activeStep}
                    validationStep={this.state.validationStep}
                    carrito={this.props.carrito}
                    handleNext={this.handleNext}
                    handleBack={this.handleBack}
                    handleNextValidationStep={this.handleNextValidationStep}
                    handleSubmit={this.handleSubmit}          
                    usuario={this.props.usuario}   
                    direcciones={this.props.direcciones}                
                    handleRemoverDireccion={this.handleRemoverDireccion}
                    handleHomeClick={this.handleHomeClick}                              
                />            
            </React.Fragment>            
        );
    }
}

CheckoutContainer.propTypes = {    
    carrito: PropTypes.array.isRequired,    
    usuario: PropTypes.object.isRequired,    
    direcciones: PropTypes.array.isRequired,
    addPedido: PropTypes.func.isRequired,
    nuevoUsuario: PropTypes.func.isRequired,
    nuevaDireccion: PropTypes.func.isRequired,
    removerDireccion: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({ 
    carrito: getCarrito(state),     
    usuario: getUsuario(state),
    direcciones: getDirecciones(state),
});
const mapDispatchToProps = { addPedido, nuevoUsuario, nuevaDireccion, removerDireccion };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CheckoutContainer));