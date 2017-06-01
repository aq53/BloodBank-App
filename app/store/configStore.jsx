import * as redux from 'redux';
import thunk from 'redux-thunk';
import { createUserReducer,authReducer,userInfoReducer,donorsInfoReducer } from 'reducers';

export var configure = () => {
    var reducer = redux.combineReducers({
        user:createUserReducer,
        userInfo:userInfoReducer,
        donors:donorsInfoReducer,
        auth:authReducer
    });

    var store = redux.createStore(reducer,redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};