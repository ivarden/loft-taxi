import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import styles from "../../helpers/useStyles";
import Box from "@material-ui/core/Box";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchSignIn } from "../../actions/user";

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
  const [user, setUser] = useState({ email: "", password: "" });
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    localStorage.setItem("loftTaxi", JSON.stringify({ email, password }));
    dispatch(fetchSignIn({ email, password }));
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
}
