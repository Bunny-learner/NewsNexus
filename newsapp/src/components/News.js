import React, { Component } from 'react'
import Newsitem from './Newsitem.js'
import PropTypes from "prop-types"
import Spinner from './Spinner.js'

export default class News extends Component {

  static defaultProps = {
    country: 'us',
    category: 'general'
  }
  static propTypes = {
    category: PropTypes.string

  }

  constructor() {
    super()
    this.state = {
      articles:[],
      loading: false,
      page: 1,
      totalResults:20
    }

  }

  componentDidMount = async () => {
   
    this.setState({loading:true})
    
      try{
        const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&page=1&apiKey=f9385a5e2b02494fb92d890e27fd4af7`)
        const parseddata = await data.json()
        this.setState({
          articles: parseddata.articles,
          totalResults:parseddata.totalResults,
          loading:false
        })
    
      }
      catch(error){
       alert(error)
      }
      
      

     
   
    
  }

  handlenextclick = async () => {
  
    const {page}=this.state
   this.setState({loading:true})
   const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=f9385a5e2b02494fb92d890e27fd4af7&page=${page + 1}`)
   const parseddata = await data.json()

if(parseddata.articles && parseddata.articles.length>0){
 this.setState({
   page: page + 1,
   articles: parseddata.articles,
   totalResults: this.state.totalResults - 20,
   loading:false

 },()=>{console.log(this.state.totalResults)})
 

}

  }
  
  handleprevclick = async () => {
    console.log("prev page")
    const {page,totalResults}=this.state
   this.setState({loading:true})
    const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&page=${page - 1}&apiKey=f9385a5e2b02494fb92d890e27fd4af7`)
    const parseddata = await data.json()
   
    if(parseddata.articles && parseddata.articles.length >0){
    this.setState({
      page: page - 1,
      articles: parseddata.articles,
      totalResults:totalResults + 20,
      loading:false

    })
    console.log(totalResults)
  }
  }

  render() {
    return (
      <div className="container my-5 ">
        <h2 style={{textAlign:"center"}}>NewsNexus top HeadLines </h2>
        {this.state.loading && <Spinner />}

        <div className="buttons d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" onClick={this.handleprevclick} className="btn btn-dark">Previous  &larr;</button>
          <button type="button" disabled={this.state.totalResults<=20} onClick={this.handlenextclick} className="btn btn-dark">Next  &rarr;</button>
        </div>
        <div className='row' >
 
           {!this.state.loading && this.state.articles.map((e) => {
            return <div className="col-md-4 my-4 " key={e.url}>
              <Newsitem title={e.title} toggling={this.props.toggle} description={e.description} url={e.url} urlToImage={e.urlToImage} />

            </div>
          })}
        </div>
        <div className="buttons d-flex justify-content-between">
          <button  disabled={this.state.page<=1} type="button" onClick={this.handleprevclick} className="btn btn-dark">Previous  &larr;</button>
          <button type="button" disabled={this.state.totalResults<=20} onClick={this.handlenextclick} className="btn btn-dark">Next  &rarr;</button>
        </div>

      </div>





    )
  }
}
