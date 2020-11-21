import React from "react";
import "fontsource-roboto";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Map from "./pages/Map";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  const [authorized, setAuthorized] = React.useState(false);
  const hadleAuthorized = () => {
    setAuthorized((prev) => !prev);
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#ffb74d",
        main: "#FDBF5A",
        dark: "#FFA842",
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className={authorized ? "App authorized" : "App"}>
          <Header authorized={authorized} setAuthorized={hadleAuthorized} />
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <SignIn authorized={authorized} setAuthorized={setAuthorized} />
              )}
            />
            <Route
              path="/signup"
              render={(props) => (
                <SignUp authorized={authorized} setAuthorized={setAuthorized} />
              )}
            />
            <Route
              path="/map"
              render={(props) => (
                <Map authorized={authorized} setAuthorized={setAuthorized} />
              )}
            />
            <Route
              path="/profile"
              render={(props) => (
                <Profile
                  authorized={authorized}
                  setAuthorized={setAuthorized}
                />
              )}
            />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
