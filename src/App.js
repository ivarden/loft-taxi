import React, { Component } from "react";
import "fontsource-roboto";
import "./App.css";
import Header from "./components/Header";
import Map from "./pages/Map";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";

export default class App extends Component {
  state = { activePage: "home", authorized: false };

  setAuthorized = () => {
    this.setState((prev) => ({ authorized: !prev.authorized }));
  };

  setPage = (page) => {
    this.setState((prev) => ({ ...prev, activePage: page }));
  };

  render() {
    const { activePage, authorized } = this.state;

    return (
      <div className={authorized ? "App authorized" : "App"}>
        <Header
          authorized={authorized}
          setAuthorized={this.setAuthorized}
          setPage={this.setPage}
        />
        {
          {
            home: !authorized && (
              <SignIn
                authorized={authorized}
                setAuthorized={this.setAuthorized}
                setPage={this.setPage}
              />
            ),
            signup: !authorized && (
              <SignUp
                authorized={authorized}
                setAuthorized={this.setAuthorized}
                setPage={this.setPage}
              />
            ),
            map: authorized && (
              <Map
                authorized={authorized}
                setAuthorized={this.setAuthorized}
              />
            ),
            profile: authorized && (
              <Profile
                authorized={authorized}
                setAuthorized={this.setAuthorized}
                setPage={this.setPage}
              />
            ),
          }[activePage]
        }
      </div>
    );
  }
}
