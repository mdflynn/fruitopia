import React, { useState } from "react";
import "./App.scss";

import Nav from "../Nav/Nav";
import HomePage from "../HomePage/HomePage";
import FruitPage from "../FruitPage/FruitPage";

import { Route, Switch } from "react-router-dom";

const App = () => {
  const [selectedFruit, setSelectedFruit] = useState({});

  return (
    <>
      <Nav />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage selectFruit={setSelectedFruit} />}
        />
        <Route
          path="/fruit/:id"
          render={() => <FruitPage fruitDetails={selectedFruit} />}
        />
      </Switch>
    </>
  );
};

export default App;
