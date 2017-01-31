import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

const Greeting = () => {
  return <div>Hey there!</div>;
};

export default (
  // on root, show app
  <Route path="/" component={App}>
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="greet3" component={Greeting} />
  </Route>
);
