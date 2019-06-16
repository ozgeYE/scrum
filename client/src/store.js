import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";
import promise from 'redux-promise-middleware';

export const store= createStore(rootReducer, applyMiddleware(thunk));