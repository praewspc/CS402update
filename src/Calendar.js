import React from 'react';
import './Calendar.css' ;
import {Row} from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import {BlockCalendar} from "./Components/BlockCalendar";

function Calendar() {
    return (
        <Row>
            <Sidebar />
            <BlockCalendar />
        </Row>
    );
  }
  
  export default Calendar;