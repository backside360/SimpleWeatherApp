import React from 'react';
import ItemsInfo from './ItemsInfo';

import { Switch, Route, Redirect } from 'react-router-dom';

const Items = React.lazy(() => import('./Items'));

const Main = () => (
  <React.Suspense fallback="...Loading">
    <Items />
  </React.Suspense>
);

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/:id/details" component={ItemsInfo} />
    <Redirect to="/" />
  </Switch>
);
