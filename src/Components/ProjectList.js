import React from 'react';
import {Link} from 'react-router-dom';
import {ListGroup , ListGroupItem , Button  } from 'reactstrap'
function ProjectList () {
    return (
       

            <ListGroup>
                <ListGroupItem className="d-flex">
                    
                    <div className="ml">
                        <strong className="groupnamelist">Pooh</strong>
                        <Link className="btn btn-warning mr-1" to="/create">Edit</Link>
                        <Button className="btn-danger"color="danger">Delete</Button>
                    </div>
                </ListGroupItem>
                
            </ListGroup>
            
       
    )
}

export default ProjectList ;