import React , {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState' ;
import {Link} from 'react-router-dom';
import {ListGroup , ListGroupItem , Button  } from 'reactstrap'
function ProjectList () {

    const {groups , removeGroup} = useContext(GlobalContext);

    return (
        <ListGroup className="mt-4">
            {groups.map(group => (
                <ListGroupItem className="d-flex">
                    <strong className="groupnamelist">{group.groupname}</strong>
                    <div className="btn-list ml-auto">
                    
                    <Link className="btn btn-warning mr-1" 
                        to={`/edit/${group.id}`}>Edit</Link>
                    <Button
                    className="btn-danger"
                    color="danger"
                    onClick={() => removeGroup(group.id)}>Delete</Button>
                </div>
            </ListGroupItem>
            ))}
            
        </ListGroup>
            
       
    )
}

export default ProjectList ;