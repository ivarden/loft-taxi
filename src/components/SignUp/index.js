import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {},
  box: {
    display: "flex",
    flexDirection: "column",
    minWidth: "200px",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    boxSizing: "border-box",
    padding: "5% 10%",
  },
  form: {
    flex: "1 1 80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
  },
  title: {
    flex: "0 1 20%",
    margin: "0 0 20px 0",
  },
  input: {
    width: "100%",
    margin: "8px",
  },
  textRight: {
    alignSelf: "flex-end",
  },
  button: {
    marginTop: "1rem",
    width: "100%",
  },
}));

export default function SignUp({ authorized, setAuthorized }) {
  const classes = useStyles();
  // const [signin, setSignin] = useState({
  //   email: null,
  //   name: null,
  //   password: null,
  // });

  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const password = e.target.password.value;

    setAuthorized(!authorized);
    console.log(
      `\n email: ${email} \n name: ${name} \n password: ${password}`
    );
    // console.log(signin);
  };
  // const onChangeInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value)
  //   setSignin((state) => ({ ...state, [name]: value }));
  // };

  return (
    <Box component="div" className={classes.box}>
      <Typography className={classes.title} component="h2" variant="h5">
        Sign up
      </Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          className={classes.input}
          // onChange={onChangeInput}
          label="Email"
          name="email"
        />
        <TextField
          className={classes.input}
          // onChange={onChangeInput}
          label="Your Name"
          name="name"
        />
        <TextField
          className={classes.input}
          // onChange={onChangeInput}
          label="Password"
          name="password"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Sign up
        </Button>
        <p>New user? check in</p>
      </form>
    </Box>
  );
}
