import React  from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import Home_Teacher from './Home_Teacher';
import CreateGroup from './CreateGroup';
// import CreateGroup_Teacher from './CreateGroup_Teacher';
import Project from './Project';
import Task from './Task';
import Calendar from './Calendar';
import Setting from './Setting';
import Message from './Message';
import Notification from './Notification';
import Notification_Teacher from './Notification_Teacher';
import Comment from './Comment';
import {GlobalProvider} from './Context/GlobalState';

import {observer} from 'mobx-react' ;
import { BrowserRouter, Router, Route , Switch} from "react-router-dom";

//test
import { Hometest } from './Components/Hometest';
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';
import 'bootstrap/dist/css/bootstrap.min.css'
class App extends React.Component
{
  renderRouter(){
    return (

      // <div style={{maxWidth: "30rem" , margin: "4rem auto"}}>
      <GlobalProvider>
        {/* <Router> */}

        
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home_t" component={Home_Teacher} />
        <Route exact path="/create" component={CreateGroup} />
        {/* <Route exact path="/create_t" component={CreateGroup_Teacher} /> */}
        <Route exact path="/group" component={Project} />
        <Route exact path="/mygroup" component={Task} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/notification_t" component={Notification_Teacher} />
        <Route exact path="/comment" component={Comment} />
        <Route exact path="/hometest" component={Hometest} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        
        </Switch>
        {/* </Router> */}
      </GlobalProvider>
      // </div>
     
    )
  }

  render() {

    return (
       
      <BrowserRouter>{this.renderRouter()}</BrowserRouter>
   
    );
  }



}

export default  App;

//export default observer (App);