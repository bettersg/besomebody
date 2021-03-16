import "../styles.css";
import { Component } from "react";
import StoryBoard from "../Components/Boards/StoryBoard/StoryBoard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StoryBoard />
      </div>
    );
  }
}

export default App;
