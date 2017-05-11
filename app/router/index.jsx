import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Home from 'Home';
import Profile from 'Profile';
import Donors from 'Donors';
import Main from 'Main';
import Login from 'Login';
import SignUp from 'SignUp';
import firebase from 'app/firebase/'

var requireLogin = (nextState, replace, next) => {
    if (!firebase.auth().currentUser) {
        replace('/');
    }
    next();
};
var redirectIfLoggedIn = (nextState, replace, next) => {
    if (firebase.auth().currentUser) {
        replace('/home');
    }
    next();
};

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Login} onEnter={redirectIfLoggedIn}/>
        <Route path="signup" component={SignUp} onEnter={redirectIfLoggedIn}/>
        <Route path="home" component={Main}>
            <Route path="profile" component={Profile} onEnter={requireLogin}/>
            <Route path="donors" component={Donors} onEnter={requireLogin} />
            <IndexRoute component={Home} onEnter={requireLogin} />
        </Route>
    </Router>
);