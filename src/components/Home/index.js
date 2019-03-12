import React from 'react';
import PropTypes from 'prop-types';

import Hero from './Hero';

const Home = () => {
    return (
        <React.Fragment>

            <Hero />
            
        </React.Fragment>
    );
};

Home.propTypes = {
    menu: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    handleResponderEjemploClick: PropTypes.func.isRequired,
    handleResultadosEjemploClick: PropTypes.func.isRequired,
    handleCrearCataClick: PropTypes.func.isRequired,
    handleAcercaDeClick: PropTypes.func.isRequired,
};

export default Home;