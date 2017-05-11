import React from 'react';
import * as actions from 'actions';
import {connect} from 'react-redux';
import Home from 'Home';

var Profile=React.createClass({
    render(){
        return(
            <div className='row'>
            <div className='col-lg-4 col-md-offset-4'>
            <div className="callout-auth">
                <input type="display" value="Name: "/><br/>
                <input type="display" value="Email: "/><br/>
                <input type="display" value="Age: "/><br/>
                <input type="display" value="Contact: "/><br/>
                <input type="display" value="Address: "/><br/>
                </div>
                </div>
                </div>
        );
    }
});

export default connect()(Profile);