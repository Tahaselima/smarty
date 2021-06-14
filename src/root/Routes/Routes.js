import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import PublicLayout from '../../layout/index';

import Welcome from '../../pages/Welcome/route';
import Product from '../../pages/Product/route';

const history = createBrowserHistory();

const routes = [...Welcome, ...Product];

export function Routes() {
  return (
    <Router history={history}>
      <PublicLayout>
        <Switch>
            {routes.map((route, index) => (
                  <Route {...route} key={route.path + index} />
              ))}
        </Switch>
      </PublicLayout> 
    </Router>
  );
}

export default Routes;
