import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// Router decides what to show on the screen.
// browserHistory is an object that tells react-router how to interpret
// changes to the URL (lesson 73)
import { Router, browserHistory } from 'react-router';
// import App from './components/app';
import reducers from './reducers';
import routes from './routes';
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* < app /> is deleted from here and replaced with: */}
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
