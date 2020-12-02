import React from "react";
import { useHistory, Link } from "react-router-dom";
import styles from "../../helpers/useStyles";
import Box from "@material-ui/core/Box";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { fetchSignIn } from "../../redux/";

const useStyles = styles({
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
  etc: { color: "#FDBF5A", textDecoration: "none", cursor: "pointer" },
});

export default function SignIn() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    dispatch(fetchSignIn({ email, password }));
    history.push("/map");
  };

  return (
    <Box component="div" className={classes.root}>
      <Form onSubmit={onSubmit}>
        <Input label="Email" name="email" />
        <Input label="Password" name="password" />
        <p className={classes.textRight}>Forgot password?</p>
        <Button title="Sign In" className={classes.button} />
        <p>
          New user?{" "}
          <Link to="/signup" className={classes.etc}>
            Check in
          </Link>
        </p>
      </Form>
    </Box>
  );
}
