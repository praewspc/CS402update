import React  from 'react';
import './App.css';
import './Home.css';
import './Login.css';
import './CreateGroup.css';
import './Project.css';
import Home from './Home';
import Login from './Login';
import CreateGroup from './CreateGroup';
import Project from './Project';
import Task from './Task';
import Calendar from './Calendar';
import Setting from './Setting';
import Message from './Message';
import Notification from './Notification';
import Comment from './Comment';
import {GlobalProvider} from './Context/GlobalState';

import {observer} from 'mobx-react' ;
import { BrowserRouter, Router, Route , Switch} from "react-router-dom";


class App extends React.Component{
  renderRouter(){
    return (

    
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/create" component={CreateGroup} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/task" component={Task} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/comment" component={Comment} />
        
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