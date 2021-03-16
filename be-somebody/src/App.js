import { Component } from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoryBoard from "./Components/Boards/StoryBoard/StoryBoard";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue, green, purple } from "@material-ui/core/colors";
import Menu from "./Pages/Menu/Menu";
import Whatsapp from "./Pages/WhatsappScreen/WhatsappScreen";

const outerTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple
  }
});

function App() {
  return (
    <ThemeProvider theme={outerTheme}>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <div>
              <StoryBoard />
            </div>
            <div>
              <Menu />
            </div>
          </Route>
          <Route exact path="/wa">
            <Whatsapp />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
