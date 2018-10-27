import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchProcess from "../containers/SearchProcess";
import ListProcess from "../containers/ListProcess";
import Process from "../containers/ListProcess";
import CardComponent from "../components/CardComponent";

export default props => (
  <Router>
    <div>
      <Route exact path="/" component={SearchProcess} />
      <Route exact path="/listProcess" component={ListProcess} />
      <Route exact path="/card" component={CardComponent} />
    </div>
  </Router>
);
