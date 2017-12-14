import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import AudioPlayer from './components/AudioPlayer';

import reducers from './reducers';

import '../public/styles/styles.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //eslint-disable-line
);

// TODO: export store to an external file to use in workers: https://stackoverflow.com/questions/38460949/what-is-the-best-way-to-access-redux-store-outside-a-react-component
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/play" component={AudioPlayer} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app')); //eslint-disable-line
