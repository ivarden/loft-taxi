import React from "react";
import { NavLink, useHistory, BrowserRouter as Router } from "react-router-dom";
import "./navigation.css";

export default function Navigation({ authorized, setAuthorized }) {
  const history = useHistory();
  const handleLogOut = () => {
    setAuthorized();
    history.push("/");
  };
  return (
    <>
      <Router>
        {authorized && (
          <div className="nav-wrap authorized">
            <div className="link-wrap authorized">
              <NavLink to="/map" activeClassName="active">
                Map
              </NavLink>
              <NavLink to="/profile" activeClassName="active">
                Profile
              </NavLink>
              <NavLink
                to="/"
                exact
                onClick={handleLogOut}
                activeClassName="active"
              >
                Log out
              </NavLink>
            </div>
          </div>
        )}
      </Router>
    </>
  );
}
