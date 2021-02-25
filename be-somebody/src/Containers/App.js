import './App.css';
import Example from "../Components/Example/Example";
import SceneText from "../Components/SceneText/SceneText";
import { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SceneText />
      </div>
    );
  }

}

export default App;
