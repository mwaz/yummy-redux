import React from 'react';
import { Switch } from 'react-router-dom';
import HomePage from './components/pages/LandingPage';
import { AuthBody } from './components/auth/AuthBody';
import CategoriesShow from './components/categories/CategoriesShow';
import ViewRecipes from './components/categories/recipes/ViewRecipes';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';

const App = () => {
  return (
    <Switch>
      <GuestRoute path="/" exact component={HomePage} />
      <GuestRoute path="/login" exact component={AuthBody} />
      <UserRoute path="/categories" exact component={CategoriesShow} />
      <UserRoute
        path="/categories/:category_id/recipes"
        exact
        component={ViewRecipes}
      />
    </Switch>
  );
};
export default App;
