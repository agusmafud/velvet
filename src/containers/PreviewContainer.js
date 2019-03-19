import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import Preview from '../components/Preview';

class HomeContainer extends Component {

    componentDidMount() {    
        window.scrollTo({top: 0,left: 0, behavior: 'smooth'});
    }    

    render() {
        return (
            <Preview                        
            />
        );
    }
}

export default withRouter(HomeContainer);