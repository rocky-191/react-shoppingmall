import React, { Component,Fragment } from 'react';
import {NavLink} from 'react-router-dom'
class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navlist:[
        {
          to:'/shopping',
          name:'商城'
        },
        {
          to:'/finance',
          name:'金融'
        },
        {
          to:'/forum',
          name:'论坛'
        }
      ]
    }
  }
  render() {
    return (
      <div className="topnav">
        <div className="container">
          <div className='topbar-nav'>
            {
              this.state.navlist.map(nav=>{
                return (
                  <Fragment key={nav.to}>
                    <NavLink to={nav.to} >{nav.name}</NavLink>
                    <span className="sep">|</span>
                  </Fragment>
                )
              })
            }
          </div>
          <div className="topbar-info">
            <NavLink to="/login">登录</NavLink>
            <span className="sep">|</span>
            <NavLink to="/register">注册</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
 
export default TopNav;