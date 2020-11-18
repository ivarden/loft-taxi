import React from "react";
import './navigation.css'

export default function Navigation({ authorized, setAuthorized }) {
  return (
    <>
      {authorized && (
        <div className="nav-wrap authorized">
          <div className="link-wrap authorized">
            <a>Map</a>
            <a>Profile</a>
            <a onClick={() => setAuthorized(false)}>Log out</a>
          </div>
        </div>
      )}
    </>
  );
}
