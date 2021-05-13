import React from 'react' 
import DashboardIcon from '@material-ui/icons/Dashboard';
import WorkIcon from '@material-ui/icons/Work';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import EventIcon from '@material-ui/icons/Event';
import SettingsIcon from '@material-ui/icons/Settings';


export const SidebarData_Advisor = [
    {
        title : "Dashboard" ,
        icon : <i class="fa fa-home fa-1x" aria-hidden="true"></i> ,
        link : "/home_a"
    },
    {
        title : "Create Schedule" ,
        icon : <i class="fa fa-plus-square fa-1x" aria-hidden="true"></i> ,
        link : "/create_t"
    },
    {
        title : "Group" ,
        icon : <i class="fa fa-users fa-1x" aria-hidden="true"></i> ,
        link : "/group_a"
    },
    {
        title : "My Group" ,
        icon : <i class="fa fa-briefcase fa-1x" aria-hidden="true"></i> ,
        link : "/mygroup_a"
    },
    {
        title : "Calendar" ,
        icon : <i class="fa fa-calendar fa-1x" aria-hidden="true"></i>,
        link : "/calendar_a"
    },
    {
        title : "Setting" ,
        icon : <i class="fa fa-cog fa-1x" aria-hidden="true"></i> ,
        link : "/setting_a"
    },
];
