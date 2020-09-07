import React from 'react'
import reactDOM from 'react-dom'
import {HashRouter as Router,Route, Switch, Redirect} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import Home from 'page/home'
import Layout from 'cp/layout'
import Shopping from 'page/shopping'
import Forum from 'page/forum'
import Finance from 'page/Finance'
import Login from 'page/login'
import Register from 'page/register'

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/shopping" component={Shopping}></Route>
              <Route path='/finance' component={Finance}></Route>
              <Route path='/forum' component={Forum}></Route>
              <Route path='/login' component={Login}></Route>
              <Route path='/register' component={Register}></Route>
              <Redirect from="*" to="/" />
            </Switch>
          </Layout>
      </Router>
    )
  }
}

reactDOM.render(<App />,document.getElementById("app"))
