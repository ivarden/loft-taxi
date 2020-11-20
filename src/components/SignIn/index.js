import React from "react";
import { useHistory, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Form from "../Form";
import Input from "../Input";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    maxWidth: "400px",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "10px",
    boxSizing: "border-box",
    padding: "20px 40px",
  },
  textRight: {
    alignSelf: "flex-end",
    marginBottom: "1.5rem",
    marginTop: "0",
  },
  button: {
    marginBottom: ".5rem",
  },
}));

export default function SignIn({ authorized, setAuthorized }) {
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setAuthorized(!authorized);
    history.push("/map");
    console.log(`\n email: ${email} \n password: ${password}`);
  };

  return (
    <Box component="div" className={classes.root}>
      <Form onSubmit={onSubmit}>
        <Input label="Email" name="email" />
        <Input label="Password" name="password" />
        <p className={classes.textRight}>Forgot password?</p>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Sign In
        </Button>
        <p>
          New user?{" "}
          <Link
            to="/signup"
            style={{ color: "#FDBF5A", textDecoration: "none" }}
          >
            Check in
          </Link>
        </p>
      </Form>
    </Box>
  );
}
