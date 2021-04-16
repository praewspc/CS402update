import React from 'react';
import './Task.css' ;
import {Row , Col} from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import BlockTask from "./Components/BlockTask";

function Task() {
    return (
        <Row>
            <Sidebar />
            <BlockTask />
        </Row>
    );
  }
  
  export default Task;