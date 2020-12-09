import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";
import { useStyles } from "./styles";

const SignIn = ({ isLoggedIn, history, signIn }) => {
  console.log('isLoggedIn ', isLoggedIn);
  const [user, setUser] = useState({ email: "", password: "" });
  const classes = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    localStorage.setItem("loftTaxi", JSON.stringify({ email, password }));
    signIn({ email, password });
  };

  const inputHandle = (e) => {
    e.preventDefault();
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    isLoggedIn && history.push("/map");
  }, [isLoggedIn, history]);

  useEffect(() => {
    const userLocalStorage = JSON.parse(localStorage.getItem("loftTaxi"));
    userLocalStorage && setUser({ ...userLocalStorage });
  }, []);

  return (
    <Box component="div" className={classes.root}>
      <Form onSubmit={onSubmit}>
        <Input
          label="Email"
          name="email"
          value={user.email}
          onChange={inputHandle}
        />
        <Input
          label="Password"
          name="password"
          value={user.password}
          onChange={inputHandle}
        />
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
};

export default SignIn;
