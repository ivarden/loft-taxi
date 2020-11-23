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
    this.setState({ activePage: page });
  };

  render() {
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
      <div className={authorized ? "App authorized" : "App"}>
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
