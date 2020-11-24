import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import reportWebVitals from "./reportWebVitals";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffb74d",
      main: "#FDBF5A",
      dark: "#FFA842",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
