import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

function BlockCreate() {
    return (
        <div className="rightblock">

            <div className="blockwhite">
                <p className="Topname">Create Group</p>

                <hr class="solid"></hr>
                <Form className="formcreate">
                    <Form.Group as={Row} controlId="id-product">
                        <Form.Label column sm={3}>
                            Group Name
                            </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Group Name" />
                            <p>The group name must contain a maximum of 50 characters</p>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="color-product">
                        <Form.Label column sm={3}>
                            Member
                            </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Search Member" />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} controlId="amount-product">
                        <Form.Label column sm={3}>
                            Advisor
                            </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder="Search Advisor" />
                        </Col>
                    </Form.Group>

                    

                    
                </Form>

                <div classname="sus" >
                    <Button variant="primary">Primary</Button>{' '}

                </div>
                
                
                
                
            </div>
        </div>
    )
}

export default BlockCreate;