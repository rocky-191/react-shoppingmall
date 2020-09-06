import React from 'react'
import reactDOM from 'react-dom'
import {HashRouter as Router,Route,Link, Switch, Redirect} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import Home from 'page/home'
import Layout from 'cp/layout'

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
              <Redirect from="*" to="/" />
            </Switch>
          </Layout>
      </Router>
    )
  }
}

reactDOM.render(<App />,document.getElementById("app"))
