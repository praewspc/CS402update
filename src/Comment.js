import React from 'react';
import './Comment.css' ;
import {Row , Col} from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import BlockComment from "./Components/BlockComment";

function Comment() {
    return (
        <Row>
            <Sidebar />
            <BlockComment />
        </Row>
    );
  }
  
  export default Comment;