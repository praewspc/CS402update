import React  from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import CreateGroup from './CreateGroup';
import Group from './Group';
import MyGroup from './MyGroup';
import Calendar from './Calendar';
import Setting from './Setting';
import Message from './Message';
import Notification from './Notification';
import Comment from './Comment';
import { EditCreateGroup } from './Components/EditCreateGroup';
import {Project_Information} from './Components/Project_Information';
import {AvailableTime} from './Components/AvailableTime';
//student2
import Home_Student2 from './Home_Student2'
import CreateGroup_Student2 from './CreateGroup_Student2';
import Group2 from './Group2';
import Notification_Student2 from './Notification_Student2';
import { AcceptGroup } from './Components/AcceptGroup';
import MyGroup_Student2 from './MyGroup_Student2';
import {Project_Information_2} from './Student2/Project_Information_2' ;
import {AvailableTime_2} from './Student2/AvailableTime_2';
//teacher
import Home_Teacher from './Home_Teacher';
import Notification_Teacher from './Notification_Teacher';

//advisor
import Home_Advisor from './Home_Advisor';
import Notification_Advisor from './Notification_Advisor';
import { AcceptGroup_Advisor } from './Advisor/AcceptGroup_Advisor';
import ProjectList_Advisor from './ProjectList_Advisor' ;
import CreateSchedule_Advisor from './CreateSchedule_Advisor';

// import {observer} from 'mobx-react' ;
import { BrowserRouter, Route , Switch} from "react-router-dom";
import {GlobalProvider} from './Context/GlobalState';

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
        <Route exact path="/group" component={Group} />
        <Route exact path="/mygroup" component={MyGroup} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/setting" component={Setting} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/comment" component={Comment} />
        <Route exact path="/edit/:id" component={EditCreateGroup} />
        <Route exact path="/project_inform" component={Project_Information} />
        <Route exact path="/time" component={AvailableTime} />
        
        {/* student2 */}
        <Route exact path="/home2" component={Home_Student2} />
        <Route exact path="/create2" component={CreateGroup_Student2} />
        <Route exact path="/group2" component={Group2} />
        <Route exact path="/notification2" component={Notification_Student2} />
        <Route exact path="/accept" component={AcceptGroup} />
        <Route exact path="/mygroup2" component={MyGroup_Student2} />
        <Route exact path="/project_inform2" component={Project_Information_2} />
        <Route exact path="/time2" component={AvailableTime_2} />

        {/* teacher */}
        <Route exact path="/home_t" component={Home_Teacher} />
        <Route exact path="/notification_t" component={Notification_Teacher} />

        {/* advisor */}
        <Route exact path="/home_a" component={Home_Advisor} />
        <Route exact path="/notification_a" component={Notification_Advisor} />
        <Route exact path="/accept_a" component={AcceptGroup_Advisor} />
        <Route exact path="/projectlist_a" component={ProjectList_Advisor} />
        <Route exact path="/create_t" component={CreateSchedule_Advisor} />

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