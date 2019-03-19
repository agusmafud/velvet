import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMensaje, getShowMensaje, getCarrito } from '../redux/selectors';
import { cerrarMensajeFotter } from '../redux/actions';

import { getUnidadesCarrito, getMontoCarrito } from '../helpers/carritoHelpers';

import ProductoAgregado from '../components/ProductoAgregado';

class ProductoAgregadoContainer extends Component {    

    cerrarMensajeFotter = () => {
        this.props.cerrarMensajeFotter();
    }    

    render() {        
        const { mensaje, show, carrito } = this.props;         
        return (
            <ProductoAgregado 
                unidades={getUnidadesCarrito(carrito)}
                monto={getMontoCarrito(carrito)}
                mensaje={mensaje}
                show={show}                        
                onClose={this.cerrarMensajeFotter}                
            />
        );
    }
}

ProductoAgregadoContainer.propTypes = {    
    carrito: PropTypes.array.isRequired,
    mensaje: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({ 
    carrito: getCarrito(state),
    mensaje: getMensaje(state), 
    show: getShowMensaje(state),    
});
const mapDispatchToProps = { cerrarMensajeFotter };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductoAgregadoContainer));