import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import Header from "./components/Header";
import Map from "./pages/Map";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import { AuthContext } from "./auth-context";

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
  isLoggedIn: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    "@media (max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

class App extends Component {
  state = {
    activePage: "home",
    isLoggedIn: false,
    user: { email: null, password: null },
    new_user: { email: null, name: null, password: null },
  };

  login = (e, user) => {
    e.preventDefault();
    // user.email === "test" &&
    //   user.password === "test" &&
    this.setState((prev) => ({
      ...prev,
      user: user,
      isLoggedIn: true,
      activePage: "map",
    }));
  };
  signup = (e, new_user) => {
    e.preventDefault();
    // user.email === "test" &&
    //   user.password === "test" &&
    this.setState((prev) => ({
      ...prev,
      new_user: new_user,
      isLoggedIn: true,
      activePage: "map",
    }));
  };
  logout = (e) => {
    e.preventDefault();
    this.setState((prev) => ({
      ...prev,
      user: null,
      isLoggedIn: false,
      activePage: "home",
    }));
  };

  setPage = (page) => {
    // if (this.isLoggedIn) {
    //   this.setState({ activePage: page });
    // } else {
    //   this.setState({ activePage: "home" });
    // }
    this.setState({ activePage: page });
  };

  render() {
    const { classes } = this.props;
    const { activePage, isLoggedIn } = this.state;
    const { setPage, login, logout, signup } = this;
    const PAGES = () => ({
      home: !isLoggedIn && <SignIn />,
      signup: !isLoggedIn && <SignUp />,
      map: isLoggedIn && <Map />,
      profile: isLoggedIn && <Profile />,
    });

    return (
      <div className={isLoggedIn ? classes.isLoggedIn : classes.root}>
        <AuthContext.Provider
          value={{
            isLoggedIn,
            activePage,
            setPage,
            login,
            logout,
            signup,
          }}
        >
          <Header />
          {PAGES()[activePage]}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(App);
