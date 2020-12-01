import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "fontsource-roboto";
import Header from "./components/Header";
import Map from "./pages/Map";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";
import { signIn, signUp, signOut } from "./redux/actions";

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

let PrivateRouter = ({
  component: RouteComponent,
  isLoggedIn,
  loginPath,
  ...rest
}) => (
  <Route
    {...rest}
    render={(routeProps) =>
      isLoggedIn ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to={loginPath} />
      )
    }
  />
);

class App extends Component {
  state = {};

  render() {
    const { classes, user, isLoggedIn = user.isLoggedIn } = this.props;

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
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { user: state.user };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (payload) => {
      dispatch(signIn(payload));
    },
    signUp: (payload) => {
      dispatch(signUp(payload));
    },
    signOut: (payload) => {
      dispatch(signOut(payload));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles, { withTheme: true })(App));
