import React from 'react';
import './MyGroup.css'
import {Row } from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import {BlockMyGroup} from "./Components/BlockMyGroup";

function MyGroup() {
    return (
        <Row>
            <Sidebar />
            <BlockMyGroup />
        </Row>
    );
  }
  
  export default MyGroup;