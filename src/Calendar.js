import React from 'react';
import './Calendar.css' ;
import {Row , Col} from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import BlockCalendar from "./Components/BlockCalendar";

function Task() {
    return (
        <Row>
            <Sidebar />
            <BlockCalendar />
        </Row>
    );
  }
  
  export default Task;