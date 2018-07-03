import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import unregister from './registerServiceWorker';
import store from './store';
import {Provider} from 'react-redux';
import { CookiesProvider } from 'react-cookie';
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App/>
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
);

