import React from "react";
import styles from "../../helpers/useStyles";
import map from "./map.jpg";

const useStyles = styles({
  root: {
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    backgroundImage: `url(${map})`,
    "@media (max-width: 420px)": {
      flex: "0 0 auto",
      minHeight: "90vh",
      padding: "1rem",
    },
  },
  authorized: {
    flex: "1 1 100%",
    display: "flex",
    justifyContent: "normal",
    backgroundImage: `url(${map})`,
    "@media (max-width: 768px)": {
      minHeight: "90vh",
      padding: "1rem",
    },
    "@media (max-width: 420px)": {
      flex: "0 0 auto",
      minHeight: "90vh",
      padding: "1rem",
    },
  },
});

export default function Main({ authorized, style, children }) {
  const classes = useStyles();
  return (
    <main
      style={style}
      className={authorized ? classes.authorized : classes.root}
    >
      {children}
    </main>
  );
}
