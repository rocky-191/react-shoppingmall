import React, { Component, Fragment } from 'react';
import {NavLink} from 'react-router-dom'
class Nologin extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Fragment>
        <NavLink to="/login">登录</NavLink>
        <span className="sep">|</span>
        <NavLink to="/register">注册</NavLink>
      </Fragment>
    );
  }
}
 
export default Nologin;