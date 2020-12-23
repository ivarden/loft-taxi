import React from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import { useSelector } from "react-redux";
import { useStyles } from "./styles";

const Header = (props) => {
  const classes = useStyles();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <header className={isLoggedIn ? classes.header_isLoggedIn : classes.header}>
      <Logo />
      <Navigation />
    </header>
  );
};
export default Header;
