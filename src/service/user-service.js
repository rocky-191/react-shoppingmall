import Mutils from 'utils/mm.js'
let mm=new Mutils();

class User{
  login(params){
    return mm.request(params)
  }
}

export default User;