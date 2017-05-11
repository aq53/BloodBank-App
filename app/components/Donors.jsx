import React from 'react';
import * as actions from 'actions';
import {connect} from 'react-redux';
import Home from 'Home';

var Donors=React.createClass({
    render(){
        return(
            <h1>Donors</h1>
        );
    }
});

export default connect()(Donors);