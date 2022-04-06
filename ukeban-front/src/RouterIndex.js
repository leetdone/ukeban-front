import React, { Component } from 'react'
import Product from './views/Product';
import About from './views/About';
import Help from './views/Help';
import Merchant from './views/Merchant';
import News from './views/News';
import Home from './views/Home';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Redirect, Switch } from 'react-router-dom';
import NotFound from './views/NotFound';
export default class RouterIndex extends Component {
  render() {
    return (
      <HashRouter>
        {this.props.children}
        <Switch>
            <Route path='/Home' component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Product' component={Product}/>
            <Route path='/Help' component={Help}/>
            <Route path='/Merchant' component={Merchant}/>
            <Route path='/News' component={News}/>

            <Redirect from="/" to="/Home" exact/>
            <Route component={NotFound}/>
        </Switch>
      </HashRouter>
    )
  }
}
