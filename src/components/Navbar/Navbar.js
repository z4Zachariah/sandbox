import React from 'react';
import { AppBar, Typography, Button, Toolbar} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import useStyles from './styles';

const Navbar = (props) =>{

    const classes = useStyles();

return(
    <AppBar className={classes.appBar} position="static" color="inherit">
        <Toolbar className={classes.toolbar}>
                <Typography className={classes.title} variant="h1" >SANDBOX</Typography>
                <ArrowBackIosIcon className={classes.arrow} onClick={props.opener}/>
        </Toolbar>
    </AppBar>
)

}

export default Navbar;