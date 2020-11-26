import React from "react";
import PropTypes from "prop-types";
import Form from "../Form";
// import { Controller } from "react-hook-form";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import NearMeIcon from "@material-ui/icons/NearMe";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { useStyles } from "./styles";

import { streets, streets2, car_list } from "./data";

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

    // const car = e.target.car.value;
    handleOrder();

    console.log(`\n from: ${from} \n to: ${to} \n`);
    console.log(street);
    return null;
    // console.log(signin);
  };
  // const onChangeInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value)
  //   setSignin((state) => ({ ...state, [name]: value }));
  // };
  const [street, setStreet] = React.useState({
    from: "1",
    to: "2",
    car: 50,
  });
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
          size="small"
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
          size="small"
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

        <div className={classes.cards} onClick={(e) => console.log(e.target)}>
          {car_list.map((card) => (
            <MenuItem
              name="car"
              value={card.price}
              key={card.name}
              className={classes.menu_item}
            >
              <div className={classes.card}>
                <strong>{card.name}</strong>
                <span>Price</span>
                <strong>
                  {card.price} {card.currency}
                </strong>
                <img src={card.picture} alt={card.name} />
              </div>
            </MenuItem>
          ))}
        </div>

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

Profile.propTypes = {
  handleOrder: PropTypes.func.isRequired,
};
