import React, { Component,Fragment } from 'react';
import {NavLink} from 'react-router-dom'
import Nologin from './Nologin'
import Logined from './Logined'
import MUtils from 'utils/mm.js'

let mm=new MUtils()
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
    const userinfo=mm.getStorage('userInfo');
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
            {userinfo?<Logined {...this.props} />:<Nologin />}
          </div>
        </div>
      </div>
    );
  }
}
 
export default TopNav;