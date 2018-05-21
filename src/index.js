import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'STORE';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Test } from './pages';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/test' component={Test}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
);