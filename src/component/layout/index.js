import React, { Component } from 'react';
import TopNav from 'cp/topnav'

import './theme.scss'

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="wrapper">
        <TopNav {...this.props} />
        {this.props.children}
      </div>
    );
  }
}
 
export default Layout;