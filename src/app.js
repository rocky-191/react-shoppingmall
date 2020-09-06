import React, { PureComponent } from 'react'
import reactDOM from 'react-dom'
import {HashRouter as Router,Route,Link, Switch} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'

class ComA extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div>
        component A
        <Switch>
        <Route exact path={`${this.props.match.path}`}
            render={(route)=>{
              return <div>
                <p>不带参数组件A</p>
              </div>
            }}>
          </Route>
          <Route path={`${this.props.match.path}/sub`}
            render={(route)=>{
              return <div>
                <p>子页面</p>
              </div>
            }}>
          </Route>
          <Route path={`${this.props.match.path}/:id`}
            render={(route)=>{
              return <div>
                <p>带参数组件A，参数是：{route.match.params.id}</p>
              </div>
            }}>
          </Route>
        </Switch>
      </div>
    )
  }
}

function ComB(){
  return (
    <div>component B</div>
  )
}

const App=()=>{
  return (
    <Router>
      <div>
        hello world react and you learning
        <Link to='/a'>显示a组件</Link>
        <Link to='/a/123'>带参数a组件</Link>
        <Link to='/a/sub'>a组件子页面</Link>
        <Link to='/b'>显示b组件</Link>
        <Route path='/a' component={ComA} />
        <Route path='/b' component={ComB} />
      </div>
    </Router>
  )
}

reactDOM.render(<App />,document.getElementById("app"))
