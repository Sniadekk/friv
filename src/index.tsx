import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "easy-peasy";
import reportWebVitals from "reportWebVitals";
import { Router } from "pages";
import { store } from "store";
import "./config/i18n";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
