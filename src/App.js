import React  from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import CreateGroup from './CreateGroup';
import Project from './Project';
import Task from './Task';
import Calendar from './Calendar';
import Setting from './Setting';
import Message from './Message';
import Notification from './Notification';
import Comment from './Comment';

import Home_Student2 from './Home_Student2'
import CreateGroup_Student2 from './CreateGroup_Student2';
import Notification_Student2 from './Notification_Student2';

import Home_Teacher from './Home_Teacher';
import Notification_Teacher from './Notification_Teacher';

import Home_Advisor from './Home_Advisor';

import {GlobalProvider} from './Context/GlobalState';
// import {observer} from 'mobx-react' ;
import { BrowserRouter, Route , Switch} from "react-router-dom";

//test
import { Hometest } from './Components/Hometest';
import { AddUser } from './Components/AddUser';
import { EditCreateGroup } from './Components/EditCreateGroup';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  renderRouter(){
    return (
      <GlobalProvider>
        <Switch>

        {/* student1 */}
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/create" component={CreateGroup} />
        <Route exact path="/group" component={Project} />
        <Route exact path="/mygroup" component={Task} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/comment" component={Comment} />
        <Route exact path="/hometest" component={Hometest} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditCreateGroup} />
        
        {/* student2 */}
        <Route exact path="/home2" component={Home_Student2} />
        <Route exact path="/create2" component={CreateGroup_Student2} />
        <Route exact path="/notification2" component={Notification_Student2} />

        {/* teacher */}
        <Route exact path="/home_t" component={Home_Teacher} />
        <Route exact path="/notification_t" component={Notification_Teacher} />

        {/* advisor */}
        <Route exact path="/home_a" component={Home_Advisor} />
        </Switch>
      </GlobalProvider>
      
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