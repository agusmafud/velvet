import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../Home/Menu';
import CarritoHeader from './CarritoHeader';
import CarritoVacio from './CarritoVacio';
import CarritoTabla from './CarritoTabla';
import CarritoResumen from './CarritoResumen';
import { getUnidadesCarrito, getMontoCarrito} from '../../helpers/carritoHelpers';

const Carrito = 
    ({ carrito, handleSumarUnidad, handleRestarUnidad, handleRemoverProducto }) => {
    return (
        <React.Fragment>
            
            <Menu                 
                unidades={getUnidadesCarrito(carrito)}                 
            />            

            <CarritoHeader />

            { 
                (carrito.length === 0) ?
                    <CarritoVacio                        
                    />
                :
                <React.Fragment>
                    <CarritoTabla 
                        carrito={carrito}
                        onSumarUnidad={handleSumarUnidad} 
                        onRestarUnidad={handleRestarUnidad}
                        onRemoverProducto={handleRemoverProducto}
                    />
                    <CarritoResumen 
                        subtotal={getMontoCarrito(carrito)}                        
                    />
                </React.Fragment>
            }
            
        </React.Fragment>
    );
};

Carrito.propTypes = {
    carrito: PropTypes.array.isRequired,        
    handleSumarUnidad: PropTypes.func.isRequired,
    handleRestarUnidad: PropTypes.func.isRequired,
    handleRemoverProducto: PropTypes.func.isRequired,     
};

export default Carrito;