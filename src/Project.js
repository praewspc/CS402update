import React from 'react';
import './Project.css';
import {Row , Col} from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import {Blockproject} from "./Components/Blockproject";

function Project(){
    return (
        <Row>
            <Sidebar />
            <Blockproject />
           
        </Row>
    );
}

export default Project ;