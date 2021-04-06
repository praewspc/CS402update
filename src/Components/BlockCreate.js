import React from 'react';

import {Row , Col} from 'react-bootstrap';
import {Form , Button} from 'react-bootstrap' ;

function BlockCreate(){
    return (
        <div className="rightblock">

            <div className="blockwhite">
            <p className="Topname">Create Group</p>

            <Form className="blockcreate">
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                
                <button type="button" class="btn btn-outline-danger">Cancel</button>

                <button type="button" class="btn btn-outline-secondary">Create</button>
            </Form>
                    
            </div>
        </div>
    )
}

export default BlockCreate;