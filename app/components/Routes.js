import React from 'react';
import { HashRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import routes from './common/constants/routes';
import Counter from './Counter';
import Home from './Home';

export default () => (
  <Router>
    <Switch>
      <Route path={routes.COUNTER} component={Counter} />
      <Route path={routes.HOME} component={Home} />
    </Switch>
  </Router>
);
