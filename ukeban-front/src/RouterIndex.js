import React, { Component } from 'react'
import Product from './views/Product';
import About from './views/About';
import Help from './views/Help';
import Merchant from './views/Merchant';
import News from './views/News';
import Home from './views/Home';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Redirect, Switch,NavLink } from 'react-router-dom';
import NotFound from './views/NotFound';
export default class RouterIndex extends Component {
  render() {
    return (
      <HashRouter>
      {/* //      <ul>
                  <li>
                    <NavLink to='/Home'>首页</NavLink>
                  </li>
                  <li>
                    <NavLink to='/Product'>产品介绍</NavLink>
                  </li>
                  <li>
                    <NavLink to='/About'>关于我们</NavLink>
                  </li>
                  <li>
                    <NavLink to='/News'>新闻中心</NavLink>
                  </li>
                  <li>
                    <NavLink to='/Merchant'>商户总览</NavLink>
                  </li>
                  <li>
                    <NavLink to='/Help'>帮助中心</NavLink>
                  </li>
              </ul> */}
      {/* //   <Switch>
      //       <Route path='/Home' component={Home}/>
      //       <Route path='/About' component={About}/>
      //       <Route path='/Product' component={Product}/>
      //       <Route path='/Help' component={Help}/>
      //       <Route path='/Merchant' component={Merchant}/>
      //       <Route path='/News' component={News}/>

      //       <Redirect from="/" to="/Home" exact/>
      //       <Route component={NotFound}/>
      //   </Switch> */}
      {this.props.children}
      </HashRouter>
    )
  }
}
