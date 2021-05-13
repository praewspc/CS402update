import React from 'react';
import './Project.css';
import {Row } from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import {BlockGroup} from "./Components/BlockGroup";

function Group(){
    return (
        <Row>
            <Sidebar />
            <BlockGroup />
           
        </Row>
    );
}

export default Group ;