import React from "react";
import styles from "./helpers/useStyles";
import "fontsource-roboto";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRouter from './components/PrivateRout'

const useStyles = styles({
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

const App = () => {
  const classes = useStyles();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <BrowserRouter>
      <div className={isLoggedIn ? classes.isLoggedIn : classes.root}>
        <Header />
        <Switch>
          <Route path="/" component={SignIn} exact />
          <Route path="/signup" component={SignUp} />
          <PrivateRouter
            path="/map"
            component={Map}
            isLoggedIn={isLoggedIn}
            loginPath="/"
          />
          <PrivateRouter
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
            loginPath="/"
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
