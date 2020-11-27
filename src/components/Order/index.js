import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import Form from "../Form";
import Cards from "../Cards";

import InputAdornment from "@material-ui/core/InputAdornment";
import NearMeIcon from "@material-ui/icons/NearMe";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignSelf: "flex-start",
    maxWidth: "440px",
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: "10px",
    boxSizing: "border-box",
    padding: "0 10px 10px 10px",
    margin: "20px 0 0 20px",
  },
  textField: {
    display: "flex",
    margin: "20px 0",
  },
  button: {
    margin: "1rem 0 .5rem 0",
  },
  "@media (max-width: 420px)": {
    root: {
      margin: "0",
    },
  },
}));

const streets = [
  {
    value: "1",
    label: "Sreet 1",
  },
  {
    value: "2",
    label: "Sreet 2",
  },
  {
    value: "3",
    label: "Sreet 3",
  },
  {
    value: "4",
    label: "Sreet 4",
  },
];
const streets2 = [
  {
    value: "1",
    label: "Sreet 1",
  },
  {
    value: "2",
    label: "Sreet 2",
  },
  {
    value: "3",
    label: "Sreet 3",
  },
  {
    value: "4",
    label: "Sreet 4",
  },
];

export default function Profile({ handleOrder }) {
  const classes = useStyles();
  // const [signin, setSignin] = useState({
  //   from: null,
  //   to: null,
  // });

  const onSubmit = (e) => {
    e.preventDefault();
    const from = e.target.from.value;
    const to = e.target.to.value;
    handleOrder();

    console.log(`\n from: ${from} \n to: ${to}`);
    return null;
    // console.log(signin);
  };
  // const onChangeInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value)
  //   setSignin((state) => ({ ...state, [name]: value }));
  // };
  const [street, setStreet] = React.useState({ from: "1", to: "2" });
  const handleChange = (event) => {
    setStreet((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <Box component="div" className={classes.root}>
      <Form onSubmit={onSubmit}>
        <TextField
          className={classes.textField}
          id="from"
          name="from"
          select
          label="From"
          value={street.from}
          onChange={handleChange}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RadioButtonCheckedIcon />
              </InputAdornment>
            ),
          }}
        >
          {streets.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className={classes.textField}
          id="to"
          name="to"
          select
          label="Choose destination"
          value={street.to}
          onChange={handleChange}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NearMeIcon color="primary" />
              </InputAdornment>
            ),
          }}
        >
          {streets2.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Cards />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Order
        </Button>
      </Form>
    </Box>
  );
}
