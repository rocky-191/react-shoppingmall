// 工具类
class MUtils{
  // 实际项目中会使用axios等请求库，配置拦截器等方法
  request(params){
    console.log(`请求参数：${params}`)
    return new Promise((resolve,reject)=>{
      // 模拟接口成功
      setTimeout(()=>{
        resolve({
          code:0,
          data:{
            username:params.username,
            age:18,
            sex:'mail'
          },
          msg:'success'
        })
      },500)
    })
  }
  logoutrRequest(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({
          code:0,
          data:'',
          msg:'success'
        })
      },500)
    })
  }
  doLogin(){
    window.location.href='/login?redirect'+encodeURIComponent(window.location.pathname);
  }
  getUrlParam(key){
    // param=123&username=tom&age=18
    let queryString=window.location.search.split("?")[1] || '',
        reg=new RegExp("(^|&)"+key+"=([^&]*)(&|$)"),
        result=queryString.match(reg);
    // result ['param=123','','123','&']
    return result ? decodeURIComponent(result[2]) : null
  }
  errorTips(msg='出错了'){
    alert(msg)
  }
  successTips(msg='成功了'){
    alert(msg)
  }
  setStorage(key,val){
    window.localStorage.setItem(key,typeof val==='object'?JSON.stringify(val):val)
  }
  getStorage(key){
    let data=window.localStorage.getItem(key);
    if(data){
      return JSON.parse(data)
    }
    return null
  }
  removeStorage(key){
    if(key){
      window.localStorage.removeItem(key)
    }else{
      // 全部清空
      window.localStorage.clear();
    }
  }
}

export default MUtils;