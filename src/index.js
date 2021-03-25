import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
    createStore,
    combineReducers
} from 'redux';

import {Provider} from 'react-redux';

import AnimReducer from './reducer/anim';
import RoutesReducer from './reducer/routes';

const rootReducer = combineReducers({AnimReducer, RoutesReducer});
const GeneralStore = createStore(rootReducer);

ReactDOM.render(
    <StrictMode>
    <Provider store = {GeneralStore}>
    <App/>
    </Provider>
    </StrictMode>
,document.getElementById('root'));