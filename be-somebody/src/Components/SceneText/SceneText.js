
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Story } from "inkjs";
import storyContent from "../../Components/Story/london_story.json";
import styles from "./SceneText.module.css";

const ink = new Story(storyContent);

class SceneText extends Component {

    state = {
        story: [],
        choices: [],
        tags: [],
    }

    ContinueStory = () => {
        let currStory = "";  
        let currChoices = [];

        while (ink.canContinue) { 
            currStory += ink.Continue();
        }  
        
        currChoices.push(ink.currentChoices);
  
        this.setState({story: currStory, choices: currChoices});  
    };

    RenderChoices = () => {
        const choices = [...this.state.choices];
        console.log(choices)
        choices.map((rawChoice) => {
            return (          
                rawChoice.map((choice, i) => {
                    return (
                        <button 
                            key={i}>
                            {choice.text}
                            {console.log(choice)}
                        </button>
                    );
                })
            );
        })
    }

    
    render() {
        return (
            <div className={styles.SceneText}>

                <button onClick={this.ContinueStory}>STORY</button>
                <div>
                    {this.state.story}
                </div>

                <div> Hello
                    {this.RenderChoices()}
                </div>
                
                
            </div>
        );
    };
};

export default SceneText;