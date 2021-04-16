import React from 'react';
import './Setting.css'
import {Row , Col} from 'react-bootstrap';
import Sidebar from "./Components/Sidebar";
import BlockSetting from "./Components/BlockSetting";

function Setting() {
    return (
        <Row>
            <Sidebar />
            <BlockSetting />
        </Row>
    );
  }
  
  export default Setting;