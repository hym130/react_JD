import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Link, Route, Switch,
  NavLink, Redirect, Prompt,
  withRouter
} from 'react-router-dom'
//数据
import { Router_MAP } from './router/routerMap'

// import Home from './component/Home'
// import Classify from './component/Classify'
// import Luckly from './component/Luckly'
// import Mine from './component/Mine'
// import Shopcart from './component/Shopcart'

import Header from './component/Common/Header'
import Footer from './component/Common/Footer'
class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
            <Header></Header>
            <main className='main'>
              {
                Router_MAP.Rouer_VIEW.map((item, ind) => {
                  return (
                    <Route exact path={item.path} component={item.component} key={ind}></Route>
                  )
                })
              }
            </main>
            <Footer>
              {
                Router_MAP.NAV.map((item, ind) => {
                  return (
                    <NavLink to={item.to} activeClassName={item.selected} key={ind}>
                      <i className={item.icon}></i>
                      <span>{item.title}</span>
                    </NavLink>
                  )
                })
              }
            </Footer>
          </div>
      </div>
    );
  }
}

export default withRouter(App);
