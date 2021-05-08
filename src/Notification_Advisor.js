import React from 'react';
import './Notification_Student2.css' ;
import {Row } from 'react-bootstrap';
import Sidebar_Advisor from "./Advisor/Sidebar_Advisor";
import {BlockNoti_Advisor} from "./Advisor/BlockNoti_Advisor";

function Notification_Advisor() {
    return (
        <Row>
            <Sidebar_Advisor />
            <BlockNoti_Advisor />
        </Row>
    );
  }
  
  export default Notification_Advisor;