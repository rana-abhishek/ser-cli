import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";
import Layout from './hoc/layout';

import indexRoutes from "routes/index.jsx";


import "assets/scss/material-kit-pro-react.css?v=1.2.0";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
      <div>
        <Layout>
          <Switch>
            {indexRoutes.map((prop, key) => {
              return <Route path={prop.path} key={key} component={prop.component} />;
            })}
          </Switch>
        </Layout>
      </div>
  </Router>,
  document.getElementById("root")
);
