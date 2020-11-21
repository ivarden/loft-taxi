import React from "react";
import "./navigation.css";

export default function Navigation({ authorized, setAuthorized, setPage }) {
  // const history = useHistory();
  const handleLogOut = () => {
    setAuthorized();
    // history.push("/");
  };
  return (
    <>
      {authorized && (
        <div className="nav-wrap authorized">
          <div className="link-wrap authorized">
            <a href onClick={() => setPage("map")}>
              Map
            </a>
            <a href onClick={() => setPage("profile")}>
              Profile
            </a>
            <a
              href
              onClick={() => {
                setAuthorized();
                setPage("home");
              }}
            >
              Log out
            </a>
          </div>
        </div>
      )}
    </>
  );
}
