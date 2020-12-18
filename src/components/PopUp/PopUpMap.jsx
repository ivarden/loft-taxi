import React from "react";
import Button from "../Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    maxWidth: "380px",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "10px",
    boxSizing: "border-box",
    padding: "10px 10px 0 10px",
    margin: "20px 0 0 20px",
    zIndex: "1000",
  },
  title: {
    margin: "0 0 10px 0",
  },
  button: {
    margin: "1rem",
    width: "100%",
  },
  "@media (max-width: 420px)": {
    root: {
      margin: 0,
    },
  },
}));

export default function Popup({ handleOrder }) {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="div">
      <Typography variant="h5" component="h3" className={classes.title}>
        The order has been placed.
      </Typography>
      <Typography variant="body1">
        Your taxi is already on its way to you. Will arrive in about 10 minutes.
      </Typography>
      <Button
        title="Make a new order"
        className={classes.button}
        onClick={handleOrder}
      />
    </Box>
  );
}

Popup.propTypes = {
  handleOrder: PropTypes.func,
};
