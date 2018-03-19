import React from "react";
import { Route, Link } from "react-router-dom";
import Register from "../Register";
import Login from "../Login";

const App = () => (
  <div>
    <header>
      <Link to="/"> Register </Link>
      <Link to="/login"> Login </Link>
    </header>

    <main>
      <Route exact path="/" component={Register} />
      <Route exact path="/login" component={Login} />
    </main>
  </div>
);
