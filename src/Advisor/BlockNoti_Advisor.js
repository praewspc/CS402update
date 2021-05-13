import React from 'react';
import { Button } from 'reactstrap'
import {Link } from 'react-router-dom';

export const BlockNoti_Advisor = () => {

    return (
        <div className="rightblocknoti">
            <div className="blockwhitenoti">
                <h1 className="TopnameNoti">Notification</h1>

                <hr className="hr-noti"></hr>

                <h5 className="topic_request">Request to join a group to be a member.</h5>
                    
                        <div className="list-group-noti">
                            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class=" w-100 justify-content-between">
                                    <h5 class="mb-1">Phurit Apichonlati</h5>
                                    <p class="mb-1">Sent request to you</p>
                                    <small>Now</small>
                                </div>
                                {/* <Button 
                                    className="btn-accept"
                                    color="primary"
                                >
                                    <Link to="/accept">Accept</Link>
                                </Button> */}
                                <Link
                                    className="btn btn-primary"
                                    to={`/accept_a`}>accept
                                    
                                </Link>
                                <Button 
                                    className="btn-decline"
                                    color="primary"
                                    >Decline
                                </Button>{' '}
                            
                            </a>
                        </div>
                        

            </div>
        </div>
    )
}
