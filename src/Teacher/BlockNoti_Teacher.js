import React , {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState' ;
import { Container } from 'react-bootstrap';
import {ListGroup , ListGroupItem , Button  } from 'reactstrap'
function BlockNoti_Teacher (){

    // const {groups } = useContext(GlobalContext);
    return (
        <div className="rightblocknoti">
            <div className="blockwhitenoti">
                <h1 className="Topname">Notification</h1> 

                    <h5 className="topic_request">Request to join a group to be a advistor.</h5>
                    
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

                        <div className="list-group-noti">
                        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class=" w-100 justify-content-between">
                                <h5 class="mb-1">Chotika Photipunya</h5>
                                <p class="mb-1">Sent request to you</p>
                                <small>4 days ago</small>
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
    );
}

export default BlockNoti_Teacher;