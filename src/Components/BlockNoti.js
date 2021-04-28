import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button } from 'reactstrap'

export const BlockNoti = () => {

    return (
        <div className="rightblocknoti">
            <div className="blockwhitenoti">
                <h1 className="TopnameNoti">Notification</h1>

                <hr className="hr-noti"></hr>

                <div className="list-group-noti-stu">
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">

                        <div class=" w-100 justify-content-between">
                            <h5 class="mb-1">Nutchakorn Ngamsaowaros</h5>
                            <p class="mb-1">Accept request</p>
                            <small>Now</small>
                        </div>

                        <a href="/mygroup"
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

                <div className="list-group-noti-stu">
                    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                        <div class=" w-100 justify-content-between">
                            <h5 class="mb-1">Supitcha Ratanatrimas</h5>
                            <p class="mb-1">Accept request</p>
                            <small>2 mintues ago</small>
                        </div>
                        <a href="/mygroup"
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
    )
}
