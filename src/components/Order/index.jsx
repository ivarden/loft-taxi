import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Form from "../Form";
import { fetchOrder } from "../../actions/order";
import InputBase from "@material-ui/core/InputBase";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import NearMeIcon from "@material-ui/icons/NearMe";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import Button from "../Button";
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";

import { car_list } from "./data";

function Order({ handleOrder }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  let history = useHistory();

  const { addresses } = useSelector((state) => state.addresses);
  const { error } = useSelector((state) => state.card);

  const [address, setAddress] = React.useState({
    address1: "",
    address2: "",
    addresses1: addresses,
    addresses2: addresses,
    car: 50,
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    const address1 = address.address1;
    const address2 = address.address2;
    const car = address.car;
    dispatch(fetchOrder({ address1, address2, car }));
    handleOrder();
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    let name = [e.target.name];
    let value = e.target.value;
    setAddress((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    function addressFilter() {
      let filteredAddresses = addresses.filter((el) => el !== address.address1);
      setAddress((prev) => ({ ...prev, addresses2: filteredAddresses }));
    }
    addressFilter(address.address1);
  }, [address.address1, addresses]);

  return (
    <Box component="div" className={classes.root}>
      <Form onSubmit={onSubmitForm}>
        <TextField
          className={classes.textField}
          id="address1"
          name="address1"
          select
          size="small"
          label="From"
          value={address.address1}
          onChange={handleInputChange}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <RadioButtonCheckedIcon />
              </InputAdornment>
            ),
          }}
        >
          {address.addresses1.map((option) => (
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
          onChange={handleInputChange}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <NearMeIcon color="primary" />
              </InputAdornment>
            ),
          }}
        >
          {address.addresses2.map((option) => (
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
                  onClick={handleInputChange}
                />
              </div>
            </MenuItem>
          ))}
        </div>

        {!!address.address1 && !!address.address2 && !!error ? (
          <Button
            title="Please enter your credit card"
            className={classes.button}
            onClick={() => {
              history.push("/profile");
            }}
          />
        ) : (
          <Button
            title="Order"
            className={classes.button}
            disabled={
              !!address.address1 && !!address.address2 && !error ? false : true
            }
          />
        )}
      </Form>
    </Box>
  );
}

Order.propTypes = {
  handleOrder: PropTypes.func.isRequired,
};

export default Order;
