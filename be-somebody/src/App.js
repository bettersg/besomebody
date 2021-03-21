import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue, green, purple } from "@material-ui/core/colors";
import "./styles.css";
import Menu from "./Pages/Menu/Menu";
import GameController from "./Controllers/GameController";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const outerTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();

    return (
        <ThemeProvider theme={outerTheme}>
        <Router>
            <Switch>
            <Route exact path="/">
              <div className={classes.root}>
                <Menu />
                
                <GameController />
              </div>
            </Route>
            </Switch>
        </Router>
        </ThemeProvider>
    );
}

export default App;
