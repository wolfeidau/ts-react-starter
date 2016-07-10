import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";

import 'bootstrap/dist/css/bootstrap.css';

import { Home } from "./views/Home";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
  </Router>
  ,document.querySelector('#root')
);
