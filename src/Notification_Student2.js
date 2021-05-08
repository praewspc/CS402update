import React from 'react';
import './Notification_Student2.css' ;
import {Row } from 'react-bootstrap';
import Sidebar_Student2 from "./Student2/Sidebar_Student2";
import {BlockNoti_Student2} from "./Student2/BlockNoti_Student2";

function Notification_Student2() {
    return (
        <Row>
            <Sidebar_Student2 />
            <BlockNoti_Student2 />
        </Row>
    );
  }
  
  export default Notification_Student2;