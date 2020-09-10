import React, { Component } from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css'
class Shopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[{
        id:'apple',
        name:'苹果',
        price:3,
        distress:'山东'
      },{
        id:'bananer',
        name:'香蕉',
        price:4,
        distress:'海南'
      },{
        id:'pear',
        name:'梨',
        price:5,
        distress:'甘肃'
      }],
      pageData:{
        current:1,
        total:0,
        pageSize:10
      }
    }
  }
  componentDidMount(){
    const len=this.state.list.length;
    this.setState({
      pageData:{
        ...this.state.pageData,
        total:len
      }
    })
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
            </tr>
          </thead>
          <tbody>
            {
              this.state.list.map(item=>{
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.distress}</td>
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