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
import CarCards from './CarCards'

function Order({ handleOrder, fetchOrder, history, addresses, error }) {
  const classes = useStyles();

  const [address, setAddress] = React.useState({
    address1: "",
    address2: "",
    addresses1: addresses || ["No streets"],
    addresses2: addresses || ["No streets"],
    car: 50,
  });

  const onSubmitForm = (e) => {
    e.preventDefault();
    const address1 = address.address1;
    const address2 = address.address2;
    const car = address.car;
    fetchOrder({ address1, address2, car });
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

  const addressFilter = useCallback(
    (address1, address2) => {
      let filteredAddresses1 = addresses.filter((el) => el !== address1);
      let filteredAddresses2 = addresses.filter((el) => el !== address2);
      setAddress((prev) => ({
        ...prev,
        addresses1: filteredAddresses2,
        addresses2: filteredAddresses1,
      }));
    },
    [addresses]
  );

  useEffect(() => {
    addressFilter(address.address1, address.address2);
  }, [address.address1, address.address2, addressFilter]);

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

        <CarCards handleInputChange={handleInputChange} />

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
