import React from 'react' 
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddBoxIcon from '@material-ui/icons/AddBox';
import WorkIcon from '@material-ui/icons/Work';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';


export const SidebarData = [
    {
        title : "Dashboard" ,
        icon : <DashboardIcon /> ,
        link : "/home"
    },
    {
        title : "Create Group" ,
        icon : <AddBoxIcon /> ,
        link : "/create"
    },
    {
        title : "Project" ,
        icon : <WorkIcon /> ,
        link : "/project"
    },
    {
        title : "My Task" ,
        icon : <PlaylistAddCheckIcon /> ,
        link : "/task"
    },
    {
        title : "Calendar" ,
        icon : <EventIcon /> ,
        link : "/calendar"
    },
    {
        title : "Setting" ,
        icon : <SettingsIcon /> ,
        link : "/setting"
    },
];
