import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    maxWidth: "440px",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "10px",
    boxSizing: "border-box",
    padding: "20px",
    margin: "20px 0 0 20px",
  },
  textField: {
    display: "flex",
    margin: "20px 0",
  },
  button: {
    margin: "1rem",
    width: "100%",
  },
}));

export default function Popup() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Box className={classes.root} component="div">
      <Typography variant="h4" component="h3" style={{ fontFamily: "Roboto" }}>
        Profile
      </Typography>
      <Typography variant="body1">
        Billing information updated. Now you can order a taxi.
      </Typography>
      <Button
        className={classes.button}
        color="primary"
        onClick={() => {
          history.push("/map");
        }}
        variant="contained"
      >
        Save
      </Button>
    </Box>
  );
}
