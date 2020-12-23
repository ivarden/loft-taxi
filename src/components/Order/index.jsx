import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Form from "../Form";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";
import InputAdornment from "@material-ui/core/InputAdornment";
import NearMeIcon from "@material-ui/icons/NearMe";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import Button from "../Button";
import { useStyles } from "./styles";
import CarCards from "./CarCards";

function Order({ handleOrder, fetchOrder, history, addresses, error }) {
  const classes = useStyles();

  const checkAddresses = useCallback((_addresses) => {
    const noStreet = ["sorry, street is unavailable"];
    if (Array.isArray(_addresses)) {
      if (_addresses.length) {
        return _addresses;
      } else {
        return noStreet;
      }
    } else {
      return noStreet;
    }
  }, []);

  const [state, setState] = React.useState({
    address1: "",
    address2: "",
    addresses1: checkAddresses(addresses),
    addresses2: checkAddresses(addresses),
    car: 50,
  });
  const { address1, address2, addresses1, addresses2, car } = state;

  const onSubmitForm = (e) => {
    e.preventDefault();
    fetchOrder({ address1, address2, car });
    handleOrder();
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addressFilter = useCallback(
    (_address1, _address2) => {
      if (!!!addresses) return null;
      let filteredAddresses1 = addresses.filter((el) => el !== _address1);
      let filteredAddresses2 = addresses.filter((el) => el !== _address2);
      setState((prev) => ({
        ...prev,
        addresses1: filteredAddresses2,
        addresses2: filteredAddresses1,
      }));
    },
    [addresses]
  );

  useEffect(() => {
    addressFilter(address1, address2);
  }, [address1, address2, addressFilter]);

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
          value={address1}
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
          {addresses1.map((option) => (
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
          value={address2}
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
          {addresses2.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <CarCards handleInputChange={handleInputChange} />

        {!!address1 && !!address2 && !!error ? (
          <Button
            title="Please enter your credit card"
            className={classes.button}
            onClick={() => {
              history.push("/profile");
            }}
            disabled={addresses ? false : true}
          />
        ) : (
          <Button
            title="Order"
            className={classes.button}
            disabled={
              !!address1 && !!address2 && !error && addresses ? false : true
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
