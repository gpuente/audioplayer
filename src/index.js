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

ReactDOM.render(
  <Provider
    store={createStoreWithMiddleware(
      reducers,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //eslint-disable-line
    )}
  >
    <BrowserRouter>
      <Switch>
        <Route path="/play" component={AudioPlayer} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app')); //eslint-disable-line
