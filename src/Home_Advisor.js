import React from 'react';
import './Home.css';
import { Row, Col } from 'react-bootstrap';
import Sidebar_Advisor from "./Advisor/Sidebar_Advisor";
import {BlockHome_Advisor} from "./Advisor/BlockHome_Advisor";
import './Homev2.css'

function Home_Advisor() {
    return (
        <Row className="content">
           <Col> <Sidebar_Advisor /> </Col>
           <Col> <BlockHome_Advisor /></Col>
        </Row>
    );
}

export default Home_Advisor;