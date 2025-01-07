import logo from './logo.svg';
import './App.css';
import './components/Newsitem.css'

import React, { Component } from 'react'
import Navbar from './components/Navbar.js';
import News from './components/News.js';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


 export default class App extends Component {
 
  toggle=(img)=>{
    if(img.classList.length===1){
      img.classList.add('turn')
      img.parentElement.firstElementChild.classList.add('pactive')
    }
    else{
      img.classList.remove('turn')
      img.parentElement.firstElementChild.classList.remove('pactive')
    }
  }



  render() {
  return(
<Router>
  <Switch>
    <Route exact path="/">
    <Navbar />
    <News  key="general"  toggle={this.toggle} category="general" />
    </Route>
    <Route exact path="/sports">
    <Navbar />
    <News   key="sports" toggle={this.toggle}  category="sports" /></Route>
    <Route exact path="/entertainment">
    <Navbar />
    <News  key="entertainment"  toggle={this.toggle}  category="entertainment" /></Route>
    <Route exact path="/business">
    <Navbar />
    <News   key="business" toggle={this.toggle}  category="business" /></Route>
    <Route exact path="/health">
    <Navbar />
    <News  key="health"  toggle={this.toggle}  category="health"/></Route>
    <Route exact path="/science">
    <Navbar />
    <News  key="science"  toggle={this.toggle}  category="science"/></Route>
    <Route exact path="/technology">
    <Navbar />
    <News  key="technology"  toggle={this.toggle} category="technology"/></Route>

  </Switch>
  
</Router>
       
    )
  }
}




