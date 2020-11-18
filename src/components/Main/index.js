import React from "react";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import './main.css'

export default function Main({ authorized, setAuthorized }) {
  return (
    <main className={authorized ? "section authorized" : "section"}>
      {!authorized && (
        <LogIn authorized={authorized} setAuthorized={setAuthorized} />
      )}
      {authorized && (
        <SignUp authorized={authorized} setAuthorized={setAuthorized} />
      )}
    </main>
  );
}
