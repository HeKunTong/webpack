import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter  } from 'react-router-dom';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import { reducers } from 'REDUCER';

const middlewares = [thunk, routerMiddleware(BrowserRouter), createLogger()];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers(),
  window.__INITIAL_STATE__ || {},
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);

export const history = syncHistoryWithStore(createBrowserHistory(), store, {
  selectLocationState: state => {
    console.log('state---------------', state);
    return state.routing;
  }
});
