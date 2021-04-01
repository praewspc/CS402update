import React  from 'react';
import './App.css';
import './Home.css';
import './Login.css';
import './CreateGroup.css';
import Sidebar from './Components/Sidebar';
import Home from './Home';
import Login from './Login';
import {observer} from 'mobx-react' ;
import { BrowserRouter, Router, Route , Switch} from "react-router-dom";
import CreateGroup from './CreateGroup';

class App extends React.Component{
  renderRouter(){
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/create" component={CreateGroup} />
        
      </Switch>
    )
  }

  render() {

    return (
       
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
   
);
  }



}

export default observer (App);