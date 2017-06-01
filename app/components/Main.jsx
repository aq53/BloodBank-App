import React from 'react';
import * as actions from 'actions';
import { connect } from 'react-redux';
import Nav from 'Nav';
var { Link } = require('react-router');


import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

var Main = React.createClass({
    render() {
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        );
    }
});

export default connect()(Main);