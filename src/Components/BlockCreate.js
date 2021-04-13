import React, { useState , useContext} from 'react';
import {Link , useHistory} from 'react-router-dom';
import {GlobalContext} from '../Context/GlobalState' ;
import { Row, Col } from 'react-bootstrap';
import { Form ,FormGroup } from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        }
    },
    button: {
        margin: theme.spacing(1),
        marginLeft: "70px",
        marginTop: "50px"
    },
    button2: {
        margin: theme.spacing(1),
        
        marginTop: "50px"
    }

}))

function BlockCreate() {

    const classes = useStyles();
    
    const [inputNameGroup, setInputGroupName] = useState([
        { groupname: ''},
    ]);
    const [inputFields, setInputFields] = useState([
        { firstName: '', lastName: '' },
    ]);
    const [inputFields2, setInputFields2] = useState([
        { firstName: '', lastName: '' },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputNameGroup)
        console.log("InputFields", inputFields)
        console.log("InputFields", inputFields2)
    };

    //Group Name
    const handleChangeInput0 = (index0, event) => {
        const values0 = [...inputNameGroup];
        values0[index0][event.target.name] = event.target.value;
        setInputGroupName(values0);
    }

    
    // Member
    const handleChangeInput = (index, event) => {
        const values = [...inputFields];
        values[index][event.target.name] = event.target.value;
        setInputFields(values);
    }

    const handleRemoveFields = (index) => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { firstName: '', lastName: '' }])
    }

    //Advisor
    const handleChangeInput2 = (index2, event) => {
        const values2 = [...inputFields2];
        values2[index2][event.target.name] = event.target.value;
        setInputFields2(values2);
    }

    const handleRemoveFields2 = (index2) => {
        const values2 = [...inputFields2];
        values2.splice(index2, 1);
        setInputFields2(values2);
    }

    const handleAddFields2 = () => {
        setInputFields2([...inputFields2, { firstName: '', lastName: '' }])
    }

    
    
    return (
        <div className="rightblockcreate">

            {/* <div className="blockwhitecreate"> */}
            <h1 className="Topname">Create Group</h1>

            <Container>
                <h4 className="GroupName">Group Name</h4>
                <form className={classes.root} onSubmit={handleSubmit}>
                    {inputNameGroup.map((inputNameGroup, index0) => (
                        <div className="fieldmember"  key={index0}>
                            <TextField
                            name="groupname"
                            label="Group name"
                            variant="outlined"
                            value={inputNameGroup.groupname}
                            onChange={event => handleChangeInput0(index0, event)}
                            />
                        </div>
                    ))}
                </form>
            </Container>  
                
            <Container>
                <h4 className="Add-Member">Member</h4>

                <form className={classes.root} onSubmit={handleSubmit}>
                    {inputFields.map((inputField, index) => (
                        <div className="fieldmember" key={index}>
                            <TextField
                                name="firstName"
                                label="First Name"
                                variant="outlined"
                                value={inputField.firstName}
                                onChange={event => handleChangeInput(index, event)}
                            />
                            <TextField
                                name="lastName"
                                label="Last Name"
                                variant="outlined"
                                value={inputField.lastName}
                                onChange={event => handleChangeInput(index, event)}
                            />
                            <IconButton
                                onClick={() => handleRemoveFields(index)}>
                                <RemoveIcon />
                            </IconButton>

                            <IconButton
                                onClick={() => handleAddFields()}>
                                <AddIcon />
                            </IconButton>
                        </div>
                    ))}



                </form>
            </Container>

            <Container>
                <h4 className="Add-Advisor">Advistor</h4>

                <form className={classes.root} onSubmit={handleSubmit}>
                    {inputFields2.map((inputField2, index2) => (
                        <div className="fieldmember" key={index2}>
                            <TextField
                                name="firstName"
                                label="First Name"
                                variant="outlined"
                                value2={inputField2.firstName2}
                                onChange={event => handleChangeInput2(index2, event)}
                            />
                            <TextField
                                name="lastName"
                                label="Last Name"
                                variant="outlined"
                                value2={inputField2.lastName2}
                                onChange={event => handleChangeInput2(index2, event)}
                            />
                            <IconButton
                                onClick={() => handleRemoveFields2(index2)}>
                                <RemoveIcon />
                            </IconButton>
                            
                            <IconButton
                                onClick={() => handleAddFields2()}>
                                <AddIcon />
                            </IconButton>
                        </div>
                    ))
                }

                </form>

                
                
                   
            </Container>
                <Button id="btn-create"
                    className={classes.button}
                    variant="outlined"
                    color="primary"
                    type="submit"
                    endIcon={<Icon>add</Icon>}
                    onClick={handleSubmit}
                > Create
                </Button>
                   
                <Button id="btn-cancel"
                    className={classes.button2}
                    variant="outlined"
                    color="primary"
                    type="submit"
                    endIcon={<Icon>close</Icon>}
                    onClick={handleSubmit}
                > 
                <Link to="/project">Cancel</Link>
                </Button>
        </div>
    );
}

export default BlockCreate;