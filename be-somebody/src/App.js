import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue, green, purple } from "@material-ui/core/colors";
import "./styles.css";

import Menu from "./Pages/Menu/Menu";
import GameController from "./Controllers/GameController";

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
                <GameController/>
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
