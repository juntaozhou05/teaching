import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import demo from "./routes/demo";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/demo" exact component={demo} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
