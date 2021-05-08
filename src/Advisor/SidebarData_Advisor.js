import React from 'react' 
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';


export const SidebarData_Advisor = [
    {
        title : "Dashboard" ,
        icon : <DashboardIcon /> ,
        link : "/home_a"
    },
    // {
    //     title : "Create Group" ,
    //     icon : <AddBoxIcon /> ,
    //     link : "/create_t"
    // },
    {
        title : "Group" ,
        icon : <WorkIcon /> ,
        link : "/group_a"
    },
    {
        title : "My Group" ,
        icon : <PlaylistAddCheckIcon /> ,
        link : "/mygroup_a"
    },
    {
        title : "Calendar" ,
        icon : <EventIcon /> ,
        link : "/calendar_a"
    },
    {
        title : "Setting" ,
        icon : <SettingsIcon /> ,
        link : "/setting_a"
    },
];
