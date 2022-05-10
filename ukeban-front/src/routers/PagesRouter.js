import Product from "../pages/product/Product";
import About from "../pages/about/About";
import Help from "../pages/help/Help";
import Merchant from "../pages/merchant/Merchant";
import News from "../pages/news/News";
import Home from "../pages/home/Home";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import React, { Component } from "react";

export default class AntdesignRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Product" component={Product} />
          <Route path="/Help" component={Help} />
          <Route path="/Merchant" component={Merchant} />
          <Route path="/News" component={News} />
          <Redirect from="/" to="/Home" exact />
        </Switch>
      </HashRouter>
    );
  }
}
