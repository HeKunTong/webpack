import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app';

export const reducers = () => {
  return combineReducers({
    routing: routerReducer,
    app
  })
};

