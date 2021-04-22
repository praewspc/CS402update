import React from 'react'
import '../App.css';
import {SidebarData_Teacher} from './SidebarData_Teacher';
import {SidebarData_Message_Teacher} from './SidebarData_Message_Teacher' ;
import {SidebarData_Noti_Teacher} from './SidebarData_Noti_Teacher' ;
import {SidebarData_Comment_Teacher} from './SidebarData_Comment_Teacher' ;
import {SidebarLogout_Teacher} from './SidebarLogout_Teacher';

function Sidebar_Teacher() {
    return (
        <div className="Sidebar">
            <div className="Projectname1"> ADMINISTRATIVE </div>
            <div className="Projectname2"> SPECIAL PROJECT </div>

            <hr class="solid"></hr>

            <ul className="SidebarList">
                {SidebarData_Teacher.map((val,key) => {
                    return (
                        <li 
                            key={key} 
                            className ="row"
                            id = {window.location.pathname == val.link ? "active" : ""}
                            onClick = { () => {
                                window.location.pathname = val.link ;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>

            <hr class="solid"></hr>

            <ul className="SidebarList">
                {SidebarData_Message_Teacher.map((val,key) => {
                    return (
                        <li 
                            
                            key={key} 
                            className ="row"
                            id = {window.location.pathname == val.link ? "active" : ""}
                            onClick = { () => {
                                window.location.pathname = val.link ;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                            {/* <span class="badge badge-danger">1</span> */}
                        </li>
                    );
                })}
                {SidebarData_Noti_Teacher.map((val,key) => {
                    return (
                        <li 
                            
                            key={key} 
                            className ="row"
                            id = {window.location.pathname == val.link ? "active" : ""}
                            onClick = { () => {
                                window.location.pathname = val.link ;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}
                                <span class="badge badge-danger">2</span>
                            </div>
                            
                        </li>
                    );
                })}
                {SidebarData_Comment_Teacher.map((val,key) => {
                    return (
                        <li 
                            
                            key={key} 
                            className ="row"
                            id = {window.location.pathname == val.link ? "active" : ""}
                            onClick = { () => {
                                window.location.pathname = val.link ;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                            {/* <span class="badge badge-danger">1</span> */}
                        </li>
                    );
                })}
            </ul>
            


            <hr class="solid"></hr>
            
             <ul className="SidebarList">
                {SidebarLogout_Teacher.map((val,key) => {
                    return (
                        <li 
                            key={key} 
                            className ="row"
                            id = {window.location.pathname == val.link ? "active" : ""}
                            onClick = { () => {
                                window.location.pathname = val.link ;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul> 
            
        </div>
        
    );
}

export default Sidebar_Teacher ;
