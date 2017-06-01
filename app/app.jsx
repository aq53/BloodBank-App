var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var { hashHistory } = require('react-router');

import * as actions from 'actions';
var store = require('configStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/'


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(actions.login(user.uid));
        store.dispatch(actions.getUserInfo(user.uid));
        store.dispatch(actions.getDonorsInfo());
        hashHistory.push('/home');
    } else {
        store.dispatch(actions.logout());
        hashHistory.push('/');
    }
});



ReactDOM.render(
    <Provider store={store}>
            {router}
    </Provider>,
    document.getElementById("app"));
