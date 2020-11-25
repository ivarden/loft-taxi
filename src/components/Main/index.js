import React from "react";
import styles from "../../helpers/useStyles";
import { AuthContext } from "../../auth-context";
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

export default function Main({ style, children }) {
  const classes = useStyles();
  const { authorized } = React.useContext(AuthContext);
  return (
    <main
      style={style}
      className={authorized ? classes.authorized : classes.root}
    >
      {children}
    </main>
  );
}
