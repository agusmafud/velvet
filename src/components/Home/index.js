import React from 'react';
import PropTypes from 'prop-types';

import Menu from './Menu';
import Hero from './Hero';
import Claim from './Claim';
import ProductosGrid from './ProductosGrid';
import { getUnidadesCarrito } from '../../helpers/carritoHelpers';

const Home = ({ carrito, productos, newsletter, handleNuevoNewsletter }) => {
    return (
        <React.Fragment>

            <Menu
                unidades={getUnidadesCarrito(carrito)} 
             />

            <Hero />

            <Claim />

            <ProductosGrid 
                productos={productos} 
                carrito={carrito}       
                newsletter={newsletter}
                handleNuevoNewsletter={handleNuevoNewsletter}                               
            />
            
        </React.Fragment>
    );
};

Home.propTypes = {    
    carrito: PropTypes.array.isRequired,
    productos: PropTypes.array.isRequired,    
    newsletter: PropTypes.string.isRequired,
    handleNuevoNewsletter: PropTypes.func.isRequired,
};

export default Home;