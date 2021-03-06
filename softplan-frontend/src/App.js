import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";
import Routes from "./routes/Routes";
const App = () => (
  <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
    <Routes />
  </Provider>
);

export default App;
