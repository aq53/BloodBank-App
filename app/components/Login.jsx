import React from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import * as actions from 'actions';
import Home from 'Home';
import firebase, { firebaseRef } from 'app/firebase/';

var Login = React.createClass({
    handleSignUpBtn(e) {
        e.preventDefault();
        hashHistory.push('/signup');
    },
    handleSubmit(e) {
        e.preventDefault();
        var email = this.refs.email.value;
        var password=this.refs.password.value;
        var {dispatch}=this.props;
        dispatch(actions.startLogin(email,password));
    },
    render() {
        return (
            <div className="container">
                <div className="page-actions">
                    <a onClick={this.handleSignUpBtn} href="#">Sign Up</a>
                </div>
                <h1 className="page-title">Blood Bank App</h1>
                <div className="row">
                    <div className="col-lg-8 col-md-offset-2">
                        <div className="callout-auth">
                            <h3>Login</h3>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" ref="email" placeholder="Email" required /><br/>
                                <input type="password" ref="password" placeholder="Password" required /><br />
                                <input type="Submit" className="btn btn-danger" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default connect()(Login);