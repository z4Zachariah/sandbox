import React from 'react';
import { Grid, Card, CardContent, Typography, Button, CardMedia, CardActions } from '@material-ui/core';
import dunes from './dunes.webp'

import useStyles from './styles';

const Home = () =>{

    const classes = useStyles();

return(
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"
 >
    <Card className={classes.card} raised elevation={6}>

        <Typography variant="h3"className={classes.header} >Home</Typography>

        <CardMedia component="img"  className={classes.media} image={dunes} />

        <CardContent className={classes.alignItems}>
        <Typography paragraph variant="subtitle1" color="text.secondary">
            Welcome to the Sandbox, an environment I created to build and test different React
            Components. This is the Home page. If you'd like to see more, browse components using the menu in the toolbar.
          </Typography>

        </CardContent>
        <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
        </Card>
    </Grid>
)

}

export default Home;