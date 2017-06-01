import React from 'react';
import * as actions from 'actions';
import { hashHistory } from 'react-router';
var { connect } = require('react-redux');
var { Link } = require('react-router');

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


var SignUp = React.createClass({
    getInitialState() {
        return { bloodGrp: '' }
    },
    handleChange(e) {
        this.setState({ bloodGrp: e.target.value })
    },
    handleSubmit(e) {
        e.preventDefault();
        var { dispatch } = this.props;
        var email = this.refs.email.value;
        var password = this.refs.password.value;
        var rePassword = this.refs.rePassword.value;
        var name = this.refs.name.value;
        var contact = this.refs.contact.value;
        var age = this.refs.age.value;
        var address = this.refs.address.value;
        var { bloodGrp } = this.state;


        if (password !== rePassword) {
            console.log('Password mismatch');
        }
        else {
            dispatch(actions.startCreateUser(email, password, name, contact, age, address, bloodGrp));
            this.refs.email.value = '';
            this.refs.password.value = '';
            this.refs.rePassword.value = '';
            this.refs.name.value = '';
            this.refs.contact.value = '';
            this.refs.age.value = '';
            this.refs.address.value = '';
        }

    },
    loginRender() {
        hashHistory.push("/");
    },
    signUpRender() {
        hashHistory.push("/signup");
    },

    render() {
        return (
            <div>
                <AppBar
                    title={<span>Blood Bank App</span>}

                    iconElementRight={
                        <div className="links">
                            <FlatButton onClick={this.loginRender}>Login</FlatButton>
                            <FlatButton onClick={this.signUpRender}>Sign Up</FlatButton>
                        </div>
                    }
                />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-offset-2">
                            <div className="callout-auth">
                                <h3>Sign Up</h3>
                                <div className="form">
                                    <form onSubmit={this.handleSubmit}>
                                        <input type="email" ref="email" placeholder="Email" name="email" required /><br />
                                        <input type="password" ref="password" placeholder="Password" required /><br />
                                        <input type="password" ref="rePassword" placeholder="Confirm Password" required /><br />
                                        <input required type='text' ref='name' placeholder="Name" /><br />
                                        <input required type='number' ref='contact' placeholder="Contact #" /><br />
                                        <input required type='number' ref='age' placeholder="Age" /><br />
                                        <textarea required ref="address" cols="25" rows="1" placeholder="Address"></textarea>
                                        <h4>Blood Type</h4>
                                        <select onChange={this.handleChange} value={this.state.bloodGrp}>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                        </select>
                                        <br />
                                        <br />
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

export default connect()(SignUp);