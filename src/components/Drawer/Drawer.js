import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Container
} from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { useNavigate} from 'react-router-dom';


import useStyles from './styles';


const Drawer = props => {
  const navigate = useNavigate();
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => navigate("/")
    },
    {
      text: "Test Display",
      icon: <DonutLargeIcon />,
      onClick: () => navigate("/display")
    },
    {
        text: "Location",
        icon: <DonutLargeIcon />,
        onClick: () => navigate("/location")
      },
      {
        text: "Item",
        icon: <DonutLargeIcon />,
        onClick: () => navigate("/")
      },
      {
        text: "Item",
        icon: <DonutLargeIcon />,
        onClick: () => navigate("/")
      },
    {
      text: "Item",
      icon: <DonutLargeIcon />,
      onClick: () => navigate("/")
    }
  ];


  return (
    <MUIDrawer open={props.toggle} onClose={props.opener} anchor={"right"} >
      <Container className={classes.contianer}>
      <List className={classes.drawer} onClick={props.opener} >
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick} >
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText className={classes.listText} primary={text} />
            </ListItem>
          );
        })}
      </List>
      </Container>
    </MUIDrawer>
  );
};

export default Drawer;
