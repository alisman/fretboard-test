//import { combineReducers } from 'redux';
import { routerReducer as routing, push } from 'react-router-redux';
import noteSelection from './modules/fretboard';
import customRoutingReducer from './customRouterReducer';
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';




// Require your modules here
const modules = {
    noteSelection
}

export let actions = {
    routing: {
        navigateTo: path => dispatch => dispatch(push(path))
    }
}

export let initialState = Immutable.Map({});

export let reducers = {customRoutingReducer};

Object.keys(modules).forEach(key => {
    const module = modules[key];
    //initialState[key] = module.initialState || Immutable.Map({});

    if (module.initialstate) {
        initialState = initialState.set(key, module.initialState || Immutable.Map({}));
    }

    actions[key] = module.actions;
    reducers[key] = module.reducer;
});

export const rootReducer = combineReducers(reducers);
