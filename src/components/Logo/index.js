import React from "react";
import styles from "../../helpers/useStyles";
import logo_img from "./logo_img.svg";
import logo_titile from "./logo_title.svg";

const useStyles = styles({
  logo_wrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "60%",
    "@media (max-width: 768px)": {},
    "@media (max-width: 420px)": {
      flexDirection: "row",
      maxWidth: "40%",
    },
  },
  logo_wrap_authorized: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    maxWidth: "40%",
    "@media (max-width: 768px)": {
      maxWidth: "40%",
    },
    "@media (max-width: 320px)": {
      flexDirection: "row",
      maxWidth: "35%",
    },
  },

  logo_img: {
    width: "50%",
    margin: "0 0 1rem 0",

    "@media (max-width: 768px)": {
      maxWidth: "40%",
    },

    "@media (max-width: 420px)": {
      maxWidth: "30%",
      margin: "0 0 0 0",
      marginRight: "10px",
    },
  },
  logo_title: {
    width: "70%",

    "@media (max-width: 420px)": {
      // marginRight: "10px",
    },
  },

  logo_img_authorized: {
    width: "20%",
    margin: "0 0.6rem 0 0",
  },
  logo_title_authorized: { width: "80%" },
});

export default function Logo({ authorized }) {
  const classes = useStyles();

  return (
    <div
      className={authorized ? classes.logo_wrap_authorized : classes.logo_wrap}
    >
      <img
        src={logo_img}
        className={authorized ? classes.logo_img_authorized : classes.logo_img}
        alt="logo img"
      />
      <img
        src={logo_titile}
        className={
          authorized ? classes.logo_title_authorized : classes.logo_title
        }
        alt="logo title"
      />
    </div>
  );
}
