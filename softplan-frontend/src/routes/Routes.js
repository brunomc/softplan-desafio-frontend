import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BuscarProcessos from "../containers/BuscarProcessos";

export default props => (
  <Router>
    <div>
      <Route exact path="/" component={BuscarProcessos} />
    </div>
  </Router>
);
