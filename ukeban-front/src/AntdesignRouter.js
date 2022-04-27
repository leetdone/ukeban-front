
import Product from './views/Product';
import About from './views/About';
import Help from './views/Help';
import Merchant from './views/Merchant';
import News from './views/News';
import Home from './views/Home';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import React, { Component } from 'react'

          
export default class AntdesignRouter extends Component {
  render() {
    return (
        <HashRouter>
        <Switch>
        <Route path='/Home' component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Product' component={Product}/>
        <Route path='/Help' component={Help}/>
        <Route path='/Merchant' component={Merchant}/>
        <Route path='/News' component={News}/>
        <Redirect from="/" to="/Home" exact/>
        </Switch>
        </HashRouter>
    )
  }
}

