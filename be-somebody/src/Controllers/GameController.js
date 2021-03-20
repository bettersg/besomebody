import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import { Story } from "inkjs";
import storyContent from "../Story/nadid.json";
import GamePage from "../Pages/GamePage/GamePage";


const GameController = () => {
    const [story, setStory] = useState(new Story(storyContent));
    const [sceneTexts, setSceneTexts] = useState([]);
    const [choices, setChoices] = useState([]);
    const [tags, setTags] = useState([]);
  
    // To Do: Handle tags properly

    useEffect(() => {
        continueStory();
    }, []);

    const continueStory = () => {
        while (story.canContinue) {
            addSceneText(story.Continue(), story.currentTags);
            story.currentChoices.forEach((e) => addChoice(e));
            setStory(story);
            setTags(story.currentTags)
        }
    };

    const chooseChoiceIndex = (index) => {
        setChoices([]);

        story.ChooseChoiceIndex(index);
        continueStory();
    };


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

    return (
        <>
            <GamePage
                story={sceneTexts}
                choices={choices}
                tags={tags}
                choiceOnClick={chooseChoiceIndex}
            />
        </>
    );
};

export default GameController;
