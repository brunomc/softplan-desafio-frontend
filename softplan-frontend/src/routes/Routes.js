import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App2 from "../App2";

export default props => (
  <Router>
    <div>
      <Route exact path="/" component={App2} />
    </div>
  </Router>
);
