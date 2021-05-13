import React from 'react';
import './CreateSchedule_Advisor.css';
import {Row , Col} from 'react-bootstrap';
import Sidebar_Advisor from './Advisor/Sidebar_Advisor';
import { BlockCreateSchedule } from './Advisor/BlockCreateSchedule';

function CreateSchedule_Advisor() {
    return (
        <Row>
            <Col><Sidebar_Advisor /></Col>
            <Col><BlockCreateSchedule /></Col>
        </Row>
    );
  }
  
export default CreateSchedule_Advisor;