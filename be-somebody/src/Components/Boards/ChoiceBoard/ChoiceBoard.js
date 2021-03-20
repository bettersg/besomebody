import React from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
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

// ChoiceBoard is similar to StoryBoard component
// but it should render choices based to on knot tags received
// and Choice tags received via props from GameController

const ChoiceBoard = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    //console.log(props.choice);
    props.onClick(props.choice.index);
  };
  const classes = useStyles();

  return (
    <ReplyOptionButton
      variant="text"
      color="primary"
      className={classes.root}
      onClick={handleClick}
    >
      {props.choice.text}
    </ReplyOptionButton>
  );
};

export default ChoiceBoard;
