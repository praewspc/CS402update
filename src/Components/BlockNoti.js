import React , {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState' ;
import { Container } from 'react-bootstrap';
import {ListGroup , ListGroupItem  } from 'reactstrap'

function BlockNoti (){

    const {groups } = useContext(GlobalContext);
    return (
        <div className="rightblocknoti">
            <div className="blockwhitenoti">
            <h1 className="Topname">Notification</h1> 

            {/* <div >
            <span class="c">Phurit Apichonlati</span>
            </div> */}
            
            {/* <ListGroup className="mt-4">
            {groups.map(group => (
                <ListGroupItem className="c-flex">
                    <strong className="groupnamelist">{group.groupname}</strong>
                    <div className="btn-list ml-auto">
                    
                    
                </div>
            </ListGroupItem>
            ))}
            
        </ListGroup> */}
            </div>
        </div>
    );
}

export default BlockNoti;