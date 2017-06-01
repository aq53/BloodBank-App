import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from 'actions';
import Home from 'Home';
import firebase, { firebaseRef } from 'app/firebase/';
var { Link } = require('react-router');


import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

var Login = React.createClass({
    
    handleSignUpBtn(e) {
        e.preventDefault();
        hashHistory.push('/signup');
    },
    handleSubmit(e) {
        e.preventDefault();
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var { dispatch } = this.props;
        dispatch(actions.startLogin(email, password));
    },
    loginRender(){
        hashHistory.push("/");
    },
    signUpRender(){
        hashHistory.push("/signup");
    },
    render() {
        return (
            <div>
            <AppBar
                title={<span>Blood Bank App</span>}

                iconElementRight={
                    <div className="links">
                        <FlatButton onClick={this.loginRender}> Login</FlatButton>
                        <FlatButton onClick={this.signUpRender}>Sign Up</FlatButton>
                    </div>
                }
            />
            <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-offset-2">
                            <div className="callout-auth">
                                <h3>Login</h3>
                                <div className="form">
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text" ref="email" placeholder="Enter Email" required /><br/>
                                    <input type="password" ref="password" placeholder="Enter Password" required /><br />
                                    <input type="Submit" className="btn btn-info" />
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        );

    }
});

export default connect()(Login);