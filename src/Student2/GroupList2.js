import React , {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState' ;
import {Link} from 'react-router-dom';
import {ListGroup , ListGroupItem , Button  } from 'reactstrap'
import {useState} from 'react';
import axios from 'axios';

export const GroupList2 = () => {

    const {users , removeUser} = useContext(GlobalContext);
    console.log(users) ;
   
    
    return (
        <ListGroup className="mt-4">
            {users.length > 0 ? (
                 <>
                {users.map(user => (
                    <ListGroupItem className="d-flex" key={user.id}>
                        <strong className="groupnamelist">
                            <Link
                                to="/mygroup2">
                                {user.groupname}
                            </Link>
                        </strong>
                        <div className="btn-list ml-auto">
                            <Link 
                                className="btn btn-warning mr-1" 
                                to={`/edit/${user.id}`}>Edit</Link>
                       
                        <Button
                        className="btn-delete"
                        onClick={() => removeUser(user.id)}
                        color="danger">Delete</Button>
                    </div>
                </ListGroupItem>
                ))}
                </>
            ) : (
                <h4 className="text-center">No Group</h4>
            )}
        </ListGroup>
    )
}