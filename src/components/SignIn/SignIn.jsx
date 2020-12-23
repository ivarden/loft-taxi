import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Form from "../Form";
import Button from "../Button";
import { useStyles } from "./styles";
import MuiAlert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import { useFormik } from "formik";
import * as yup from "yup";

const SignIn = ({ isLoggedIn, history, signIn, error }) => {
  const classes = useStyles();
  const userLocalStorage = JSON.parse(localStorage.getItem("loftTaxi"));
  let email = userLocalStorage ? userLocalStorage.email : "";
  let password = userLocalStorage ? userLocalStorage.password : "";

  useEffect(() => {
    isLoggedIn && history.push("/map");
  }, [isLoggedIn, history]);

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(6, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: email,
      password: password,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      localStorage.setItem("loftTaxi", JSON.stringify({ ...values }));
      signIn({ ...values });
    },
  });

  return (
    <Box component="div" className={classes.root}>
      <Form onSubmit={formik.handleSubmit}>
        {error && (
          <MuiAlert open={error} severity="error">
            <strong>{error}</strong>
          </MuiAlert>
        )}
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          variant="outlined"
          margin="normal"
          required
        />
        {/* <p className={classes.textRight}>Forgot password?</p> */}
        <Button title="Sign In" className={classes.button} type="submit" />
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
