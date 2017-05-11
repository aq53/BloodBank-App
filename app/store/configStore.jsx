import * as redux from 'redux';
import thunk from 'redux-thunk';
import { createUserReducer,authReducer } from 'reducers';

export var configure = () => {
    var reducer = redux.combineReducers({
        user:createUserReducer,
        auth:authReducer
    });

    var store = redux.createStore(reducer,redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};