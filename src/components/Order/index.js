import React from "react";
import PropTypes from "prop-types";
import {
  // useDispatch,
  useSelector,
} from "react-redux";
import Form from "../Form";
// import { Controller } from "react-hook-form";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import NearMeIcon from "@material-ui/icons/NearMe";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import Button from "../Button";
import { useStyles } from "./styles";

import { car_list } from "./data";

export default function Profile({ handleOrder }) {
  const classes = useStyles();
  const { addresses } = useSelector((state) => state.addresses);

  const [address, setAddress] = React.useState({
    address1: "Пулково (LED)",
    address2: "Эрмитаж",
    car: 50,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const address1 = address.address1;
    const address2 = address.address2;
    const car = address.car;
    handleOrder();
    console.log(
      `\n address1: ${address1} \n address2: ${address2} \n car: ${car} \n`
    );
    return null;
  };

  const handleChange = (e) => {
    e.preventDefault();
    setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Box component="div" className={classes.root}>
      <Form onSubmit={onSubmit}>
        <TextField
          className={classes.textField}
          id="address1"
          name="address1"
          select
          size="small"
          label="From"
          value={address.address1}
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
          {addresses.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          className={classes.textField}
          id="address2"
          name="address2"
          select
          size="small"
          label="Choose destination"
          value={address.address2}
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
          {addresses.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <div className={classes.cards}>
          {car_list.map((card) => (
            <MenuItem key={card.name} className={classes.menu_item}>
              <div className={classes.card}>
                <strong>{card.name}</strong>
                <span>Price</span>
                <strong>
                  {card.price} {card.currency}
                </strong>
                <img src={card.picture} alt={card.name} />
                <InputBase
                  className={classes.cardInput}
                  id="car"
                  name="car"
                  value={card.price}
                  onClick={handleChange}
                />
              </div>
            </MenuItem>
          ))}
        </div>

        <Button title="Order" className={classes.button} />
      </Form>
    </Box>
  );
}

Profile.propTypes = {
  handleOrder: PropTypes.func.isRequired,
};
