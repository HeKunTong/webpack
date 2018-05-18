import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, history } from 'STORE';
import { Router, Route } from 'react-router-dom';
import App from './App';


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <App/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);