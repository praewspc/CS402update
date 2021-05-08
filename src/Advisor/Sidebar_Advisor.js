import React from 'react'
import '../App.css';
import {SidebarData_Advisor} from './SidebarData_Advisor';
import {SidebarData_Message_Advisor} from './SidebarData_Message_Advisor' ;
import {SidebarData_Noti_Advisor} from './SidebarData_Noti_Advisor' ;
import {SidebarData_Comment_Advisor} from './SidebarData_Comment_Advisor' ;
import {SidebarLogout_Advisor} from './SidebarLogout_Advisor';

function Sidebar_Advisor() {
    return (
        <div className="Sidebar">
            <div className="Projectname1"> ADMINISTRATIVE </div>
            <div className="Projectname2"> SPECIAL PROJECT </div>

            <hr class="solid"></hr>

            <ul className="SidebarList">
                {SidebarData_Advisor.map((val,key) => {
                    return (
                        <li 
                            key={key} 
                            className ="row"
                            id = {window.location.pathname === val.link ? "active" : ""}
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
                {SidebarData_Message_Advisor.map((val,key) => {
                    return (
                        <li 
                            
                            key={key} 
                            className ="row"
                            id = {window.location.pathname === val.link ? "active" : ""}
                            onClick = { () => {
                                window.location.pathname = val.link ;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                            {/* <span class="badge badge-danger">1</span> */}
                        </li>
                    );
                })}
                {SidebarData_Noti_Advisor.map((val,key) => {
                    return (
                        <li 
                            
                            key={key} 
                            className ="row"
                            id = {window.location.pathname === val.link ? "active" : ""}
                            onClick = { () => {
                                window.location.pathname = val.link ;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}
                                <span class="badge badge-danger">1</span>
                            </div>
                            
                        </li>
                    );
                })}
                {SidebarData_Comment_Advisor.map((val,key) => {
                    return (
                        <li 
                            
                            key={key} 
                            className ="row"
                            id = {window.location.pathname === val.link ? "active" : ""}
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
                {SidebarLogout_Advisor.map((val,key) => {
                    return (
                        <li 
                            key={key} 
                            className ="row"
                            id = {window.location.pathname === val.link ? "active" : ""}
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

export default Sidebar_Advisor ;
