import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store';

import App from './components/App';
import AudioPlayer from './components/AudioPlayer';
import Hello from './components/Hello';
import Bye from './components/Bye';

import '../public/styles/styles.css';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/play" component={AudioPlayer} />
        <Route path="/hello" component={Hello} />
        <Route path="/bye" component={Bye} />
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app')); //eslint-disable-line
