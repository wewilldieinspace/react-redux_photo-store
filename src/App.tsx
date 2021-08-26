import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Pages
import { Main, Item, Catalog, Basket } from "./pages";
// Components
import { MainNav } from "./components";

export const App = () => {
  return (
    <Router>
      <MainNav />
      <div className="container">
        {/* <Switch> */}
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/item/:id">
            <Item />
          </Route>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
        {/* </Switch> */}
      </div>
    </Router>
  );
};
