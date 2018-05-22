import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Application from './components/Application';

import configureStore from './store';

const store = configureStore();

class Providers extends Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Application/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Providers;

