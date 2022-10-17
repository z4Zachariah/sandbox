import { Box } from '@material-ui/core';
import React from 'react';
import { Grid } from '@material-ui/core';


import useStyles from './styles';

const Display = () =>{

    const classes = useStyles();

return(
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
   >
 <Box className={classes.box}>


 </Box>

</Grid>
)

}

export default Display;