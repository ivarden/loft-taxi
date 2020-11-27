import React from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../auth-context";
import { useStyles } from "./styles";

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

Main.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
};
