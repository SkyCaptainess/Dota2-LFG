import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {Provider} from 'react-redux';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <App/>
    </CookiesProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
