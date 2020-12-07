import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../helpers/useStyles";
import Box from "@material-ui/core/Box";
import Form from "../Form";
import Input from "../Input";
import Button from "../Button";

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

  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [success, error, token, history]);

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
    const surname = e.target.name.value;
    const password = e.target.password.value;
    signUp({ email, name, surname, password });
  };
  // const onChangeInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value)
  //   setSignin((state) => ({ ...state, [name]: value }));
  // };

  return (
    <Box component="div" className={classes.root}>
      {error && <h4>{error}</h4>}
      <Form onSubmit={onSubmit}>
        <Input
          // onChange={onChangeInput}
          label="Email"
          name="email"
          required
        />
        <Input
          // onChange={onChangeInput}
          label="Name"
          name="name"
          required
        />
        <Input
          // onChange={onChangeInput}
          label="Surname"
          name="surname"
          required
        />
        <Input
          // onChange={onChangeInput}
          label="Password"
          name="password"
          required
        />
        <Button title="Sign up" className={classes.button} />
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
