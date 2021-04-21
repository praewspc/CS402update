import React from 'react';
import './CreateGroup.css';
import {Row , Col} from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import {BlockCreate} from "./Components/BlockCreate";

function CreateGroup() {
    return (
        <Row>
            <Sidebar />
            <BlockCreate />
        </Row>
    );
  }
  
  export default CreateGroup;