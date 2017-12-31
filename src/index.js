import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import Bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import React Slick Styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import custom styles
import '../assets/styles/styles.css';

// Import app routes
import Routes from './routes';

// Import redux store
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('app')); //eslint-disable-line
