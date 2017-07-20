import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter, Route } from 'react-router-dom';

import Hello from './components/Hello';
import Goodbye from './components/Goodbye';

/*
  BrowserRouter: Interacts with the history library and decides what to do
  based on a change inside a URL.

  Route: Provide configuration and/or customization to react router
*/

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
          {/*
            Order routes from the most specific to the most general one.
            This will prevent overriding in the routes.
          */}
          <Route path="/hello/:name" component={Hello} />
          <Route path="/goodbye/:name" component={Goodbye} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
