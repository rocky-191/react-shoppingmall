import React, { Component } from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css'

import ProductService from 'service/product-service.js'
import Mutils from 'utils/mm.js'

let product = new ProductService()
let mm=new Mutils();
class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[],
      pageData:{
        current:1,
        total:0,
        pageSize:10
      }
    }
  }
  componentDidMount(){
    this.loadProductList()
  }
  loadProductList(){
    product.getProductList().then((res) => {
      if(res.code===0){
        const len=res.data.length;
        this.setState({
          list:res.data,
          pageData:{
            ...this.state.pageData,
            total:len
          }
        })
      }
    }).catch((err) => {
      mm.errorTips(err)
    });
  }
  setProductStatus(e,id,status){
    let newStatus=status===1?0:1,
        tips=status===1?'确定要下架吗？':'确定要上架吗？';
    if(window.confirm(tips)){
      product.setProductStatus({id,newStatus}).then((res) => {
        if(res.code===0){
          this.setState({
            list:res.data
          })
        }
      }).catch((err) => {
        mm.errorTips(err)
      });
    }
    this.setState()
  }
  render() { 
    return (
      <div className="home-hero-container container">
        <h2>商品列表</h2>
        <table className="table table-hover">
          <thead>
            <tr>
              <td>商品名</td>
              <td>价格</td>
              <td>产地</td>
              <td>状态</td>
            </tr>
          </thead>
          <tbody>
            {
              this.state.list.map(item=>{
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>¥{item.price}</td>
                    <td>{item.distress}</td>
                    <td>
                      <span>{item.status===1?'在售':'已下架'}</span>
                      <button className="btn btn-xs btn-warning" onClick={(e)=>this.setProductStatus(e,item.id,item.status)}>{item.status===1?'下架':'上架'}</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <Pagination {...this.state.pageData}  />
      </div>
    );
  }
}
 
export default Shopping;