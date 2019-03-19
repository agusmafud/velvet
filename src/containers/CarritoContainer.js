import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCarrito } from '../redux/selectors';
import { sumarUnidad, restarUnidad, removerProducto, cerrarMensajeFotter } from '../redux/actions';

import Carrito from '../components/Carrito';

class CarritoContainer extends Component {    

    handleSumarUnidad = id => {    
        this.props.sumarUnidad(id);
    };
    handleRestarUnidad = id => {    
        this.props.restarUnidad(id);
    };
    handleRemoverProducto = id => {    
        this.props.removerProducto(id);
    };    

    componentDidMount() {
        this.props.cerrarMensajeFotter();        
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }    

    render() {
        return (
            <React.Fragment>        

                <Helmet>          
                    <title>Carrito de compras</title>                    
                </Helmet>

                <Carrito 
                    carrito={this.props.carrito}
                    handleSumarUnidad={this.handleSumarUnidad}
                    handleRestarUnidad={this.handleRestarUnidad}
                    handleRemoverProducto={this.handleRemoverProducto}                    
                />

            </React.Fragment>            
        );
    }
}

CarritoContainer.propTypes = {
    carrito: PropTypes.array.isRequired,        
};

const mapStateToProps = state => ({ carrito: getCarrito(state) });
const mapDispatchToProps = { sumarUnidad, restarUnidad, removerProducto, cerrarMensajeFotter };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CarritoContainer));