import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import { icons } from 'assets/icons';
import './polyfill';
import './index.css';
import { Provider } from 'react-redux';
import { createGeneralStore } from 'stores';
import App from './App';

import * as serviceWorker from './serviceWorker';

React.icons = icons;

ReactDOM.render(
  <Provider store={createGeneralStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
