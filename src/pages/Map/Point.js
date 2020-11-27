import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import point from "./map_point.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    right: "20px",
    bottom: "20px",
    padding: "10px",
    borderRadius: "50%",
    backgroundColor: "white",
    boxShadow: "0px 0px 30px 0px #000000 15%",
    cursor: "pointer",
  },
  "@media (max-width: 420px)": {
    root: {
      display: "none",
    },
  },
}));
export default function Point() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img src={point} alt="map point" />
    </div>
  );
}
