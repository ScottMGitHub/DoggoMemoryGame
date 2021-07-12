import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store, persistor} from './redux/store'
import { defineCustomElements } from '@doggo-memory-game/web-components/dist/esm/loader';
import { PersistGate } from 'redux-persist/integration/react'

// TODO Add loading view
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} > 
            <App />
        </PersistGate>
    </Provider>,
document.getElementById('root'));

// Use this for importing the stencil components
defineCustomElements();
