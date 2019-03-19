import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCarrito, getProductos, getNewsletter } from '../redux/selectors';
import { nuevoNewsletter } from '../redux/actions';

import Home from '../components/Home';

class HomeContainer extends Component {

    componentDidMount() {    
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }    

    handleNuevoNewsletter = (nuevoNewsletter) => {
        this.props.nuevoNewsletter(nuevoNewsletter);        
    }

    render() {
        return (
            <Home                
                productos={this.props.productos} 
                carrito={this.props.carrito}                
                newsletter={this.props.newsletter}
                handleNuevoNewsletter={this.handleNuevoNewsletter}
            />
        );
    }
}

HomeContainer.propTypes = {
    productos: PropTypes.array.isRequired,
    carrito: PropTypes.array.isRequired,
    newsletter: PropTypes.string.isRequired,
    nuevoNewsletter: PropTypes.func.isRequired,    
};

const mapStateToProps = state => ({ 
    productos: getProductos(state), 
    carrito: getCarrito(state),
    newsletter: getNewsletter(state)
});
const mapDispatchToProps = { nuevoNewsletter };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeContainer));