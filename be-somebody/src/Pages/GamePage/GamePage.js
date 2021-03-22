import { nanoid } from "nanoid";
import styles from "./GamePage.module.css";
import StoryBoard from "../../Components/Boards/StoryBoard/StoryBoard";
import ChoiceBoard from "../../Components/Boards/ChoiceBoard/ChoiceBoard";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },

  toolbar: theme.mixins.toolbar
}));

const GamePage = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  // GamePage objective is to render the GamePage according
  // to the global tags received via GameController

  // Parse the tags and return the correct UI

  //const tags = props.tags;

  const textsToRender = props.sceneTexts.map((sceneText, index) => (
    <StoryBoard
      key={nanoid()}
      storyText={sceneText.text}
      storyTag={props.tags}
    />
  ));

  const choicesToRender = props.choices.map((choice, index) => (
    <ChoiceBoard
      onClick={props.choiceOnClick}
      key={choice.index}
      choice={choice}
    />
  ));

  // Use GamePage.css to style the overall Page according to UI tags
  const RenderGamePage = () => {
    switch (props.tags) {
      case "_UI":
        break;
      default:
        return styles.GamePage;
    }
  };

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={RenderGamePage()}>
        <ul>
          {textsToRender}
          {choicesToRender}
        </ul>
      </div>
    </main>
  );
};

export default GamePage;
