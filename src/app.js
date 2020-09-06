import React, { PureComponent } from 'react'
import reactDOM from 'react-dom'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'
import './test.scss'
import breadImg from './assets/images/bread.jpg'

const App=()=>{
  return (
    <div>
      hello world react and you learning
      <i className="fa fa-address-book" aria-hidden="true"></i>
      {/* <img src={breadImg} /> */}
    </div>
    
  )
}

reactDOM.render(<App />,document.getElementById("app"))
