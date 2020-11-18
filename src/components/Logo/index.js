import React from "react";
import "./logo.css";
import logo_img from "./logo_img.svg";
import logo_titile from "./logo_title.svg";

export default function Logo({authorized}) {
  return (
    <div className={authorized ? "logo-wrap authorized" : "logo-wrap"}>
      <img
        src={logo_img}
        className={authorized ? "logo-img authorized" : "logo-img"}
        alt="logo img"
      />
      <img
        src={logo_titile}
        className={authorized ? "logo-title authorized" : "logo-title"}
        alt="logo title"
      />
    </div>
  );
}
