import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "../containers/MainPage";

export default props => (
  <Router>
    <div>
      <Route exact path="/" component={MainPage} />
    </div>
  </Router>
);
