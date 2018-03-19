import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/LandingPage';
import { AuthBody } from './components/auth/AuthBody';
import { CategoryComponent } from './components/categories/Category';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/Login" exact component={AuthBody} />
      <Route path="/Categories" exact component={CategoryComponent} />
    </Switch>
  );
};
export default App;
