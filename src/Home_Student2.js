import React from 'react';
import './Home.css';
import { Row, Col } from 'react-bootstrap';
import Sidebar_Student2 from "./Student2/Sidebar_Student2";
import {BlockHome_Student2} from './Student2/BlockHome_Student2';

function Home_Student2() {
    return (
        <Row className="content">
           <Col> <Sidebar_Student2 /> </Col>
           <Col> <BlockHome_Student2 /></Col>
        </Row>
    );
}

export default Home_Student2;