import React from "react";
import "./App.scss";

import Nav from "../Nav/Nav";
import HomePage from "../HomePage/HomePage";
import FruitPage from "../FruitPage/FruitPage";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </>
  );
};

export default App;
