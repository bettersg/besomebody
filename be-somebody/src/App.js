import { Component } from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StoryBoard from "./Components/StoryBoard/StoryBoard";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue, green, purple } from "@material-ui/core/colors";
import Menu from "./Pages/Menu/Menu";

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
        <Switch>
          <Route exact path="/">
            <div>
              <StoryBoard />
            </div>
            <div>
              <Menu />
            </div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
