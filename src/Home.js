import React from 'react';

import {Row , Col} from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import BlockHome from "./Components/BlockHome";

function Home() {
    return (
        <Row>
            <Sidebar />
            <BlockHome />
        </Row>
    );
  }
  
  export default Home;