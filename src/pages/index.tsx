import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

const Items = React.lazy(() => import('./MainPage'));

const Main = () => (
  <React.Suspense fallback="...Loading">
    <Items />
  </React.Suspense>
);

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Redirect to="/" />
  </Switch>
);
