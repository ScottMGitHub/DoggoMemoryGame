import thunkMiddleware from 'redux-thunk';
import {rulesEngine} from './rulesEngine';
import {services} from './services';

export const orderedMiddleware = [
    thunkMiddleware,
    rulesEngine,
    services,
];