import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { GroupList2 } from "../Student2/GroupList2";
import BorderAllIcon from '@material-ui/icons/BorderAll';

import { useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button2: {
    margin: theme.spacing(1),
    marginLeft: "24px",
    marginTop: "20px"
  },
  // button3: {
  //   margin: theme.spacing(1),
  //   marginLeft: "4px",
  //   marginTop: "20px"
  // },
}));

export const BlockGroup2 = () => {
  const classes = useStyles();

  const [groupList, setgroupList] = useState([]);

  const getGroup = () => {
    axios.get("http://localhost:5000/group/").then((respond) => {
      setgroupList(respond.data);
    });
  };

  return (
    <div className="rightblockproject">

      <div className="blockwhiteproject">
        <h1 className="TopnameGroup">Group</h1>
        <hr className="hr-group"></hr>
        <Container>
          <Button
            id="btn-addproject"
            className="buttonaddgroup"
            variant="outlined"
            color="primary"
            type="submit"
            endIcon={<Icon>add</Icon>}
          >
          <Link to="/create2">Add Group</Link>
          </Button>

          {/* <Button 
            className={classes.button3} 
            variant="outlined"
            color="primary"
            type="submit"
            endIcon={<BorderAllIcon />}
            onClick={getGroup}> Show All Group
          </Button> */}
          {/* <br></br>
          <br></br> */}
          {groupList.map((val, key) => {
            return (
              <div className=" group list">
                <div className="card-body text-left">
                  <p className="card-text">Groupname: {val.groupname}</p>
                  <p className="card-text">Firstname Member: {val.memberfirstname}</p>
                  <p className="card-text">Lastname Member: {val.memberlastname}</p>
                  <p className="card-text">Adivisor: {val.advisorfirstname}</p>
                </div>
              </div>
            )
          })}
        </Container>

        <Container>
          <GroupList2 />
        </Container>
      </div>
    </div>
  );
};
