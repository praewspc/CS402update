import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Sidebar from "./Sidebar";
import '../Project_Information.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import {
    Form,
    // Button
} from 'reactstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    //   width: '100px',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(1),
    },
    button123: {
        margin: theme.spacing(1),
        marginLeft: "48px",
        marginTop: "40px" ,
        marginBottom : "20px" ,
    },
    button456: {
        margin: theme.spacing(1),
        marginBottom : "20px" ,
        marginTop: "40px" ,
    },
  }));


export const Project_Information = () => {
    const classes = useStyles();
    return (
        <Row className="content">
            <Col> <Sidebar /> </Col>

            <Col>
                <div className="rightblock_InformProject">
                    <div className="blockwhite_InformProject">
                        <h1 className="Topname_InformProject">Project Information</h1>

                        <hr className="hr-InformProject"></hr>

                        <Form>

                            <h4 className="GroupName">ชื่อโครงงานภาษาไทย</h4>
                            <div className="fieldmember" >
                                <TextField
                                    id="outlined-full-width"
                                    label="ชื่อโครงงานภาษาไทย"
                                    style={{ marginTop: 10 , marginLeft: 10 , width: 800}}
                                    placeholder="Placeholder"
                                    variant="outlined"
                                />
                            </div>

                            <h4 className="GroupName">ชื่อโครงงานภาษาอังกฤษ</h4>
                            <div className="fieldmember" >
                                <TextField
                                    id="outlined-full-width"
                                    label="ชื่อโครงงานภาษาอังกฤษ"
                                    style={{ marginTop: 10 , marginLeft: 10 , width: 800}}
                                    placeholder="Placeholder"
                                    variant="outlined"
                                />
                            </div>

                            <h4 className="GroupName">นักศึกษาคนที่ 1</h4>
                            <div className="fieldmember" >

                                <TextField
                                    id="outlined-full-width"
                                    label="ชื่อ (ภาษาไทย)"
                                    style={{ marginTop: 10 , marginLeft: 10 , width: 250}}
                                    placeholder="Placeholder"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-full-width"
                                    label="นามสกุล (ภาษาไทย)"
                                    style={{ marginTop: 10 , marginLeft: 15 , width: 250}}
                                    placeholder="Placeholder"
                                    variant="outlined"
                                />
                            </div>

                            <h5 className="GroupName">เลขทะเบียนนักศึกษา</h5>
                            <div className="fieldmember" >
                                <TextField
                                    id="outlined-full-width"
                                    label="เลขทะเบียนนักศึกษา"
                                    style={{ marginTop: 20 , marginLeft: 10 , width: 200}}
                                    placeholder="60096xxxxx"
                                    variant="outlined"
                                />

                                <TextField
                                    id="outlined-full-width"
                                    label="ภาคปกติ/ภาคพิเศษ"
                                    style={{ marginTop: 20 , marginLeft: 20, width: 200}}
                                    placeholder="ภาคปกติ"
                                    variant="outlined"
                                />
                            </div>
                                
                            

                            <h4 className="GroupName">นักศึกษาคนที่ 2</h4>
                            <div className="fieldmember" >

                                <TextField
                                    id="outlined-full-width"
                                    label="ชื่อ (ภาษาไทย)"
                                    style={{ marginTop: 10 , marginLeft: 10 , width: 250}}
                                    placeholder="Placeholder"
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-full-width"
                                    label="นามสกุล (ภาษาไทย)"
                                    style={{ marginTop: 10 , marginLeft: 15 , width: 250}}
                                    placeholder="Placeholder"
                                    variant="outlined"
                                />
                            </div>

                            <h5 className="GroupName">เลขทะเบียนนักศึกษา</h5>
                            <div className="fieldmember" >
                                <TextField
                                    id="outlined-full-width"
                                    label="เลขทะเบียนนักศึกษา"
                                    style={{ marginTop: 20 , marginLeft: 10 , width: 200}}
                                    placeholder="60096xxxxx"
                                    variant="outlined"
                                />

                                <TextField
                                    id="outlined-full-width"
                                    label="ภาคปกติ/ภาคพิเศษ"
                                    style={{ marginTop: 20 , marginLeft: 20, width: 200}}
                                    placeholder="ภาคปกติ"
                                    variant="outlined"
                                />
                            </div>

                            

                            <h4 className="GroupName">อาจารย์ที่ปรึกษา</h4>
                            <div className="fieldmember" >
                                <TextField
                                    id="outlined-full-width"
                                    label="อาจารย์ที่ปรึกษา"
                                    style={{ marginTop: 10 , marginLeft: 10 , width: 400}}
                                    placeholder="Placeholder"
                                    variant="outlined"
                                />
                            </div>    

                            <Button
                            id="btn-create"
                            className={classes.button123}
                            variant="outlined"
                            color="primary"
                            type="submit"
                            endIcon={<Icon>add</Icon>}
                            >Submit
                            </Button>

                            <Button id="btn-cancel"
                                className={classes.button456}
                                variant="outlined"
                                color="primary"
                                type="submit"
                                endIcon={<Icon>close</Icon>}
                                // onClick={handleSubmit}
                            >
                                <Link to="/home">Cancel</Link>
                            </Button>
                        </Form>
                        


                    </div>
                    </div>
            </Col>

        </Row>

    )
}