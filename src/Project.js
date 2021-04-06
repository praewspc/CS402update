import React from 'react';
import {Row , Col} from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import ProjectList from "./Components/ProjectList";

function Project(){
    return (
        <Row>
            <Sidebar />
            <ProjectList />
        </Row>
    );
}

export default Project ;