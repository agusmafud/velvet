import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import Home from '../components/Home';

class HomeContainer extends Component {

    render() {
        return (
            <Home                
            />
        );
    }
}

export default withRouter(HomeContainer);