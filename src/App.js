import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/LandingPage';
import { AuthBody } from './components/auth/AuthBody';
import { CategoryComponent } from './components/categories/Category';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <GuestRoute path="/login" exact component={AuthBody} />
      <UserRoute path="/categories" exact component={CategoryComponent} />
    </Switch>
  );
};
export default App;
