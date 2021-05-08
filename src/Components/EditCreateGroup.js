import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import { useHistory } from 'react-router-dom';
import Sidebar from "./Sidebar";
import '../CreateGroup.css';
import TextField from '@material-ui/core/TextField';
import { Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import {
    Form,
    Button
} from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }
    },
    button: {
        margin: theme.spacing(1),
        marginLeft: "48px",
        marginTop: "50px"
    },
    button2: {
        margin: theme.spacing(1),

        marginTop: "50px"
    }

}))

export const EditCreateGroup = (props) => {
    const classes = useStyles();
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    });
    const { users, editUser } = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    }, [currentUserId, users])

    const onSubmit = () => {
        editUser(selectedUser)
        history.push('/group');
    }

    const onChange = (e) => {
        setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
    }
    return (
        <Row className="content">
            <Col> <Sidebar /> </Col>

            <Col>
            <div className="rightblockcreate">

            <div className="blockwhitecreate">
                <h1 className="Topname">Edit</h1>
                
                <Form onSubmit={onSubmit}>

                    <h4 className="GroupName">Group Name</h4>
                        <div className="fieldmember" >
                            <TextField
                                type="text"
                                name="name"
                                label="Enter Name"
                                variant="outlined"
                                value={selectedUser.name}
                                onChange={onChange}

                            />
                        </div>
                        {/* <FormGroup>
                            <Label>Name</Label>
                            <Input type="text"
                                name="name"
                                value={selectedUser.name}
                                onChange={onChange}
                                placeholder="Enter Name" ></Input>
                        </FormGroup> */}

                        <Button
                            // id="btn-create"
                            className={classes.button}
                            // variant="outlined"
                            color="primary"
                            type="submit"
                            endIcon={<Icon>add</Icon>}
                        >Edit Name
                        </Button>

                        <Button 
                            // id="btn-cancel"
                            className={classes.button2}
                            variant="outlined"
                            color="danger"
                            type="submit"
                            endIcon={<Icon>close</Icon>}
                            // onClick={handleSubmit}
                        >Cancel
                            {/* <Link to="/group">Cancel</Link> */}
                        </Button>

                    {/* <Button className="btn btn-primary" type="submit">Edit Name</Button>
                    <Link to="/group" className="btn btn-danger ml-2">Cancel</Link> */}
                </Form>
                </div>
                </div>
            </Col>
        </Row>
    )
}
