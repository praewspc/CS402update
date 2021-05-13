import React from 'react';
import './Project.css';
import {Row } from 'react-bootstrap';
import Sidebar_Student2 from "./Student2/Sidebar_Student2";
import {BlockGroup2} from "./Student2/BlockGroup2";

function Group2(){
    return (
        <Row>
            <Sidebar_Student2 />
            <BlockGroup2 />
           
        </Row>
    );
}

export default Group2 ;