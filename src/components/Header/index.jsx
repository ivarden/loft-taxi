import React from "react";
import styles from "../../helpers/useStyles";
import Logo from "../Logo";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";

const useStyles = styles({
  header: {
    flex: "0 1 30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1c1a19",

    "@media (max-width: 420px)": {
      flex: "0 0 auto",
      minHeight: "10vh",
    },
    "@media (max-width: 280px)": {
      flex: "1 1 auto",
      padding: "0 0.5rem",
    },
  },
  header_isLoggedIn: {
    flex: "0 0 80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 3rem",
    backgroundColor: "#1c1a19",

    "@media (max-width: 768px)": {
      minHeight: "10vh",
      padding: "0 1rem",
    },
    "@media (max-width: 420px)": {
      flex: "1 1 auto",
    },
    "@media (max-width: 280px)": {
      padding: "0 0.5rem",
    },
  },
});

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