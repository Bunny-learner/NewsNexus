import React, { Component } from 'react'

//two types of components will be there  1)className based and 2)function based 
export default class Newsitem extends Component {
  render() {
    let {title,description,urlToImage,url,toggling}=this.props
    
    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={urlToImage?urlToImage:"https://g.foolcdn.com/editorial/images/800893/person-looking-at-graphs-and-charts-happy-because-the-stock-market-went-up.jpg"} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className='d-flex'> <p className="card-text">{description?description:"South Korea’s parliament voted to impeach President Yoon Suk Yeol on Saturday in an extraordinary rebuke that came about after his own ruling party turned on him following his refusal to resign over his short-lived martial law attempt."}</p><img src="drop.png" className="drop" onClick={(e)=>{toggling(e.target)}} alt="" /></div>  
          <a href={url} className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
    )
  }
}
