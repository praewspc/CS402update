import React from 'react';
import './CreateGroup.css';
import {Row} from 'react-bootstrap';
import Sidebar_Student2 from "./Student2/Sidebar_Student2";
import {BlockCreate_Student2} from "./Student2/BlockCreate_Student2";

function CreateGroup_Student2() {
    return (
        <Row>
            <Sidebar_Student2 />
            <BlockCreate_Student2 />
        </Row>
    );
  }
  
export default CreateGroup_Student2;