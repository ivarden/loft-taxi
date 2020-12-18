import React from "react";
import logo_img from "../../assets/logo_img.svg";
import logo_titile from "../../assets/logo_title.svg";
import { useSelector } from "react-redux";
import { useStyles } from "./styles";

export default function Logo() {
  const classes = useStyles();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div
      className={isLoggedIn ? classes.logo_wrap_isLoggedIn : classes.logo_wrap}
    >
      <img
        src={logo_img}
        className={isLoggedIn ? classes.logo_img_isLoggedIn : classes.logo_img}
        alt="logo img"
      />
      <img
        src={logo_titile}
        className={
          isLoggedIn ? classes.logo_title_isLoggedIn : classes.logo_title
        }
        alt="logo title"
      />
    </div>
  );
}
