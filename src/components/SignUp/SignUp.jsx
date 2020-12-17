import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../helpers/useStyles";
import Box from "@material-ui/core/Box";
import MuiAlert from "@material-ui/lab/Alert";
import TextField from "@material-ui/core/TextField";
import Form from "../Form";
import Button from "../Button";
import { useFormik } from "formik";
import * as yup from "yup";

const useStyles = styles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    maxWidth: "400px",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    boxSizing: "border-box",
    padding: "20px 40px",
  },
  button: {
    margin: "1rem 0 .5rem 0",
  },
  etc: {
    color: "#FDBF5A",
    textDecoration: "none",
    cursor: "pointer",
  },
});

const SignUp = ({ signUp, history, success, error, token }) => {
  const classes = useStyles();

  const validationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    name: yup
      .string("Enter your name")
      .min(2, "Enter a valid name")
      .required("Name is required"),
    surname: yup
      .string("Enter your surname")
      .min(2, "Enter a valid surname")
      .required("Surname is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      surname: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signUp({ ...values });
    },
  });

  useEffect(() => {
    if (token) {
      history.push("/map");
    }
  }, [success, error, token, history]);

  return (
    <Box component="div" className={classes.root}>
      {error && (
        <MuiAlert open={error} severity="error">
          <strong>{error}</strong>
        </MuiAlert>
      )}
      <Form onSubmit={formik.handleSubmit}>
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
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          id="surname"
          name="surname"
          label="Surname"
          value={formik.values.surname}
          onChange={formik.handleChange}
          error={formik.touched.surname && Boolean(formik.errors.surname)}
          helperText={formik.touched.surname && formik.errors.surname}
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
        <Button title="Sign up" className={classes.button} type="submit" />
        <p>
          Already Registered?{"  "}
          <Link to="/signin" className={classes.etc}>
            Sign in
          </Link>
        </p>
      </Form>
    </Box>
  );
};

export default SignUp;
