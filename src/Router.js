import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import App from "./Views/App";
import Movie from "./Views/Movie";
export default function MainRouter() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path="/" component={App} />
          <Route exact path="/movie/:movieId" component={Movie} />
        </Layout>
      </Switch>
    </Router>
  );
}
