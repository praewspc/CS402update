import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidebar_Student2 from "../Student2/Sidebar_Student2";
// import {BlockNoti_Student2} from "./Student2/BlockNoti_Student2";
import '../Notification.css';
export const AcceptGroup = () => {
    return(
        <Row className="content">
            <Col> <Sidebar_Student2 /> </Col>
            <Col>
                <div className="rightblocknoti">
                    <div className="blockwhitenoti">
                        <h1 className="TopnameNoti">Notification</h1>

                        <hr className="hr-noti"></hr>

                        <div className="list-group-noti-stu">
                            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">

                                <div class=" w-100 justify-content-between">
                                    {/* <h5 class="mb-1">Nutchakorn Ngamsaowaros</h5> */}
                                    <h5 class="mb-1"> You accept request to join a group to be a member.</h5>
                                    {/* <small>Now</small> */}
                                </div>

                                <a href="/mygroup2"
                                    class="btn btn-primary"
                                    role="button"
                                    aria-pressed="true">Go to group
                                </a>
                                {/* <Button 
                                        className="btn-accept"
                                        color="primary">Go to group</Button>{' '} */}
                                {/* <Button 
                                        className="btn-cancel"
                                        color="primary">Cancel</Button>{' '} */}

                            </a>
                        </div>

                    </div>
                </div>
            
            </Col>
        </Row>

    )
}