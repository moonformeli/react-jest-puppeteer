import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import LoginSuccess from "./components/LoginSuccess";

const Main = (
  <Router basename="/">
    <div>
      <Route exact path="/" component={App} />
      <Route path="/login/success" component={LoginSuccess} />
    </div>
  </Router>
);
ReactDOM.render(Main, document.getElementById("root"));

module.hot.accept();
