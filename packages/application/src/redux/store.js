import { createStore, applyMiddleware } from 'redux';
import {rootReducer} from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {orderedMiddleware} from './middleware';
import {composeWithDevTools} from 'redux-devtools-extension';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['memoryGame']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewareEnhancer = applyMiddleware(...orderedMiddleware);

export const store = createStore(persistedReducer, composeWithDevTools(middlewareEnhancer));
export const persistor = persistStore(store);
