import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const errorStyle={
      textAlign:'center',
      marginTop:'20px'
    }
    return (
      <div className="home-hero-container">
        <div className="container">
          <div className="col-md-12" style={errorStyle}>
            <h2>找不到该路径，出错了！</h2>
            <NavLink to="/">点我返回首页</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Error;