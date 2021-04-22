import React from 'react';
import './Notification_Teacher.css' ;
import {Row , Col} from 'react-bootstrap';
import Sidebar_Teacher from "./Teacher/Sidebar_Teacher";
import BlockNoti_Teacher from "./Teacher/BlockNoti_Teacher";

function Notification_Teacher() {
    return (
        <Row>
            <Sidebar_Teacher />
            <BlockNoti_Teacher />
        </Row>
    );
  }
  
  export default Notification_Teacher;