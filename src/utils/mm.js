// 工具类
class MUtils{
  request(params){
    console.log(`请求参数：${params}`)
    return new Promise((resolve,reject)=>{
      // 模拟接口成功
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
}

export default MUtils;