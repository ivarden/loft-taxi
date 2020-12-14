import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useStyles } from "./styles";

export default function Main({ style, children }) {
  const classes = useStyles();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
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
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
};
