import React from 'react';
import './Notification.css' ;
import {Row , Col} from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import {BlockNoti} from "./Components/BlockNoti";

function Notification() {
    return (
        <Row>
            <Sidebar />
            <BlockNoti />
        </Row>
    );
  }
  
  export default Notification;