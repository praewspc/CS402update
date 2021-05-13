import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import { Row, Col } from "react-bootstrap";
// import { Form ,FormGroup } from 'react-bootstrap';
import { makeStyles } from "@material-ui/core/styles";
// import { Input } from '@material-ui/core';
import { v4 as uuid } from "uuid";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import axios from "axios";
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import {
  Form,
  FormGroup,
  Label,
  Input,
  // Button
} from "reactstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: "50px",
    marginTop: "50px",
  },
  button2: {
    margin: theme.spacing(1),

    marginTop: "50px",
  },
}));

export const BlockCreate_Student2 = () => {
  const classes = useStyles();
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  // const componentDidMount = () => {
  //     axios.get('http://localhost:5000/group/')
  //       .then(response => {
  //         if (response.data.length > 0) {
  //           this.setState({
  //             // users: response.data.map(user => user.username),
  //             // username: response.data[0].username
  //           })
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })}
  let h = useHistory();
  const [groupname, setGroupname] = useState("");
  const [memberfirstname, setmemberFirstname] = useState("");
  const [memberlastname, setmemberLastname] = useState("");
  const [advisorfirstname, setadvisorFirstname] = useState("");
  const [advisorlastname, setadvisorlastname] = useState("");

  const [groupList, setgroupList] = useState([]);

  const changeGroup = () => {
    const newUser = {
      id: uuid(),
      groupname
    }
    addUser(newUser);
    history.push('/group2');
  }

  const addGroup = () => {
    axios
      .post("http://localhost:5000/group/add", {
        groupname: groupname,
        memberfirstname: memberfirstname,
        memberlastname: memberlastname,
        advisorfirstname: advisorfirstname,
        advisorlastname: advisorlastname,
      })
      .then(() => {
        setgroupList([
          ...groupList,
          {
            groupname: groupname,
            memberfirstname: memberfirstname,
            memberlastname: memberlastname,
            advisorfirstname: advisorfirstname,
            advisorlastname: advisorlastname,
          },
        ]);
      });
  };
  console.log(groupname);

  return (
    <div className="rightblockcreate">
      <div className="blockwhitecreate">
        <h1 className="TopnameCreate">Create Group</h1>
        <hr className="hr-create"></hr>

        <Container>
          <Form onSubmit={changeGroup}>

            <h4 className="GroupName">Group Name</h4>
            <form className={classes.root}>
              <div className="fieldmember">
                <TextField
                  type="text"
                  className="from-control"
                  variant="outlined"
                  label="Enter Group Name"
                  onChange={(event) => {
                    setGroupname(event.target.value);
                  }}
                />
              </div>
            </form>

            <h4 className="Add-Member">Member</h4>
            <form className={classes.root}>
              <div className="fieldmember">
                <TextField
                  type="text"
                  variant="outlined"
                  className="from-control"
                  label="Firstname Member"
                  onChange={(event) => {
                    setmemberFirstname(event.target.value);
                  }}
                />
                <TextField
                  type="text"
                  variant="outlined"
                  className="from-control"
                  label="Lastname Member"
                  onChange={(event) => {
                    setmemberLastname(event.target.value);
                  }}
                />
              </div>
            </form>
            
            <h4 className="Add-Advisor">Advistor</h4>
            <form className={classes.root}>
              <div className="fieldmember">
                <TextField
                  type="text"
                  variant="outlined"
                  className="from-control"
                  label="Firstname Advisor"
                  onChange={(event) => {
                    setadvisorFirstname(event.target.value);
                  }}
                />
                <TextField
                  type="text"
                  className="from-control"
                  variant="outlined"
                  label="Lastname Advisor"
                  onChange={(event) => {
                    setadvisorlastname(event.target.value);
                  }}
                />
              </div>
            </form>
            


            <Button
              className="buttonadd"
              onClick={addGroup}
              color="primary"
              type="submit"
              variant="outlined"
              endIcon={<Icon>add</Icon>}
            >
              Submit
            </Button>

            <Button id="btn-cancel"
              className="buttoncancel"
              variant="outlined"
              color="primary"
              type="submit"
              endIcon={<Icon>close</Icon>}
              // onClick={handleSubmit}
            >
              <Link to="/group2">Cancel</Link>
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};