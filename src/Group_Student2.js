import React from 'react';
import './Task.css' ;
import {Row } from 'react-bootstrap';
import Sidebar_Student2 from './Student2/Sidebar_Student2';
import { BlockGroup } from './Student2/BlockGroup';

function Group_Student2() {
    return (
        <Row>
            <Sidebar_Student2 />
            <BlockGroup />
        </Row>
    );
  }
  
  export default Group_Student2;