import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import Routes from "./routes/Routes";
import { Button } from "@material-ui/core";

export default class App2 extends Component {
  render() {
    return (
      <div>
        <h2>Buscar Processos</h2>
      </div>
    );
  }
}
