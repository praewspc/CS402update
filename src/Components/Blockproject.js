import React from 'react'
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ProjectList} from './ProjectList';
import BorderAllIcon from '@material-ui/icons/BorderAll';

const useStyles = makeStyles((theme) => ({
   
    button2: {
        margin: theme.spacing(1),
        marginLeft: "24px",
        marginTop: "20px",
    },
    button3: {
      margin: theme.spacing(1),
      marginLeft: "4px",
      marginTop: "20px"
    },

}))

export const Blockproject = () => {
    const classes = useStyles();

    return (
        <div className="rightblockproject">
            
            <div className="blockwhiteproject">
            <h1 className="TopnameGroup">Group</h1> 

            <hr className="hr-group"></hr>
            <Container>
                <Button id="btn-addproject"
                    className={classes.button2}
                    variant="outlined"
                    color="primary"
                    type="submit"
                    endIcon={<Icon>add</Icon>}
                   
                > 
                <Link to="/create">Add Group</Link>
                </Button>

                <Button 
                    className={classes.button3} 
                    variant="outlined"
                    color="primary"
                    type="submit"
                    endIcon={<BorderAllIcon />}
                    // onClick={getGroup}
                    > Show All Group
                </Button>
            </Container>

            <Container>
                <ProjectList />
            </Container>
            
        </div>

        </div>
    )
}