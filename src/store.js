import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import setupSubscriptions from 'redux-subscriptions';

import reducers from './reducers';
import listeners from './listeners';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //eslint-disable-line
);

const callListeners = ({
  dispatch,
  getDiff,
  newState,
  prevState,
}) => listeners(dispatch, getDiff(), newState, prevState);

store.subscribe(setupSubscriptions(store)(callListeners));

// TODO: delete this line for production!
window.store = store; //eslint-disable-line

export const { dispatch } = store;
export default store;
