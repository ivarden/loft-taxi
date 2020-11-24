import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import Header from "./components/Header";
import Map from "./pages/Map";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

const useStyles = (theme) => ({
  "@global": {
    body: {
      margin: "0",
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      minHeight: "100vh",
    },
    code: {
      fontFamily:
        "source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace",
    },
  },
  root: {
    display: "flex",
    textAlign: "center",
    minHeight: "100vh",
    "@media (max-width: 420px)": {
      flexDirection: "column",
    },
  },
  authorized: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

class App extends Component {
  state = { activePage: "home", authorized: false };

  setAuthorized = () => {
    this.setState((prev) => ({ authorized: !prev.authorized }));
  };

  setPage = (page) => {
    this.setState({ activePage: page });
  };

  render() {
    const { classes } = this.props;
    const { activePage, authorized } = this.state;
    const { setAuthorized, setPage } = this;
    const PAGES = ({ authorized, setAuthorized, setPage }) => ({
      home: !authorized && (
        <SignIn
          authorized={authorized}
          setAuthorized={setAuthorized}
          setPage={setPage}
        />
      ),
      signup: !authorized && (
        <SignUp
          authorized={authorized}
          setAuthorized={setAuthorized}
          setPage={setPage}
        />
      ),
      map: authorized && (
        <Map
          authorized={authorized}
          setAuthorized={setAuthorized}
          setPage={setPage}
        />
      ),
      profile: authorized && (
        <Profile
          authorized={authorized}
          setAuthorized={setAuthorized}
          setPage={setPage}
        />
      ),
    });

    return (
      <div className={authorized ? classes.authorized : classes.root}>
        <Header
          authorized={authorized}
          setAuthorized={setAuthorized}
          setPage={setPage}
        />
        {PAGES({ authorized, setAuthorized, setPage })[activePage]}
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(App);
