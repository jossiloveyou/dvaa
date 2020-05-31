import React from 'react';
import dynamic from 'dva/dynamic'
import { Router, Route, Switch, Link } from 'dva/router';
import { Home, Login } from './assembly'

function RouterConfig({ history, app }) {
  // const Home = dynamic({
  //   app,
  //   models: () => [
  //     import('@/models/home')
  //   ],
  //   component: () => import('@/pages/home')
  // })
  
  // const Login = dynamic({
  //   app,
  //   models: () => [
  //     import('@/models/login')
  //   ],
  //   component: () => import('@/pages/login')
  // })
  return (
    <Router history={history}>
      <>
      {/* <h1><Link to="/login">login</Link></h1>   */}
      {/* <h1><Link to="/login/88">login2</Link></h1>  
      <h1><Link to="/login/66">login3</Link></h1>  
      <h1><Link to="/">home</Link></h1>   */}
      <Switch>
        <Route path="/login/:id" component={Login} />
        <Route path="/home" exact component={Home} />
      </Switch>
      </>
    </Router>
  );
}

export default RouterConfig;
