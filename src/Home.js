import React from 'react';

import { Row, Col } from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import BlockHome from "./Components/BlockHome";
import './Homev2.css'

function Home() {
    return (
        <Row className="content">
            <Sidebar/>
            {/* <BlockHome/> */}
        </Row>
    );
}

export default Home;