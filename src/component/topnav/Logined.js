import React, { Component } from 'react';
import MUtils from 'utils/mm.js'
import UserService from 'service/user-service.js'
import './index.scss'

let mm=new MUtils()
let userservice=new UserService()
class Logined extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:mm.getStorage('userInfo')
    }
  }
  logout(){
    userservice.logout().then(res => {
      if(res.code===0){
        mm.removeStorage("userInfo")
        //window.location.href='/login'
        this.props.history.push('/login')
      }
    }).catch((err) => {
      mm.errorTips(err)
    });
  }
  render() {
    return (
      <div>
        <ul>
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
              欢迎 {this.state.userInfo.username} <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li onClick={()=>this.logout()}>
                  退出
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
 
export default Logined;