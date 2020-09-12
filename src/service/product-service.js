// import Mutils from 'utils/mm.js'
// let mm=new Mutils();

class ProductService{
  constructor(){
    this.proList=[{
      id:'apple',
      name:'苹果',
      price:3,
      distress:'山东',
      status:1
    },{
      id:'bananer',
      name:'香蕉',
      price:4,
      distress:'海南',
      status:0
    },{
      id:'pear',
      name:'梨',
      price:5,
      distress:'甘肃',
      status:1
    }]
  }
  getProductList(params={}){
    // return mm.request(params)
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({
          code:0,
          data:this.proList,
          msg:'success'
        })
      },500)
    })
  }
  setProductStatus(params){
    const {id,newStatus}=params;
    let newList=this.proList.map(item=>{
      if(item.id==id){
        item.status=newStatus;
      }
      return item
    })
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({
          code:0,
          data:newList,
          msg:'success'
        })
      },500)
    })
  }
}

export default ProductService;