import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Helmet } from "react-helmet";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCarrito, getProductos } from '../redux/selectors';
import { fijarUnidades } from '../redux/actions';
import { getCantidadCarritoUrl } from '../helpers/carritoHelpers';

import Producto from '../components/Producto';

class ProductoContainer extends Component {    
    
    constructor(props) {
        super(props);                
        this.state = { nuevaCantidad: getCantidadCarritoUrl(props.carrito, props.match.params.url) };                  
    }

    incrementarCantidad = () => {        
        this.setState(prevState => ({nuevaCantidad: prevState.nuevaCantidad+1}));        
    }
    decrementarCantidad = () => {
        this.setState(prevState => ({nuevaCantidad: prevState.nuevaCantidad > 1 ? prevState.nuevaCantidad-1 : 0}))        
    }
    fijarUnidades = (producto, nuevaCantidad, previaCantidad) => {
        this.props.fijarUnidades(producto, nuevaCantidad, previaCantidad);
        this.props.history.push('/next');
    }

   
    handleCarritoClick = () => {
        this.props.history.push('/next/carrito');
    }
    handleHomeClick = () => {
        this.props.history.push('/next');
    }

    render() {        
        const url = this.props.match.params.url;
        const { productos, carrito } = this.props;                
        const producto = productos.find(p => p.url === url)  
        console.log(url);
        console.log(producto);
        
        return (
            <React.Fragment>            
                
                <Helmet>          
                    <title>{producto.nombre}</title>                    
                </Helmet>
                
                <Producto 
                    producto={producto}
                    unidades={getCantidadCarritoUrl(carrito, url)}
                    nuevaCantidad={this.state.nuevaCantidad}
                    onIncrementarCantidad={this.incrementarCantidad}
                    onDecrementarCantidad={this.decrementarCantidad}
                    onFijarUnidades={this.fijarUnidades}                 
                    handleBackClick={this.handleHomeClick}
                />       

            </React.Fragment>             
        );
    }
}

ProductoContainer.propTypes = {    
    productos: PropTypes.array.isRequired,
    carrito: PropTypes.array.isRequired,    
};

const mapStateToProps = state => ({ 
    productos: getProductos(state), 
    carrito: getCarrito(state),    
});
const mapDispatchToProps = { fijarUnidades };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductoContainer));