import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import Home from 'Home';
import Profile from 'Profile';
import Donors from 'Donors';
import Main from 'Main';
import Login from 'Login';
import SignUp from 'SignUp';
import firebase from 'app/firebase/'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import {cyan500,red500,redA200,grey50} from 'material-ui/styles/colors';
import Colors from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey50,
    primary1Color:cyan500,
    alternateTextColor: grey50
  },
  appBar: {
    height: 70,
  },
});
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
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={hashHistory}>
            <Route path="/" component={Login} onEnter={redirectIfLoggedIn} />
            <Route path="signup" component={SignUp} onEnter={redirectIfLoggedIn} />
            <Route path="home" component={Main}>
                <Route path="profile" component={Profile} onEnter={requireLogin} />
                <Route path="donors" component={Donors} onEnter={requireLogin} />
                <IndexRoute component={Home} onEnter={requireLogin} />
            </Route>
        </Router>
    </MuiThemeProvider>

);