import React, { Component } from 'react';
import './index.scss'
import { NavLink } from 'react-router-dom';
import UserService from 'service/user-service.js'
import MUtils from 'utils/mm.js'

let userservice=new UserService()
let mm=new MUtils()
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      loginStatus:false,
      redirect:mm.getUrlParam('redirect') || '/'
    }
  }

  componentWillMount(){
    document.title="登录 MM商城"
  }

  onInputChange(e){
    const {name,value}=e.target;
    this.setState({
      [name]:value
    })
  }

  onInputKeyup(e){
    if(e.keyCode===13){
      this.handleSubmit()
    }
  }

  handleSubmit(){
    // 缺少表单必填校验
    const {username,password}=this.state
    if(username==='admin' && password==='123456'){
      userservice.login({username,password}).then((res) => {
        if(res.code===0){
          this.setState({
            loginStatus:true
          })
          mm.setStorage('userInfo',res.data)
          this.props.history.push(this.state.redirect)
        }
      }).catch((err) => {
        console.log(err)
        mm.errorTips(err);
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.loginStatus?<div className="alert alert-success" role="alert">登录成功</div>:null}
        <div className="h_panel">
          <NavLink to="/">MM商城</NavLink>
        </div>
        <div className="login_banner_panel">
          <div className="panel panel-default">
            <div className="panel-heading">欢迎登录 -- MM商城</div>
            <div className="panel-body">
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="邮箱/手机号码"
                  onKeyUp={e=>this.onInputKeyup(e)}
                  onChange={e=>this.onInputChange(e)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="密码"
                  onKeyUp={e=>this.onInputKeyup(e)}
                  onChange={e=>this.onInputChange(e)}
                />
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" />记住我
                </label>
              </div>
              <button
                className="btn btn-primary btn-lg btn-block"
                onClick={()=>this.handleSubmit()}
              >登录</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;