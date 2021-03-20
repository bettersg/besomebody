import React, { Suspense, lazy, useEffect, useState } from "react";


const StoryBoard = (props) => {

    // StoryBoard component should contain logic to Render the story
    // according to the tags that are passed from GameController

    const storyText = props.storyText;

    // Default style
    const renderDefaultStory = () => {
        return ( 
            <React.Suspense fallback="Loading views...">
                <div className="container">
                    {storyText}
                </div>
            </React.Suspense>
        );
    };

    // WhatsApp style

    // ... style

    const renderStory = () => {

        switch (props.storyTag) {
            case ("_WhatsApp"):
                break;
      
            // New cases for rendering style here

            default: 
                return renderDefaultStory();
        }
    }

    return (
        renderStory()
    )
}

export default StoryBoard;