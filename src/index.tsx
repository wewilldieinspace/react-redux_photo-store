import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
// Components
import { App } from "./App";
// Style
import "./index.css";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
