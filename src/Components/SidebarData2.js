import React from 'react' 
import EmailIcon from '@material-ui/icons/Email';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CommentIcon from '@material-ui/icons/Comment';


export const SidebarData2 = [
    {
        title : "Message" ,
        icon : <EmailIcon /> ,
        link : "/message"
    },
    {
        title : "Notification" ,
        icon : <NotificationsIcon /> ,
        link : "/notification"
    },
    {
        title : "Comment" ,
        icon : <CommentIcon /> ,
        link : "/comment"
    },
];
