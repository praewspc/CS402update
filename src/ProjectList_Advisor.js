import React from 'react';
import './ProjectList_Advisor.css' ;
import {Row } from 'react-bootstrap';
import Sidebar_Advisor from "./Advisor/Sidebar_Advisor";
import {BlockProjectList_Advisor} from "./Advisor/BlockProjectList_Advisor";

function ProjectList_Advisor() {
    return (
        <Row>
            <Sidebar_Advisor />
            <BlockProjectList_Advisor />
        </Row>
    );
  }
  
export default ProjectList_Advisor;