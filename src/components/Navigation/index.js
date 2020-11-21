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
            <span onClick={() => setPage("map")}>
              Map
            </span>
            <span onClick={() => setPage("profile")}>
              Profile
            </span>
            <span
              onClick={() => {
                setAuthorized();
                setPage("home");
              }}
            >
              Log out
            </span>
          </div>
        </div>
      )}
    </>
  );
}
