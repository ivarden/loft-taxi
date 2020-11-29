import React, { useContext } from "react";
// import { useHistory, Link, BrowserRouter as Router } from "react-router-dom";
import styles from "../../helpers/useStyles";
import Box from "@material-ui/core/Box";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";
import { AuthContext } from "../../auth-context";

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

export default function SignUp() {
  const classes = useStyles();
  const {setPage, signup } = useContext(
    AuthContext
  );
  // const history = useHistory();
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
    // history.push("/map");
    signup(e,{ email, name, password });
    console.log(`\n email: ${email} \n name: ${name} \n password: ${password}`);
  };
  // const onChangeInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value)
  //   setSignin((state) => ({ ...state, [name]: value }));
  // };

  return (
    <Box component="div" className={classes.root}>
      <Form onSubmit={onSubmit}>
        <Input
          // onChange={onChangeInput}
          label="Email"
          name="email"
        />
        <Input
          // onChange={onChangeInput}
          label="Your Name"
          name="name"
        />
        <Input
          // onChange={onChangeInput}
          label="Password"
          name="password"
        />
        <Button title="Sign up" className={classes.button} />
        <p>
          Already Registered?{"  "}
          <span
            onClick={() => {
              setPage("home");
            }}
            className={classes.etc}
          >
            Sign in
          </span>
        </p>
      </Form>
    </Box>
  );
}
