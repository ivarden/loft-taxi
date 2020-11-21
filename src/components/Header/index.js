import React from "react";
import './header.css'

import Logo from "../Logo";
import Navigation from "../Navigation";

export default function Header({ authorized, setAuthorized, setPage }) {
  return (
    <header className={authorized ? "header authorized" : "header"}>
      <Logo authorized={authorized} />
      <Navigation authorized={authorized} setAuthorized={setAuthorized} setPage={setPage} />
    </header>
  );
}
