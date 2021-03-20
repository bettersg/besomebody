import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import { Story } from "inkjs";
import storyContent from "../Story/nadid.json";

import StoryBoard from "../Components/Boards/StoryBoard/StoryBoard";
import ChoiceBoard from "../Components/Boards/ChoiceBoard/ChoiceBoard";


const GameController = () => {
  const [story, setStory] = useState(new Story(storyContent));
  const [sceneTexts, setSceneTexts] = useState([]);
  const [choices, setChoices] = useState([]);
  const [tags, setTags] = useState([]);


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

  const addSceneText = (text) => {
    setSceneTexts((oldArray) => [
      ...oldArray,
      {
        text: text
      }
    ]);
  };

  const addChoice = (choice) => {
    setChoices((oldArray) => [...oldArray, choice]);
  };

  // To Do: Handle tags properly
  const textsToRender = sceneTexts.map((scentText, index) => (
    <StoryBoard 
      key={nanoid()} 
      storyText={scentText.text} 
      storyTag={scentText.tags} />
  ));

  const choicesToRender = choices.map((choice, index) => (
    <ChoiceBoard 
      onClick={chooseChoiceIndex} 
      key={choice.index} 
      choice={choice} />
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

export default GameController;
