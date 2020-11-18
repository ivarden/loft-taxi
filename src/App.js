import React from "react";
import "fontsource-roboto";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const [authorized, setAuthorized] = React.useState(false);

  return (
    <div className={authorized ? "App authorized" : "App"}>
      <Header authorized={authorized} setAuthorized={setAuthorized}/>
      <Main authorized={authorized} setAuthorized={setAuthorized}/>
    </div>
  );
}

export default App;
