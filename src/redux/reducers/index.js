import { combineReducers } from 'redux';
import app from './app';

export default (routerReducer) => {
  return combineReducers({
    router: routerReducer,
    app
  })
};

