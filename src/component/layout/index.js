import React, { Component } from 'react';
import TopNav from 'cp/topnav'

import './theme.scss'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowTopNav:true
    }
  }
  changeIsShowTop(val){
    this.setState({
      isShowTopNav:val
    })
  }
  componentDidMount(){
    window.addEventListener('hashchange',(state)=>{
      console.log(state)
      if(!(state.newURL.includes('login') || state.newURL.includes('register'))){
        this.changeIsShowTop(true)
      }
    })
  }
  render() {
    return (
      <div id="wrapper">
        {this.state.isShowTopNav? <TopNav changeIsShowTop={(val)=>this.changeIsShowTop(val)} />:null}
        {this.props.children}
      </div>
    );
  }
}
 
export default Layout;