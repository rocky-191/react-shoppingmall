import React, { Component } from 'react';
import TopNav from 'cp/topnav'

import './theme.scss'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    return (
      <div id="wrapper">
        <TopNav />
        {this.props.children}
      </div>
    );
  }
}
 
export default Layout;