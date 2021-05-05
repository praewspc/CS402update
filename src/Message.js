import React from 'react';
import './Message.css' ;
import {Row } from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import BlockMessage from "./Components/BlockMessage";

function Home() {
    return (
        <Row>
            <Sidebar />
            <BlockMessage />
        </Row>
    );
  }
  
  export default Home;