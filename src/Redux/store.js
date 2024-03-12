import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const asyncMiddleware = () => next => action => {
  if (typeof action === 'function') {
    return action(next);
  }
  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(asyncMiddleware));

export default store;
