import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/LandingPage';
import { AuthBody } from './components/auth/AuthBody';
import CategoriesShow from './components/categories/CategoriesShow';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = () => {
  return (
    <Switch>
      <GuestRoute path="/" exact component={HomePage} />
      <GuestRoute path="/login" exact component={AuthBody} />
      <UserRoute path="/categories" exact component={CategoriesShow} />
    </Switch>
  );
};
export default App;
