import React from 'react';
import { Button } from 'reactstrap'

export const BlockNoti_Student2 = () => {

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
                            <Button 
                            className="btn-accept"
                            color="primary">Accept</Button>{' '}
                            <Button 
                            className="btn-cancel"
                            color="primary">Cancel</Button>{' '}
                           
                        </a>
                        </div>

            </div>
        </div>
    )
}
