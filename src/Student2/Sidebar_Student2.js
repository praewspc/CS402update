import React from 'react'
import '../App.css';
import { SidebarData_Student2 } from './SidebarData_Student2';
import { SidebarData_Message_Student2 } from './SidebarData_Message_Student2';
import { SidebarData_Noti_Student2 } from './SidebarData_Noti_Student2';
import { SidebarData_Comment_Student2 } from './SidebarData_Comment_Student2';
import { SidebarLogout_Student2 } from './SidebarLogout_Student2';

function Sidebar_Student2() {
    return (
        <div className="Sidebar">
            <div className="Projectname1"> ADMINISTRATIVE </div>
            <div className="Projectname2"> SPECIAL PROJECT </div>

            <hr class="solid"></hr>

            <ul className="SidebarList">
                {SidebarData_Student2.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                        </li>
                    );
                })}
            </ul>

            <hr class="solid"></hr>

            <ul className="SidebarList">
                {SidebarData_Message_Student2.map((val, key) => {
                    return (
                        <li

                            key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                            {/* <span class="badge badge-danger">3</span> */}
                        </li>
                    );
                })}
                {SidebarData_Noti_Student2.map((val, key) => {
                    return (
                        <li

                            key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}
                                <span class="badge badge-danger">1</span>
                            </div>

                        </li>
                    );
                })}
                {SidebarData_Comment_Student2.map((val, key) => {
                    return (
                        <li

                            key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link;
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
                {SidebarLogout_Student2.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link;
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

export default Sidebar_Student2;
