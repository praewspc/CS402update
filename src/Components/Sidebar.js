import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';
import { SidebarData2 } from './SidebarData2';
import { SidebarData_Noti } from './SidebarData_Noti';
import { SidebarData_Comment } from './SidebarData_Comment';
import { SidebarLogout } from './SidebarLogout';

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Projectname1"> ADMINISTRATIVE </div>
            <div className="Projectname2"> SPECIAL PROJECT </div>

            <hr class="solid"></hr>

            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            id={window.location.pathname == val.link ? "active" : ""}
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
                {SidebarData2.map((val, key) => {
                    return (
                        <li

                            key={key}
                            className="row"
                            id={window.location.pathname == val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                            {/* <span class="badge badge-danger">3</span> */}
                        </li>
                    );
                })}
                {SidebarData_Noti.map((val, key) => {
                    return (
                        <li

                            key={key}
                            className="row"
                            id={window.location.pathname == val.link ? "active" : ""}
                            onClick={() => {
                                window.location.pathname = val.link;
                            }}
                        >
                            <div id="icon">{val.icon}</div> <div id="title">{val.title}
                                <span class="badge badge-danger">2</span>
                            </div>

                        </li>
                    );
                })}
                {SidebarData_Comment.map((val, key) => {
                    return (
                        <li

                            key={key}
                            className="row"
                            id={window.location.pathname == val.link ? "active" : ""}
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
                {SidebarLogout.map((val, key) => {
                    return (
                        <li
                            key={key}
                            className="row"
                            id={window.location.pathname == val.link ? "active" : ""}
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

export default Sidebar;
