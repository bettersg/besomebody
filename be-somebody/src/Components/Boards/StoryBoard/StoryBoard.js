import { useState, useEffect } from "react";
import { Story } from "inkjs";
import storyContent from "../../../Story/nadid.json";
import Choice from "../ChoiceBoard/Choice";
import Renderer from "../../Archive/Renderer/Renderer";
import { nanoid } from "nanoid";

const StoryBoard = () => {
  const [sceneTexts, setSceneTexts] = useState([]);
  const [choices, setChoices] = useState([]);
  const [story, setStory] = useState(new Story(storyContent));

  const continueStory = () => {
    while (story.canContinue) {
      addSceneText(story.Continue(), story.currentTags);
      story.currentChoices.forEach((e) => addChoice(e));
      setStory(story);
    }
  };

  const chooseChoiceIndex = (index) => {
    setChoices([]);

    story.ChooseChoiceIndex(index);
    continueStory();
  };

  useEffect(() => {
    continueStory();
  }, []);

  const addSceneText = (text, tags) => {
    setSceneTexts((oldArray) => [
      ...oldArray,
      {
        text: text,
        tags: tags
      }
    ]);
  };

  const addChoice = (choice) => {
    setChoices((oldArray) => [...oldArray, choice]);
  };

  const textsToRender = sceneTexts.map((scentText, index) => (
    <Renderer key={nanoid()} text={scentText.text} tags={scentText.tags} />
  ));

  const choicesToRender = choices.map((choice, index) => (
    <Choice onClick={chooseChoiceIndex} key={choice.index} choice={choice} />
  ));

  return (
    <>
      <ul>
        {textsToRender}
        {choicesToRender}
      </ul>
    </>
  );
};

export default StoryBoard;
