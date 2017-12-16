import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AudioPlayer from './containers/AudioPlayer';
import Hello from './components/Hello';
import Bye from './components/Bye';
import App from './components/App';
import NotFound from './components/Error/NotFound';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/play/playlist/:id" component={AudioPlayer} />
      <Route exact path="/play/song/:id" component={AudioPlayer} />
      <Route exact path="/play" component={AudioPlayer} />
      <Route exact path="/hello" component={Hello} />
      <Route exact path="/bye" component={Bye} />
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
