import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

function EditGroupName() {
    return (
        <div className="rightblockedit">
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
        </div>
    );
}
export default EditGroupName;