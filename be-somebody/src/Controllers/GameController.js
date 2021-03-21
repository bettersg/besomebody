import { useState, useEffect } from "react";
import { Story } from "inkjs";
import storyContent from "../Story/nadid.json";
import GamePage from "../Pages/GamePage/GamePage";


const GameController = () => {
    const [story, setStory] = useState(new Story(storyContent));
    const [sceneTexts, setSceneTexts] = useState([]);
    const [choices, setChoices] = useState([]);
    const [tags, setTags] = useState([]);
    const [knot, setKnot] = useState();
  
    // To Do: Handle tags properly

    useEffect(() => {
        continueStory();
    }, []);

    const continueStory = () => {
        while (story.canContinue) {
            addSceneText(story.Continue());
            story.currentChoices.forEach((e) =>addChoice(e));
            setStory(story);
            setTags(story.currentTags);
        }
    };

    const setCurrentKnot = (choice) => {
        const sourcePath = choice.sourcePath;
        const knot = sourcePath.substr(0, sourcePath.indexOf('.'));
        setKnot(knot);
    }

    const chooseChoice = (choice) => {  
        setChoices([]);
        setCurrentKnot(choice);
        story.ChooseChoiceIndex(choice.index);
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
        if(!knot){setCurrentKnot(choice);}
        setChoices((oldArray) => [...oldArray, choice]);
    };

    return (
        <>
            <GamePage
                story={story}
                sceneTexts={sceneTexts}
                choices={choices}
                tags={tags}
                knot={knot}
                choiceOnClick={chooseChoice}
            />
        </>
    );
};

export default GameController;
