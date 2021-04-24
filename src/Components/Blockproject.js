import React from 'react'
import {Link} from 'react-router-dom';

import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ProjectList} from './ProjectList';

const useStyles = makeStyles((theme) => ({
   
    button2: {
        margin: theme.spacing(1),
        marginLeft: "24px",
        // marginTop: "40px"
    }

}))

export const Blockproject = () => {
    const classes = useStyles();

    return (
        <div className="rightblockproject">
            
            <div className="blockwhiteproject">
            <h1 className="Topname">Group</h1> 

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
            </Container>

            <Container>
                <ProjectList />
            </Container>
            
        </div>

        </div>
    )
}