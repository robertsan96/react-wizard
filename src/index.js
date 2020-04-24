import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import * as serviceWorker from "./serviceWorker";
import store from "./store";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
