import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware, syncHistoryWithStore, LOCATION_CHANGE  } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from 'REDUCER';

const middlewares = [thunk, routerMiddleware(createBrowserHistory()), createLogger()];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const routerReducer = (state = createBrowserHistory().location, { type, payload } = {}) => {         // 重写react-router-redux 自带的reducer 给默认值
  if (type === LOCATION_CHANGE) {
    return { locationBeforeTransitions: {...state, ...payload} }
  }
  return state
};

export const store = createStore(
  reducers(routerReducer),
  window.__INITIAL_STATE__ || {},
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);

export const history = syncHistoryWithStore(createBrowserHistory(), store, {selectLocationState: (state) => state.router, adjustUrlOnReplay: false});
