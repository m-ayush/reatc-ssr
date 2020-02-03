import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/homepageComponent";
import AboutUs from "./pages/aboutusComponent";
export class app extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutUs" component={AboutUs} />
      </Switch>
    );
  }
}

export default app;
