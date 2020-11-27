import React from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../auth-context";
import { useStyles } from "./styles";

export default function Main({ style, children }) {
  const classes = useStyles();
  const { isLoggedIn } = React.useContext(AuthContext);
  return (
    <main
      style={style}
      className={isLoggedIn ? classes.isLoggedIn : classes.root}
    >
      {children}
    </main>
  );
}

Main.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
};
