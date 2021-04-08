import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

function BlockComment() {
    return (
        <div className="rightblock">
            <div className="blockwhite">
                <p className="Topname">Comment</p>

                <Form.Group as={Row} controlId="detail-product">
                    <Form.Label column sm={3}>
                        ความคิดเห็น:
                            </Form.Label>
                    <Col sm={9}>
                        <Form.Control as="textarea" rows={3} placeholder="ความคิดเห็น" />
                    </Col>
                </Form.Group>
                <Form>

                </Form>
            </div>
        </div>
    )
}

export default BlockComment;