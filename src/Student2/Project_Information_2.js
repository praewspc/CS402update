import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Sidebar from "./Sidebar";
import "../Project_Information.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import react, { useEffect, useState } from "react";
import axios from "axios";
import {
  Form,
  // Button
} from "reactstrap";
import Sidebar_Student2 from "./Sidebar_Student2";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
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
  // button123: {
  //   margin: theme.spacing(1),
  //   marginLeft: "48px",
  //   marginTop: "40px",
  //   marginBottom: "20px",
  // },
  // button456: {
  //   margin: theme.spacing(1),
  //   marginBottom: "20px",
  //   marginTop: "40px",
  // },
}));



export const Project_Information_2 = () => {
  const classes = useStyles();

const [projnamethai, setprojnamethai] = useState("");
const [projnameeng, setprojnameeng] = useState("");
const [member1firstname, setmember1Firstname] = useState("");
const [member1lastname, setmember1Lastname] = useState("");
const [id1, setid1] = useState("");
const [semester1, setsemester1] = useState("");
const [member2firstname, setmember2Firstname] = useState("");
const [member2lastname, setmember2Lastname] = useState("");
const [id2, setid2] = useState("");
const [semester2, setsemester2] = useState("");
const [advisor, setadvisor] = useState("");


const [projectList, setprojectList] = useState([]);

const addProject = () => {
  axios
    .post("http://localhost:5000/projinfo/add", {
      projnamethai: projnamethai,
      projnameeng: projnameeng,
      member1firstname: member1firstname,
      member1lastname: member1lastname,
      id1: id1,
      semester1: semester1,
      member2firstname: member2firstname,
      member2lastname: member2lastname,
      id2: id2,
      semester2: semester2,
      advisor: advisor,
    })
    .then(() => {
      setprojectList([
        ...projectList,
        {
          projnamethai: projnamethai,
          projnameeng: projnameeng,
          member1firstname: member1firstname,
          member1lastname: member1lastname,
          id1: id1,
          semester1: semester1,
          member2firstname: member2firstname,
          member2lastname: member2lastname,
          id2: id2,
          semester2: semester2,
          advisor: advisor,
        },
      ]);
    });
};

  return (
    <Row className="content">
      <Col>
        {" "}
        <Sidebar_Student2 />{" "}
      </Col>

      <Col>
        <div className="rightblock_InformProject">
          <div className="blockwhite_InformProject">
            <h1 className="Topname_InformProject">Project Information</h1>

            <hr className="hr-InformProject"></hr>

            <Form>
              <h4 className="GroupName">ชื่อโครงงานภาษาไทย</h4>
              <div className="fieldmember">
                <TextField
                  id="outlined-full-width"
                  label="ชื่อโครงงานภาษาไทย"
                  style={{ marginTop: 10, marginLeft: 10, width: 800 }}
                  placeholder="Placeholder"
                  variant="outlined"
                  onChange={(event) => {
                    setprojnamethai(event.target.value);
                  }}
                />
              </div>

              <h4 className="GroupName">ชื่อโครงงานภาษาอังกฤษ</h4>
              <div className="fieldmember">
                <TextField
                  id="outlined-full-width"
                  label="ชื่อโครงงานภาษาอังกฤษ"
                  style={{ marginTop: 10, marginLeft: 10, width: 800 }}
                  placeholder="Placeholder"
                  variant="outlined"
                  onChange={(event) => {
                    setprojnameeng(event.target.value);
                  }}
                />
              </div>

              <h4 className="GroupName">นักศึกษาคนที่ 1</h4>
              <div className="fieldmember">
                <TextField
                  id="outlined-full-width"
                  label="ชื่อ (ภาษาไทย)"
                  style={{ marginTop: 10, marginLeft: 10, width: 250 }}
                  placeholder="Placeholder"
                  variant="outlined"
                  onChange={(event) => {
                    setmember1Firstname(event.target.value);
                  }}
                />
                <TextField
                  id="outlined-full-width"
                  label="นามสกุล (ภาษาไทย)"
                  style={{ marginTop: 10, marginLeft: 15, width: 250 }}
                  placeholder="Placeholder"
                  variant="outlined"
                  onChange={(event) => {
                    setmember1Lastname(event.target.value);
                  }}
                />
              </div>

              <h5 className="GroupName">เลขทะเบียนนักศึกษา</h5>
              <div className="fieldmember">
                <TextField
                  id="outlined-full-width"
                  label="เลขทะเบียนนักศึกษา"
                  style={{ marginTop: 20, marginLeft: 10, width: 200 }}
                  placeholder="60096xxxxx"
                  variant="outlined"
                  onChange={(event) => {
                    setid1(event.target.value);
                  }}
                />

                <TextField
                  id="outlined-full-width"
                  label="ภาคปกติ/ภาคพิเศษ"
                  style={{ marginTop: 20, marginLeft: 20, width: 200 }}
                  placeholder="ภาคปกติ"
                  variant="outlined"
                  onChange={(event) => {
                    setsemester1(event.target.value);
                  }}
                />
              </div>

              <h4 className="GroupName">นักศึกษาคนที่ 2</h4>
              <div className="fieldmember">
                <TextField
                  id="outlined-full-width"
                  label="ชื่อ (ภาษาไทย)"
                  style={{ marginTop: 10, marginLeft: 10, width: 250 }}
                  placeholder="Placeholder"
                  variant="outlined"
                  onChange={(event) => {
                    setmember2Firstname(event.target.value);
                  }}
                />
                <TextField
                  id="outlined-full-width"
                  label="นามสกุล (ภาษาไทย)"
                  style={{ marginTop: 10, marginLeft: 15, width: 250 }}
                  placeholder="Placeholder"
                  variant="outlined"
                  onChange={(event) => {
                    setmember2Lastname(event.target.value);
                  }}
                />
              </div>

              <h5 className="GroupName">เลขทะเบียนนักศึกษา</h5>
              <div className="fieldmember">
                <TextField
                  id="outlined-full-width"
                  label="เลขทะเบียนนักศึกษา"
                  style={{ marginTop: 20, marginLeft: 10, width: 200 }}
                  placeholder="60096xxxxx"
                  variant="outlined"
                  onChange={(event) => {
                    setid2(event.target.value);
                  }}
                />

                <TextField
                  id="outlined-full-width"
                  label="ภาคปกติ/ภาคพิเศษ"
                  style={{ marginTop: 20, marginLeft: 20, width: 200 }}
                  placeholder="ภาคปกติ"
                  variant="outlined"
                  onChange={(event) => {
                    setsemester2(event.target.value);
                  }}
                />
              </div>

              <h4 className="GroupName">อาจารย์ที่ปรึกษา</h4>
              <div className="fieldmember">
                <TextField
                  id="outlined-full-width"
                  label="อาจารย์ที่ปรึกษา"
                  style={{ marginTop: 10, marginLeft: 10, width: 400 }}
                  placeholder="Placeholder"
                  variant="outlined"
                  onChange={(event) => {
                    setadvisor(event.target.value);
                  }}
                />
              </div>

              <Button
                // id="btn-create"
                className="button123"
                onClick={addProject}
                variant="outlined"
                color="primary"
                type="submit"
                
                endIcon={<Icon>add</Icon>}
              >
                Submit
              </Button>

              <Button
                // id="btn-cancel"
                className="button456"
                variant="outlined"
                color="primary"
                type="submit"
                endIcon={<Icon>close</Icon>}
             
                // onClick={handleSubmit}
              >
                <Link to="/home2">Cancel</Link>
              </Button>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
};