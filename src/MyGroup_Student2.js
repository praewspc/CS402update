import React from 'react';
import './MyGroup.css' ;
import {Row } from 'react-bootstrap';
import Sidebar_Student2 from './Student2/Sidebar_Student2';
import { BlockMyGroup2 } from './Student2/BlockMyGroup2';

function MyGroup_Student2() {
    return (
        <Row>
            <Sidebar_Student2 />
            <BlockMyGroup2 />
        </Row>
    );
  }
  
  export default MyGroup_Student2;