import React from "react";
import "./main.css";

export default function Main({ authorized, style, children}) {

  return (
    <main style={style} className={authorized ? "section authorized" : "section"} >
      {children}
    </main>
  );
}
