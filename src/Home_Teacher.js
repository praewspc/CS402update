import React from 'react';
import './Home.css';
import { Row, Col } from 'react-bootstrap';
import Sidebar_Teacher from "./Teacher/Sidebar_Teacher";
import {BlockHome_Teacher} from './Teacher/BlockHome_Teacher';

function Home_Teacher() {
    return (
        <Row className="content">
           <Col> <Sidebar_Teacher /> </Col>
           <Col> <BlockHome_Teacher /></Col>
        </Row>
    );
}

export default Home_Teacher;