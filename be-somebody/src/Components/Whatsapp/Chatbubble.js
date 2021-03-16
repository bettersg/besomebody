import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { lightGreen } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "480px", // to mimic mobile app
    backgroundColor: lightGreen
  },
  inline: {
    display: "inline",
    align: "right"
  }
}));

const ReplyOptionButton = withStyles({
  root: {
    textTransform: "none",
    margin: "1rem"
  }
})(Button);

export default function Whatsapp() {
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Nadid" src="/images/avatar/nadid.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Gav are you there? I really need to talk."
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            ></Typography>
            {" 9:11pm"}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
