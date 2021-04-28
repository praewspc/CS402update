import React from 'react' 
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddBoxIcon from '@material-ui/icons/AddBox';
import WorkIcon from '@material-ui/icons/Work';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';


export const SidebarData_Teacher = [
    {
        title : "Dashboard" ,
        icon : <DashboardIcon /> ,
        link : "/home_t"
    },
    {
        title : "Create Group" ,
        icon : <AddBoxIcon /> ,
        link : "/create_t"
    },
    {
        title : "Group" ,
        icon : <WorkIcon /> ,
        link : "/group_t"
    },
    {
        title : "My Group" ,
        icon : <PlaylistAddCheckIcon /> ,
        link : "/group_t"
    },
    {
        title : "Calendar" ,
        icon : <EventIcon /> ,
        link : "/calendar_t"
    },
    {
        title : "Setting" ,
        icon : <SettingsIcon /> ,
        link : "/setting_t"
    },
];
