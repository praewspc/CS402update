import React from 'react';

import { Row, Col } from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import BlockHome from "./Components/BlockHome";
import './Homev2.css'
import './Home.css'

function Home() {
    return (
        <Row className="content">
           <Col> <Sidebar /> </Col>
           <Col> <BlockHome /></Col>
        </Row>
    );
}

export default Home;